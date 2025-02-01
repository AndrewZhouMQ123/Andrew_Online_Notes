"use client"
import NPMTable from '../components/NPMTable';
import npmCommands from "../data/npmCMD";
import { handle2TSave } from '@/app/api/generatePDF';
import styles from '@/app/ui/accessories.module.css';
import PlayButton from '@/components/textToSpeechBtn';

const NpmPage = () => {
  return (
    <div className="page-wrap">
      <span className={styles.blogTitle}>NPM Cheat Sheet</span>
      <PlayButton />
      <NPMTable data={npmCommands} title="NPM Commands" onSave={handle2TSave}/>
    </div>
  );
};

export default NpmPage;