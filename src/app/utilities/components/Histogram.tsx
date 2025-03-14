import formstyles from "@/app/ui/forms.module.css";
import SubmitBtn from "./SubmitBtn";

export const EqHistogram = () => {
  return (
    <div className="page-wrap" id="eq-hist">
      <h1 className="blog-subtitle">Equal-bin-width Histogram</h1>
      <form
        className={formstyles.verticalForm}
        action={"URL-EXAMPLE"}
        method="POST"
        encType="multipart/form-data"
      >
        <label>Data File: </label>
        <input type="file" name="file" required />
        <div>
          <label>Bins: </label>
          <input type="number" name="bins" required />
        </div>
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
        <SubmitBtn />
      </form>
    </div>
  );
};

export const VaryHistogram = () => {
  return (
    <div className="page-wrap" id="vary-hist">
      <h1 className="blog-subtitle">
        Vary-bin-width Histogram with Optional weights
      </h1>
      <form
        className={formstyles.verticalForm}
        action={"URL-EXAMPLE"}
        method="POST"
        encType="multipart/form-data"
      >
        <label>Data and Weight Files: </label>
        <input type="file" name="file" multiple required />
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
        <SubmitBtn />
      </form>
    </div>
  );
};
