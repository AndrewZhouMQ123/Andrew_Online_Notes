"use client";
import Image from "next/image";
import styles from "@/app/UI/accessories.module.css";

interface TableProps {
  data: { entity: string; unicode: string; htmlCode: string }[];
  title: string;
  onSave: (
    data: { entity: string; unicode: string; htmlCode: string }[],
    title: string
  ) => void;
}

const HTMLEntitesTable = ({ data, title, onSave }: TableProps) => {
  return (
    <div className="table-wrap">
      <table>
        <caption>{title}</caption>
        <thead>
          <tr>
            <th>Entity</th>
            <th>Unicode</th>
            <th>HTMLCode</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <code className={styles.element}>{item.entity}</code>
              </td>
              <td>{item.unicode}</td>
              <td>{item.htmlCode}</td>
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

export default HTMLEntitesTable;
