import { useEffect, useState } from "react";
import { apikeyPromise } from "@/app/api/scigraphapi"; // Import the promise

export const useApiKey = (): string | null => {
  const [apiKey, setApiKey] = useState<string | null>(null);

  useEffect(() => {
    const fetchApiKey = async () => {
      try {
        const key = (await apikeyPromise) as string; // Resolve the promise
        setApiKey(key); // Store the resolved API key in state
      } catch (error) {
        console.error("Failed to fetch API key:", error);
      }
    };

    fetchApiKey(); // Call the async function
  }, []); // Empty dependency array ensures this runs only once

  return apiKey; // Return the API key
};

type PdfHandlerResult = {
  handlePdfFetch: (
    url: string,
    formData: FormData,
    apiKey: string
  ) => Promise<void>;
  isLoading: boolean;
  error: string | null;
};

export const usePdfHandler = (): PdfHandlerResult => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handlePdfFetch = async (
    url: string,
    formData: FormData,
    apiKey: string
  ): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
        headers: {
          "X-API-Key": apiKey,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const blob = await response.blob();
      const pdfUrl = window.URL.createObjectURL(blob);
      window.open(pdfUrl, "_blank");
      window.URL.revokeObjectURL(pdfUrl); // Clean up
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch PDF");
      console.error("Error fetching PDF:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return { handlePdfFetch, isLoading, error };
};
