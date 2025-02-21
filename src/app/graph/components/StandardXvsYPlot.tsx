interface plotProps {
  plotType: string
}

export const StandardXvsYPlot = ({ plotType }: plotProps) => {
  return (
    <div>
      <h1>{plotType}</h1>
      <form action={"URL-EXAMPLE"} method="POST" encType="multipart/form-data">
        <label>
          Data File:
          <input type="file" name="file" required/>
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