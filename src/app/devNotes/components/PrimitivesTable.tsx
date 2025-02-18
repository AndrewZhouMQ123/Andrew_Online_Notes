"use client";
import React from "react";
import Image from "next/image";
import styles from "@/app/ui/accessories.module.css";

interface Tableidentifiers {
  data: {identifier: string, literal: string, description: string}[];
  title: string;
  onSave: (data: {identifier: string, literal: string, description: string}[], title: string) => void;
}

const PrimitivesTable = ({ data, title, onSave }: Tableidentifiers) => {
  return (
    <div className={styles.tableWrap}>
      <table>
        <caption>{title}</caption>
        <thead>
          <tr>
            <th>Identifier</th>
            <th>Literal</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <code className={styles.element}>{item.identifier}</code>
              </td>
              <td>{item.literal}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>
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

export default PrimitivesTable;