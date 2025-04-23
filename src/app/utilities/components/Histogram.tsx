"use client";
import formstyles from "@/app/ui/forms.module.css";
import SubmitBtn from "./SubmitBtn";
import { useState } from "react";
import { usePdfHandler } from "./CustomHooks";

export const EqHistogram = () => {
  const [bins, setBins] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);
  const [inputError, setInputError] = useState<string | null>(null);

  const validateBins = (
    input: string
  ): { valid: boolean; parsed?: string[] | string; error?: string } => {
    const trimmed = input.trim();

    if (!trimmed) return { valid: false, error: "Bins cannot be empty." };

    if (!trimmed.includes(",")) {
      // Single number of bins
      const binCount = parseInt(trimmed, 10);
      if (isNaN(binCount) || binCount < 1) {
        return {
          valid: false,
          error: "Number of bins must be a positive integer (1 or more).",
        };
      }
      return { valid: true, parsed: binCount.toString() };
    } else {
      // Bin edges
      const binsList = trimmed
        .split(",")
        .map((b) => b.trim())
        .filter((b) => b.length > 0);

      const numbers = binsList.map((b) => parseFloat(b));
      if (numbers.some((n) => isNaN(n))) {
        return { valid: false, error: "All bin edges must be numbers." };
      }

      for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] <= numbers[i - 1]) {
          return {
            valid: false,
            error: "Bin edges must be in strictly increasing order.",
          };
        }
      }

      return { valid: true, parsed: numbers.map(String) };
    }
  };

  const { handlePdfFetch, isLoading, error } = usePdfHandler();
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.delete("files");
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
      }
    }
    formData.delete("bins");
    const result = validateBins(bins);
    if (!result.valid) {
      setInputError(result.error || "Invalid input.");
      return;
    }
    setInputError(null);
    if (typeof result.parsed === "string") {
      formData.append("bins", result.parsed);
    } else if (Array.isArray(result.parsed)) {
      result.parsed.forEach((b) => formData.append("bins", b));
    }
    const route = "/plot/eqhist";
    await handlePdfFetch(route, formData);
  };

  return (
    <div className="page-wrap" id="eq-hist">
      <h1 className="blog-subtitle">Equal-bin-width Histogram</h1>
      <form
        className={formstyles.verticalForm}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <label>Data Files - Multiple: </label>
        <input
          type="file"
          name="files"
          multiple
          onChange={(e) => setFiles(e.target.files)}
          required
        />
        <label>Bins: </label>
        <input
          type="text"
          name="bins"
          placeholder="e.g. 10 or 0,5,10,15"
          value={bins}
          onChange={(e) => setBins(e.target.value)}
          required
        />
        <label>X axis label: </label>
        <input
          type="text"
          name="xlabel"
          placeholder="Enter X axis label"
          required
        />
        <label>Y axis label: </label>
        <input
          type="text"
          name="ylabel"
          placeholder="Enter Y axis label"
          required
        />
        <label>Plot Size: </label>
        <select name="size">
          <option value="small">Single Column - 3.375 inches * 3 inches</option>
          <option value="large">Double Column - 7 inches * 3 inches</option>
        </select>
        <SubmitBtn disabled={isLoading} />
        {error && <p className="error">{error}</p>}
        {inputError && <p className="error">{inputError}</p>}
      </form>
    </div>
  );
};

export const VaryHistogram = () => {
  const [files, setFiles] = useState<FileList | null>(null);
  const { handlePdfFetch, isLoading, error } = usePdfHandler();
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.delete("files");
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
      }
    }
    const route = "/plot/varyhist";
    await handlePdfFetch(route, formData);
  };

  return (
    <div className="page-wrap" id="vary-hist">
      <h1 className="blog-subtitle">
        Vary-bin-width Histogram with Optional weights
      </h1>
      <form
        className={formstyles.verticalForm}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <label>Data and Weight Files: </label>
        <input
          type="file"
          name="files"
          multiple
          onChange={(e) => setFiles(e.target.files)}
          required
        />
        <label>X axis label: </label>
        <input
          type="text"
          name="xlabel"
          placeholder="Enter X axis label"
          required
        />
        <label>Y axis label: </label>
        <input
          type="text"
          name="ylabel"
          placeholder="Enter Y axis label"
          required
        />
        <label>Plot Size: </label>
        <select name="size">
          <option value="small">Single Column - 3.375 inches * 3 inches</option>
          <option value="large">Double Column - 7 inches * 3 inches</option>
        </select>
        <SubmitBtn disabled={isLoading} />
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};
