"use client";
import formstyles from "@/app/ui/forms.module.css";
import SubmitBtn from "./SubmitBtn";
import { port } from "@/app/api/scigraphapi";
import { useApiKey, usePdfHandler } from "./CustomHooks";

export const ScatterXY = () => {
  const apiKey = useApiKey(); // Use the custom hook
  const { handlePdfFetch, isLoading, error } = usePdfHandler();

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await handlePdfFetch(`${port}/plot/scatter`, formData, apiKey as string);
  };

  return (
    <div className="page-wrap" id="scatter-xy">
      <h1 className="blog-subtitle">Scatter Plot</h1>
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

export const ErrBar1x = () => {
  const apiKey = useApiKey(); // Use the custom hook
  const { handlePdfFetch, isLoading, error } = usePdfHandler();

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await handlePdfFetch(`${port}/plot/errbar1x`, formData, apiKey as string);
  };

  return (
    <div className="page-wrap" id="err-bar-1x">
      <h1 className="blog-subtitle">Error Bar Plot with X-error</h1>
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

export const ErrBar1y = () => {
  const apiKey = useApiKey(); // Use the custom hook
  const { handlePdfFetch, isLoading, error } = usePdfHandler();

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await handlePdfFetch(`${port}/plot/errbar1y`, formData, apiKey as string);
  };

  return (
    <div className="page-wrap" id="err-bar-1y">
      <h1 className="blog-subtitle">Error Bar Plot with Y-error</h1>
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

export const ErrBar2xy = () => {
  const apiKey = useApiKey(); // Use the custom hook
  const { handlePdfFetch, isLoading, error } = usePdfHandler();

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await handlePdfFetch(`${port}/plot/errbar2xy`, formData, apiKey as string);
  };
  return (
    <div className="page-wrap" id="err-bar-2xy">
      <h1 className="blog-subtitle">Error Bar Plot with XY-error</h1>
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
