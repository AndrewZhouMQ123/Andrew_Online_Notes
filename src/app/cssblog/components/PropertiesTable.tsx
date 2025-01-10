"use client";
import React from "react";
import Image from "next/image";
import styles from "@/app/ui/accessories.module.css";

interface TableProps {
  data: { prop: string, desc: string, val: string}[];
  title: string;
  onSave: (data: Record<string, string>[], title: string) => void;
}

const PropertiesTable: React.FC<TableProps> = ({ data, title, onSave }) => {
  return(
    <div className="table-wrap">
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
              <td><code className={styles.element}>{item.prop}</code></td>
              <td>{item.desc}</td>
              <td>{item.val}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
        <tr>
          <td colSpan={3}>
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

export default PropertiesTable;