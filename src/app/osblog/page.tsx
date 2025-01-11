"use client";
import React from 'react';
import CMDTable from '@/app/osblog/components/CMDTable';
import { commands, vimcommands, gitCommands, directoryCommands, shortcuts } from '@/app/osblog/data/commands';
import HTTPStable from '@/app/osblog/components/HTTPStable';
import { httpProperties, httpMethods, httpHeaders, httpStatusCodes } from './data/httpsdoc';
import { handleSave } from '@/api/generatePDF';
import PlayButton from '@/components/textToSpeechBtn';
import { LinuxFileSystemTree, MacFileSystemTree} from './components/UnixTree';

const DirectoryPage = () => {
  return (
    <div className="page-wrap">
      <PlayButton/>
      <LinuxFileSystemTree/>
      <MacFileSystemTree/>
    </div>
  );
};

const CommandsPage = () => {
  return (
    <div className="page-wrap">
      <PlayButton/>
      <CMDTable data={commands} title="linux/MacOS" onSave={handleSave} />
      <CMDTable data={vimcommands} title="Vim" onSave={handleSave} />
      <CMDTable data={gitCommands} title="Git" onSave={handleSave} />
      <CMDTable data={directoryCommands} title="Directory Commands" onSave={handleSave} />
      <CMDTable data={shortcuts} title="shortcuts" onSave={handleSave} />
    </div>
  );
};

const HTTPSpage = () => {
  return (
    <div className="page-wrap">
      <PlayButton/>
      <HTTPStable data={httpMethods} title="HTTP Methods" onSave={handleSave} />
      <HTTPStable data={httpStatusCodes} title="HTTP Status Codes" onSave={handleSave} />
      <HTTPStable data={httpProperties} title="HTTP Properties" onSave={handleSave} />
      <HTTPStable data={httpHeaders} title="HTTP Headers" onSave={handleSave} />
    </div>
  );
};

const GitCheatSheet: React.FC = () => {
  return (
    <div className="page-wrap">
      <PlayButton/>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <DirectoryPage />
      <CommandsPage />
      <HTTPSpage />
      <GitCheatSheet/>
    </div>
  );
}
