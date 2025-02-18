"use client";
import React from "react";
import Image from "next/image";
import styles from "@/app/ui/accessories.module.css";

interface Tableobjects {
  data: {object: string, methodsValues: string}[];
  title: string;
  onSave: (data: {object: string, methodsValues: string}[], title: string) => void;
}

const GobjectTable = ({ data, title, onSave }: Tableobjects) => {
  return (
    <div className={styles.tableWrap}>
      <table>
        <caption>{title}</caption>
        <thead>
          <tr>
            <th>Object</th>
            <th>Method Values</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <code className={styles.element}>{item.object}</code>
              </td>
              <td>{item.methodsValues}</td>
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

export default GobjectTable;