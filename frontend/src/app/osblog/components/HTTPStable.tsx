"use client";
import React from "react";

interface TableProps {
  data: { http: string, desc: string}[];
  title: string;
  onSave: (data: Record<string, string>[], title: string) => void;
}

const HTTPStable: React.FC<TableProps> = ({ data, title, onSave }) => {
  return(
    <div>
      <table>
        <caption>{title}</caption>
        <thead>
          <tr>
            <th>HTTP</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td><code className="element">{item.http}</code></td>
              <td>{item.desc}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
        <tr>
          <td colSpan={2}>
            <button onClick={() => onSave(data, title)}>Save as PDF</button>
          </td>
        </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default HTTPStable;