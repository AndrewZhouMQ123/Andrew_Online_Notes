"use client";
import formstyles from "@/app/ui/forms.module.css";
import SubmitBtn from "./SubmitBtn";
import { port } from "@/app/api/scigraphapi";
import { useState } from "react";
import { useApiKey, usePdfHandler } from "./CustomHooks";

export const CustomHmap_pcolormesh = () => {
  const [files, setFiles] = useState<FileList | null>(null);
  const apiKey = useApiKey(); // Use the custom hook
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
    await handlePdfFetch(`${port}/plot/pmChmap`, formData, apiKey as string);
  };
  return (
    <div className="page-wrap" id="custom-hmap-pcolormesh">
      <h1 className="blog-subtitle">Custom Mesh Pcolormesh HeatMap</h1>
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
          onChange={(e) => setFiles(e.target.files)} // State update on file change
          required
        />
        <label>Title: </label>
        <input
          type="text"
          name="title"
          placeholder="Enter your plot title"
          required
        />
        <label>Colormap: </label>
        <select name="cmap" required>
          <option>viridis</option>
          <option>plasma</option>
          <option>inferno</option>
          <option>magma</option>
          <option>cividis</option>
        </select>
        <label>Shading: </label>
        <select name="shading" required>
          <option>flat</option>
          <option>nearest</option>
          <option>gouraud</option>
          <option>auto</option>
        </select>
        <label>Plot Size: </label>
        <select name="size">
          <option value="small">Single Column - 3.375 inches * 3 inches</option>
          <option value="large">Double Column - 7 inches * 3 inches</option>
        </select>
        <label>
          UseAnnotation:
          <input type="hidden" name="useAnnotation" value="false" required />
          <input type="checkbox" name="useAnnotation" value="true" required />
        </label>
        <label>Data Normalization Setting: </label>
        <select name="normalization">
          <option value="minmax">minmax</option>
          <option value="zscore">zscore</option>
        </select>
        <label>Data Fill Missing Values Setting: </label>
        <select name="missing_values">
          <option value="mean">mean</option>
          <option value="median">median</option>
        </select>
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
        <label>Z axis label: </label>
        <input
          type="text"
          name="zlabel"
          placeholder="Enter Z axis label"
          required
        />
        <SubmitBtn disabled={isLoading} />
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export const CustomHmap_pmf = () => {
  const [func, setFunc] = useState("");
  const [funcError, setFuncError] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);
  const apiKey = useApiKey(); // Use the custom hook
  const { handlePdfFetch, isLoading, error } = usePdfHandler();

  // Safe environment with numpy and scipy
  const safeEnvironment = {
    np: {
      sin: Math.sin,
      cos: Math.cos,
      tan: Math.tan,
      // add any specific numpy functions you want to allow
    },
    sp: {
      gamma: (x: number) => {
        try {
          return Math.exp(-x); // Just a simple example for gamma, replace with actual scipy functionality if needed
        } catch (e) {
          console.log(e);
          return NaN;
        }
      },
      // add more scipy functions if needed
    },
  };

  const handleFuncChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFunc = e.target.value;
    setFunc(newFunc);

    try {
      // Create the function using the safe environment
      const testFunc = new Function(
        "x",
        "y",
        `with(this) { return ${newFunc} }`
      );

      // Try to execute it with x = 1 and y = 1 (or any arbitrary test values)
      const result = testFunc.call(safeEnvironment, 1, 1); // x = 1, y = 1

      // Check if the result is a valid number (i.e., not NaN)
      if (isNaN(result)) {
        throw new Error("Invalid function result");
      }

      // If the function works, clear the error message
      setFuncError("");
    } catch (e) {
      setFuncError("funcError: Invalid function. Please use only x and y." + e);
    }
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    if (funcError) {
      alert("Please fix the function before submitting.");
      return;
    }
    const formData = new FormData(event.currentTarget);
    formData.delete("files");
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
      }
    }

    await handlePdfFetch(`${port}/plot/pmfhmap`, formData, apiKey as string);
  };
  return (
    <div className="page-wrap" id="custom-hmap-pmf">
      <h1 className="blog-subtitle">
        Custom Mesh and Function Pcolormesh HeatMap
      </h1>
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
          onChange={(e) => setFiles(e.target.files)} // State update on file change
          required
        />
        <label>Title: </label>
        <input
          type="text"
          name="title"
          placeholder="Enter your plot title"
          required
        />
        <label>Colormap: </label>
        <select name="cmap" required>
          <option>viridis</option>
          <option>plasma</option>
          <option>inferno</option>
          <option>magma</option>
          <option>cividis</option>
        </select>
        <label>Heat Function - Please only use x, y as variable: </label>
        <input
          type="text"
          name="func"
          value={func}
          onChange={handleFuncChange}
          placeholder="2*x + y + 5"
          required
        />
        <label>Shading: </label>
        <select name="shading" required>
          <option>flat</option>
          <option>nearest</option>
          <option>gouraud</option>
          <option>auto</option>
        </select>
        <label>Plot Size: </label>
        <select name="size">
          <option value="small">Single Column - 3.375 inches * 3 inches</option>
          <option value="large">Double Column - 7 inches * 3 inches</option>
        </select>
        <label>
          UseAnnotation:
          <input type="hidden" name="useAnnotation" value="false" required />
          <input type="checkbox" name="useAnnotation" value="true" required />
        </label>
        <label>Data Normalization Setting: </label>
        <select name="normalization">
          <option value="minmax">minmax</option>
          <option value="zscore">zscore</option>
        </select>
        <label>Data Fill Missing Values Setting: </label>
        <select name="missing_values">
          <option value="mean">mean</option>
          <option value="median">median</option>
        </select>
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
        <label>Z axis label: </label>
        <input
          type="text"
          name="zlabel"
          placeholder="Enter Z axis label"
          required
        />
        <SubmitBtn disabled={isLoading} />
        {error && <p className="error">{error}</p>}
        {funcError && <div className="error">{funcError}</div>}
      </form>
    </div>
  );
};
