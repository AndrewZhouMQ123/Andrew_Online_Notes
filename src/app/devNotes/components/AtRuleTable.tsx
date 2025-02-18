"use client";
import Image from "next/image";
import styles from "@/app/ui/accessories.module.css";

interface TableProps {
  data: {atRule: string, desc: string}[];
  title: string;
  onSave: (data:  {atRule: string, desc: string}[], title: string) => void;
}

const AtRuleTable = ({ data, title, onSave }: TableProps) => {
  return (
    <div className={styles.tableWrap}>
      <table>
        <caption>{title}</caption>
        <thead>
          <tr>
            <th>AtRules</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <code className={styles.element}>{item.atRule}</code>
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

export default AtRuleTable;