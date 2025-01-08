"use client";
import React from "react";

interface TableProps {
  data: { cmd: string, desc: string}[];
  title: string;
  onSave: (data: Record<string, string>[], title: string) => void;
}

const CMDTable: React.FC<TableProps> = ({ data, title, onSave }) => {
  return(
    <div>
      <table>
        <caption>{title}</caption>
        <thead>
          <tr>
            <th>Command</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td><code className="cli-cmd">{item.cmd}</code></td>
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

export default CMDTable;