import SubmitBtn from "./SubmitBtn";
import formstyles from "@/app/ui/forms.module.css";

export const BarPlot = () => {
  return (
    <div className="page-wrap" id="bar">
      <h1 className="blog-subtitle">Generate Bar Plot</h1>
      <form
        className={formstyles.verticalForm}
        action={"URL-EXAMPLE"}
        method="post"
        encType="multipart/form-data"
      >
        <label>Data File: </label>
        <input type="file" name="file" required />
        <label>Plot Size: </label>
        <select name="size">
          <option value="small">Single Column - 3.375 inches * 3 inches</option>
          <option value="large">Double Column - 7 inches * 3 inches</option>
        </select>
        <SubmitBtn />
      </form>
    </div>
  );
};

export const PiePlot = () => {
  return (
    <div className="page-wrap" id="pie">
      <h1 className="blog-subtitle">Generate Pie Plot</h1>
      <form
        className={formstyles.verticalForm}
        action={"URL-EXAMPLE"}
        method="post"
        encType="multipart/form-data"
      >
        <label>Data File: </label>
        <input type="file" name="file" required />
        <label>Plot Size: </label>
        <select name="size">
          <option value="small">Single Column - 3.375 inches * 3 inches</option>
          <option value="large">Double Column - 7 inches * 3 inches</option>
        </select>
        <label>Categories (comma-separated):</label>
        <input type="text" name="categories" required />
        <SubmitBtn />
      </form>
    </div>
  );
};

export const BoxPlot = () => {
  return (
    <div className="page-wrap" id="box">
      <h1 className="blog-subtitle">Generate Boxplot</h1>
      <form
        className={formstyles.verticalForm}
        action={"URL-EXAMPLE"}
        method="post"
        encType="multipart/form-data"
      >
        <label>Data File: </label>
        <input type="file" name="file" required />
        <label>Plot Size: </label>
        <select name="size">
          <option value="small">Single Column - 3.375 inches * 3 inches</option>
          <option value="large">Double Column - 7 inches * 3 inches</option>
        </select>
        <label>Categories (comma-separated):</label>
        <input type="text" name="categories" required />
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
        <SubmitBtn />
      </form>
    </div>
  );
};
