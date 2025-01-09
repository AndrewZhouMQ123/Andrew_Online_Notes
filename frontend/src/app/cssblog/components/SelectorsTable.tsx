"use client";
import React from "react";

interface TableProps {
  data: { selector: string, desc: string}[];
  title: string;
  onSave: (data: Record<string, string>[], title: string) => void;
}

const SelectorsTable: React.FC<TableProps> = ({ data, title, onSave }) => {
  return(
    <div className="table-wrap">
      <table>
        <caption>{title}</caption>
        <thead>
          <tr>
            <th>Selectors</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td><code className="element">{item.selector}</code></td>
              <td>{item.desc}</td>
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

export default SelectorsTable;