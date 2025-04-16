"use client";
import formstyles from "@/app/ui/forms.module.css";
import SubmitBtn from "./SubmitBtn";
import { port } from "@/app/api/scigraphapi";
import { useState } from "react";
import { useApiKey, usePdfHandler } from "./CustomHooks";

export const BarPlot = () => {
  const apiKey = useApiKey(); // Use the custom hook
  const { handlePdfFetch, isLoading, error } = usePdfHandler();

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await handlePdfFetch(`${port}/plot/bar`, formData, apiKey as string);
  };
  return (
    <div className="page-wrap" id="bar">
      <h1 className="blog-subtitle">Generate Bar Plot</h1>
      <form
        className={formstyles.verticalForm}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <label>Data File: </label>
        <input type="file" name="file" required />
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

export const PiePlot = () => {
  const [categories, setCategories] = useState("");
  const apiKey = useApiKey(); // Use the custom hook
  const { handlePdfFetch, isLoading, error } = usePdfHandler();

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const categoryList = categories
      .split(",")
      .map((c) => c.trim())
      .filter((c) => c.length > 0);
    formData.delete("categories"); // Replace string with array
    categoryList.forEach((c) => formData.append("categories", c));

    await handlePdfFetch(`${port}/plot/pie`, formData, apiKey as string);
  };
  return (
    <div className="page-wrap" id="pie">
      <h1 className="blog-subtitle">Generate Pie Plot</h1>
      <form
        className={formstyles.verticalForm}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <label>Data File: </label>
        <input type="file" name="file" required />
        <label>Plot Size: </label>
        <select name="size">
          <option value="small">Single Column - 3.375 inches * 3 inches</option>
          <option value="large">Double Column - 7 inches * 3 inches</option>
        </select>
        <label>Categories - comma separated: </label>
        <input
          type="text"
          name="categories"
          placeholder="e.g. Apple, Orange, Banana"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
          required
        />
        <SubmitBtn disabled={isLoading} />
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export const BoxPlot = () => {
  const [categories, setCategories] = useState("");
  const apiKey = useApiKey(); // Use the custom hook
  const { handlePdfFetch, isLoading, error } = usePdfHandler();

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const categoryList = categories
      .split(",")
      .map((c) => c.trim())
      .filter((c) => c.length > 0);
    formData.delete("categories"); // Replace string with array
    categoryList.forEach((c) => formData.append("categories", c));

    await handlePdfFetch(`${port}/plot/boxplot`, formData, apiKey as string);
  };
  return (
    <div className="page-wrap" id="box">
      <h1 className="blog-subtitle">Generate Boxplot</h1>
      <form
        className={formstyles.verticalForm}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <label>Data File: </label>
        <input type="file" name="file" required />
        <label>Plot Size: </label>
        <select name="size">
          <option value="small">Single Column - 3.375 inches * 3 inches</option>
          <option value="large">Double Column - 7 inches * 3 inches</option>
        </select>
        <label>Categories - comma separated: </label>
        <input
          type="text"
          name="categories"
          placeholder="e.g. Apple, Orange, Banana"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
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
        <SubmitBtn disabled={isLoading} />
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};
