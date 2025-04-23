"use client";
import React from "react";
import Image from "next/image";
import styles from "@/app/UI/accessories.module.css";

interface Tableinterfaces {
  data: {
    interface: string;
    description: string;
    methods_properties: string;
  }[];
  title: string;
  onSave: (
    data: {
      interface: string;
      description: string;
      methods_properties: string;
    }[],
    title: string
  ) => void;
}

const APITable = ({ data, title, onSave }: Tableinterfaces) => {
  return (
    <div className={styles.tableWrap}>
      <table>
        <caption>{title}</caption>
        <thead>
          <tr>
            <th>Interface</th>
            <th>Description</th>
            <th>methods_properties</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <code className={styles.element}>{item.interface}</code>
              </td>
              <td>{item.description}</td>
              <td>{item.methods_properties}</td>
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
                Save as PDF{" "}
                <Image src="/file.svg" width={30} height={30} alt="file" />
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default APITable;
