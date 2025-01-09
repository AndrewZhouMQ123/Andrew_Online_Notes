"use client";
import React from "react";

interface TableProps {
  data: { prop: string, desc: string, val: string}[];
  title: string;
  onSave: (data: Record<string, string>[], title: string) => void;
}

const PropertiesTable: React.FC<TableProps> = ({ data, title, onSave }) => {
  return(
    <div>
      <table>
        <caption>{title}</caption>
        <thead>
          <tr>
            <th>Properties</th>
            <th>Description</th>
            <th>Values</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td><code className="element">{item.prop}</code></td>
              <td>{item.desc}</td>
              <td>{item.val}</td>
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

export default PropertiesTable;