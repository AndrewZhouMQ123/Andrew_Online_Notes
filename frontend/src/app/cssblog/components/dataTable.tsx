"use client";
import React from "react";

interface TableProps {
  data: { datatype: string, def: string}[];
  title: string;
  onSave: (data: Record<string, string>[], title: string) => void;
}

const DataTable: React.FC<TableProps> = ({ data, title, onSave }) => {
  return(
    <div className="table-wrap">
      <table>
        <caption>{title}</caption>
        <thead>
          <tr>
            <th>Data Type</th>
            <th>Definition</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td><code className="element">{item.datatype}</code></td>
              <td>{item.def}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
        <tr>
          <td colSpan={2}>
            <button className="" onClick={() => onSave(data, title)}>Save as PDF</button>
          </td>
        </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default DataTable;