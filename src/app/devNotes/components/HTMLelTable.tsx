"use client";
import Image from "next/image";
import styles from "@/app/UI/accessories.module.css";

interface TableProps {
  data: { element: string; attributes: string; desc: string }[];
  title: string;
  onSave: (
    data: { element: string; attributes: string; desc: string }[],
    title: string
  ) => void;
}

const HTMLelTable = ({ data, title, onSave }: TableProps) => {
  return (
    <div className="table-wrap">
      <table>
        <caption>{title}</caption>
        <thead>
          <tr>
            <th>Element</th>
            <th>Attributes</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <code className={styles.element}>{item.element}</code>
              </td>
              <td>{item.attributes}</td>
              <td>{item.desc}</td>
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

export default HTMLelTable;
