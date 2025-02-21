export const eqHistogram = () => {
  return (
    <div>
      <h1>Equal-bin-width Histogram</h1>
      <form action={"URL-EXAMPLE"} method="POST" encType="multipart/form-data">
        <label>
          Data File:
          <input type="file" name="file" required/>
        </label>
        <label>
          Bins:
          <input type="number" name="bins" required/>
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
          Plot Size:
          <select name="size">
            <option value="large">Single Column - 3.375 inches * 3 inches</option>
            <option value="small">Double Column - 7 inches * 3 inches</option>
          </select>
        </label>
        <button type="submit">Generate Plot</button>
      </form>
    </div>
  )
}

export const varyHistogram = () => {
  return (
    <div>
      <h1>Vary-bin-width Histogram with Optional weights</h1>
      <form action={"URL-EXAMPLE"} method="POST" encType="multipart/form-data">
        <label>
          Data and Weight Files:
          <input type="file" name="file" required multiple/>
        </label>
        <label>
          Bins:
          <input type="number" name="bins" required/>
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
          Plot Size:
          <select name="size">
            <option value="large">Large</option>
            <option value="small">Small</option>
          </select>
        </label>
        <button type="submit">Generate Plot</button>
      </form>
    </div>
  )
}