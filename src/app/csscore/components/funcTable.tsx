"use client";
import Image from "next/image";
import styles from "@/app/ui/accessories.module.css";

interface TableProps {
  data: { func: string, desc: string, params: string}[];
  title: string;
  onSave: (data: { func: string, desc: string, params: string}[], title: string) => void;
}

const FuncTable = ({ data, title, onSave }: TableProps) => {
  return(
    <div className="table-wrap">
      <table>
        <caption>{title}</caption>
        <thead>
          <tr>
            <th>Function</th>
            <th>Description</th>
            <th>Parameters</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td><code className={styles.element}>{item.func}</code></td>
              <td>{item.desc}</td>
              <td>{item.params}</td>
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

export default FuncTable;