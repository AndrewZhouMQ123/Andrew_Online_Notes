"use client";
import { useState, useEffect } from "react";

type PdfHandlerResult = {
  handlePdfFetch: (route: string, formData: FormData) => Promise<void>;
  isLoading: boolean;
  error: string | null;
};

const GOOGLE_TOKEN_STORAGE_KEY = "googleToken"; // Same key as in GoogleLogin
const URL = process.env.URL;

export const usePdfHandler = (): PdfHandlerResult => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [myToken, setMyToken] = useState<string | null>(null);
  useEffect(() => {
    const token = localStorage.getItem(GOOGLE_TOKEN_STORAGE_KEY);
    if (token) {
      setMyToken(token);
    }
  }, []);

  const handlePdfFetch = async (
    route: string,
    formData: FormData
  ): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      if (!myToken) {
        setError("Not logged in. Please sign in.");
        return;
      }

      const response = await fetch(URL + route, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${myToken}`,
        },
      });
      const blob = await response.blob();
      const pdfUrl = window.URL.createObjectURL(blob);
      window.open(pdfUrl, "_blank");
      setTimeout(() => {
        window.URL.revokeObjectURL(pdfUrl);
      }, 1000); // wait a second before cleanup
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch PDF");
      console.error("Error fetching PDF:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return { handlePdfFetch, isLoading, error };
};
