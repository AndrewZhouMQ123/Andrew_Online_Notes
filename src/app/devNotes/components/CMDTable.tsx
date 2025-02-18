"use client";
import Image from "next/image";
import styles from "@/app/ui/accessories.module.css";

interface TableProps {
  data: { cmd: string, desc: string}[];
  title: string;
  onSave: (data: { cmd: string, desc: string}[], title: string) => void;
}

const CMDTable = ({ data, title, onSave }: TableProps) => {
  return(
    <div className="table-wrap">
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
              <td><code className={styles.cliCMD}>{item.cmd}</code></td>
              <td>{item.desc}</td>
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

export default CMDTable;