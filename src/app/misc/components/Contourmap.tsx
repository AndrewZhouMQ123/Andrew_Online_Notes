export const CustomHmap_pmf = () => {
  return (
    <div>
      <h1>Custom Mesh and Function Pcolormesh HeatMap</h1>
      <form action={"URL-EXAMPLE"} method="POST" encType="multipart/form-data">
        <label>
          Data File:
          <input type="file" name="file" required/>
        </label>
        <label>
          Title:
          <input type="text" name="title" required/>
        </label>
        <label>
          Colormap:
          <select name="cmap" required>
            <option></option>
            <option></option>
          </select>
        </label>
        <label>
          Heat Function:
          <input type="text" name="func" required/>
        </label>
        <div id="inputsContainer">
          <label>
            Contour Levels:
            <input type="number" name="levels" />
          </label>
        </div>
        <button type="button" id="addContourLevel">Add Contour level</button>
        <label>
          Plot Size:
          <select name="size">
            <option value="large">Single Column - 3.375 inches * 3 inches</option>
            <option value="small">Double Column - 7 inches * 3 inches</option>
          </select>
        </label>
        <label>
          UseAnnotation:
          <input type="hidden" name="useAnnotation" value="false" required/>
          <input type="checkbox" name="useAnnotation" value="true" required/>
        </label>
        <label>
          Data Normalization Setting:
          <select name="normalization">
            <option value=""></option>
            <option value=""></option>
          </select>
        </label>
        <label>
          Data Fill Missing Values Setting:
          <select name="missing_values">
            <option value=""></option>
            <option value=""></option>
          </select>
        </label>
        <label>
          X axis label:
          <input type="text" name="xlabel" required/>
        </label>
        <label>
          Y axis label:
          <input type="text" name="ylabel" required/>
        </label>
        <label>
          Z axis label:
          <input type="text" name="zlabel" required/>
        </label>
        <button type="submit">Generate Plot</button>
      </form>
    </div>
  )
}