"use client";
import { useState } from "react";

type PdfHandlerResult = {
  handlePdfFetch: (route: string, formData: FormData) => Promise<void>;
  isLoading: boolean;
  error: string | null;
};

const GOOGLE_TOKEN_STORAGE_KEY = "googleToken"; // Same key as in GoogleLogin

export const usePdfHandler = (): PdfHandlerResult => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const token = localStorage.getItem(GOOGLE_TOKEN_STORAGE_KEY);

  const handlePdfFetch = async (
    route: string,
    formData: FormData
  ): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      if (!token) {
        setError("Not logged in. Please sign in.");
        return;
      }

      const response = await fetch(`/api/scigraphapis${route}`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `API Error: ${response.status} - ${
            errorData?.error || response.statusText
          }`
        );
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
