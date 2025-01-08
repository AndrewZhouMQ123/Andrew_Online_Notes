"use client";
import React from 'react';
import CMDTable from '@/components/CMDTable';
import { commands, vimcommands } from '@/data/commands';
import { shortcuts } from '@/data/shortcuts';
import HTTPStable from '@/components/HTTPStable';
import { httpProperties, httpMethods, httpHeaders, httpStatusCodes } from '../data/httpsdoc';
import { handleSave } from '@/api/generatePDF';
import PlayButton from '@/components/textToSpeechBtn';

const CommandsPage: React.FC = () => {
  return (
    <div className="page-wrap">
      <PlayButton/>
      <CMDTable data={commands} title="linux/MacOS" onSave={handleSave} />
      <CMDTable data={vimcommands} title="Vim" onSave={handleSave} />
      <CMDTable data={shortcuts} title="shortcuts" onSave={handleSave} />
    </div>
  );
};

const HTTPSpage: React.FC = () => {
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

export default function Home() {
  return (
    <div>
      <h2>Linux File System</h2>
      <p>/</p>
      <h3>Directories</h3>
      <p>/bin</p>
      <p>/boot</p>
      <p>/dev</p>
      <p>/etc</p>
      <p>/home</p>
      <p>/lib</p>
      <p>/media</p>
      <p>/mnt</p>
      <p>/opt</p>
      <p>/proc</p>
      <p>/root</p>
      <p>/run</p>
      <p>/sbin</p>
      <p>/usr</p>
      <p>/srv</p>
      <p>/sys</p>
      <p>/tmp</p>
      <p>/var</p>
      <CommandsPage />
      <HTTPSpage />
    </div>
  );
}
