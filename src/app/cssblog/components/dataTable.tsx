"use client";
import React from "react";
import Image from "next/image";
import styles from "@/app/ui/accessories.module.css";

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
              <td><code className={styles.element}>{item.datatype}</code></td>
              <td>{item.def}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
        <tr>
          <td colSpan={2}>
            <button className={styles.saveAsPdfButton} onClick={() => onSave(data, title)}>
              Save as PDF <Image src="/file.svg" width={30} height={30} alt="file"/>
            </button>
          </td>
        </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default DataTable;