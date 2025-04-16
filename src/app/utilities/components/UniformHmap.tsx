"use client";
import formstyles from "@/app/ui/forms.module.css";
import SubmitBtn from "./SubmitBtn";
import { port } from "@/app/api/scigraphapi";
import { useApiKey, usePdfHandler } from "./CustomHooks";

export const UniformHmap_imshow = () => {
  const apiKey = useApiKey(); // Use the custom hook
  const { handlePdfFetch, isLoading, error } = usePdfHandler();
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await handlePdfFetch(`${port}/plot/imshowhmap`, formData, apiKey as string);
  };
  return (
    <div className="page-wrap" id="uniform-hmap-imshow">
      <h1 className="blog-subtitle">Uniform Mesh Imshow HeatMap</h1>
      <form
        className={formstyles.verticalForm}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <label>Data File: </label>
        <input type="file" name="file" required />
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
        <label>Image Coordinate Origin: </label>
        <select name="origin" required>
          <option>upper</option>
          <option>lower</option>
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

export const UniformHmap_pcolormesh = () => {
  const apiKey = useApiKey(); // Use the custom hook
  const { handlePdfFetch, isLoading, error } = usePdfHandler();
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await handlePdfFetch(`${port}/plot/pmhmap`, formData, apiKey as string);
  };
  return (
    <div className="page-wrap" id="uniform-hmap-pcolormesh">
      <h1 className="blog-subtitle">Uniform Mesh Pcolormesh HeatMap</h1>
      <form
        className={formstyles.verticalForm}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <label>Data File: </label>
        <input type="file" name="file" required />
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
