"use client";
import React from "react";

interface TableProps {
  data: { func: string, desc: string, params: string}[];
  title: string;
  onSave: (data: Record<string, string>[], title: string) => void;
}

const FuncTable: React.FC<TableProps> = ({ data, title, onSave }) => {
  return(
    <div className="table-wrap">
      <table>
        <caption>{title}</caption>
        <thead>
          <tr>
            <th>Function</th>
            <th>Description</th>
            <th>Parameters</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td><code className="element">{item.func}</code></td>
              <td>{item.desc}</td>
              <td>{item.params}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
        <tr>
          <td colSpan={3}>
            <button className="" onClick={() => onSave(data, title)}>Save as PDF</button>
          </td>
        </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default FuncTable;