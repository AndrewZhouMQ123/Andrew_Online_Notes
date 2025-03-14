import formstyles from "@/app/ui/forms.module.css";
import SubmitBtn from "./SubmitBtn";

export const CustomHmap_pcolormesh = () => {
  return (
    <div className="page-wrap" id="custom-hmap-pcolormesh">
      <h1 className="blog-subtitle">Custom Mesh Pcolormesh HeatMap</h1>
      <form
        className={formstyles.verticalForm}
        action={"URL-EXAMPLE"}
        method="POST"
        encType="multipart/form-data"
      >
        <label>Data Files: </label>
        <input type="file" name="file" multiple required />
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
        <SubmitBtn />
      </form>
    </div>
  );
};

export const CustomHmap_pmf = () => {
  return (
    <div className="page-wrap" id="custom-hmap-pmf">
      <h1 className="blog-subtitle">
        Custom Mesh and Function Pcolormesh HeatMap
      </h1>
      <form
        className={formstyles.verticalForm}
        action={"URL-EXAMPLE"}
        method="POST"
        encType="multipart/form-data"
      >
        <label>Data Files: </label>
        <input type="file" name="file" multiple required />
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
        <label>Heat Function: </label>
        <input
          type="text"
          name="func"
          placeholder="Enter your heat function f(x), ex: 2x + 5"
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
        <SubmitBtn />
      </form>
    </div>
  );
};
