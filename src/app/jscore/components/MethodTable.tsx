"use client";
import React from "react";
import Image from "next/image";
import styles from "@/app/ui/accessories.module.css";

interface Tablemethods {
  data: {method: string, desc: string}[];
  title: string;
  onSave: (data: {method: string, desc: string}[], title: string) => void;
}

const GmethodTable = ({ data, title, onSave }: Tablemethods) => {
  return (
    <div className={styles.tableWrap}>
      <table>
        <caption>{title}</caption>
        <thead>
          <tr>
            <th>Method</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <code className={styles.element}>{item.method}</code>
              </td>
              <td>{item.desc}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>
              <button
                className={styles.saveAsPdfButton}
                onClick={() => onSave(data, title)}
              >
                Save as PDF{' '}
                <Image src="/file.svg" width={30} height={30} alt="file" />
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default GmethodTable;