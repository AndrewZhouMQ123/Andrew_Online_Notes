"use client";
import formstyles from "@/app/ui/forms.module.css";
import SubmitBtn from "./SubmitBtn";
import { usePdfHandler } from "./CustomHooks";

export const ScatterXY = () => {
  const { handlePdfFetch, isLoading, error } = usePdfHandler(); // Use the custom hook
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const route = "/plot/scatter";
    await handlePdfFetch(route, formData);
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
  const { handlePdfFetch, isLoading, error } = usePdfHandler(); // Use the custom hook
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const route = "/plot/errbar1x";
    await handlePdfFetch(route, formData);
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
  const { handlePdfFetch, isLoading, error } = usePdfHandler(); // Use the custom hook
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const route = "/plot/errbar1y";
    await handlePdfFetch(route, formData);
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
  const { handlePdfFetch, isLoading, error } = usePdfHandler(); // Use the custom hook
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const route = "/plot/errbar2xy";
    await handlePdfFetch(route, formData);
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
