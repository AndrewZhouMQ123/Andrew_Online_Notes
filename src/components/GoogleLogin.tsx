"use client";
import { useEffect, useState, useCallback } from "react";

interface GoogleCredentialResponse {
  credential: string; // The returned ID token.
  select_by?: string; // How the credential was selected.
  state?: string; // Only defined if the button's 'state' attribute was specified.
}

interface DecodedJwtPayload {
  iss?: string;
  nbf?: number;
  aud?: string;
  sub: string; // The unique ID of the user's Google Account (likely always present)
  hd?: string;
  email?: string;
  email_verified?: boolean;
  azp?: string;
  name?: string;
  picture?: string;
  given_name?: string;
  family_name?: string;
  locale?: string; // Although not in the example, it's common
  iat?: number;
  exp?: number;
  jti?: string;
}

const GOOGLE_TOKEN_STORAGE_KEY = "googleToken"; // Key for localStorage

const GoogleLogin = () => {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string;
  const [user, setUser] = useState<DecodedJwtPayload | null>(null);

  const decodeJwtResponse = useCallback((token: string) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  }, []); // No dependencies as it doesn't use external state/props

  const handleCredentialResponse = useCallback(
    (response: GoogleCredentialResponse) => {
      setUser(decodeJwtResponse(response.credential));
      localStorage.setItem(GOOGLE_TOKEN_STORAGE_KEY, response.credential);
    },
    [setUser, decodeJwtResponse]
  ); // Dependencies are the state updater and the memoized decoder

  useEffect(() => {
    const initializeGoogleSignIn = async () => {
      if (!window.google) {
        console.error("Google API not loaded");
        return;
      }
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleCredentialResponse,
        auto_select: true, // Optional: Attempts to automatically sign in the user if they have previously signed in
      });
      const buttonContainer = document.getElementById("google-sign-in-button");
      if (buttonContainer) {
        window.google.accounts.id.renderButton(buttonContainer, {
          type: "standard", // Or "icon" depending on your preference
          theme: "outline",
          size: "large",
        });
      } else {
        console.error("Could not find the 'google-sign-in-button' element.");
      }
    };

    // Load the Google Sign-In API script
    const loadGoogleScript = () => {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      script.onload = initializeGoogleSignIn;
      document.body.appendChild(script);
    };

    loadGoogleScript();

    return () => {
      const scriptTag = document.querySelector(
        'script[src="https://accounts.google.com/gsi/client"]'
      );
      if (scriptTag) {
        document.body.removeChild(scriptTag);
      }
    };
  }, [clientId, handleCredentialResponse]);

  const handleLogout = () => {
    if (window.google && user?.sub) {
      window.google.accounts.id.revoke(user.sub, (response) => {
        console.log("Logout response:", response);
        setUser(null);
      });
    } else {
      console.error("Google API not loaded or user not logged in for logout.");
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div id="google-sign-in-button"></div>
      )}
    </div>
  );
};

export default GoogleLogin;
