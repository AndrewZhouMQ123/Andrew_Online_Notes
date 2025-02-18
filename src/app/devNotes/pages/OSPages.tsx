"use client";
import CMDTable from '@/app/devNotes/components/CMDTable';
import { commands, vimcommands, gitCommands, scpcommands, directoryCommands, shortcuts } from '@/app/devNotes/data/commands';
import HTTPStable from '@/app/devNotes/components/HTTPStable';
import { httpProperties, httpMethods, httpHeaders, httpStatusCodes } from '../data/httpsdoc';
import { handle2TSave } from '@/app/api/generatePDF';
import PlayButton from '@/components/textToSpeechBtn';
import Image from 'next/image';

export const CommandsPage = () => {
  return (
    <div className="page-wrap">
      <PlayButton/>
      <CMDTable data={commands} title="linux/MacOS" onSave={handle2TSave} />
      <CMDTable data={directoryCommands} title="Directory Commands" onSave={handle2TSave} />
      <CMDTable data={vimcommands} title="Vim" onSave={handle2TSave} />
      <CMDTable data={scpcommands} title="SCP" onSave={handle2TSave} />
      <CMDTable data={gitCommands} title="Git and Git Related Commands" onSave={handle2TSave} />
      <CMDTable data={shortcuts} title="shortcuts" onSave={handle2TSave} />
    </div>
  );
};

export const HTTPSpage = () => {
  return (
    <div className="page-wrap">
      <PlayButton/>
      <Image src="/Client-server-model.png" height={500} width={800} alt="client server model"/>
      <HTTPStable data={httpMethods} title="HTTP Methods" onSave={handle2TSave} />
      <HTTPStable data={httpStatusCodes} title="HTTP Status Codes" onSave={handle2TSave} />
      <HTTPStable data={httpProperties} title="HTTP Properties" onSave={handle2TSave} />
      <HTTPStable data={httpHeaders} title="HTTP Headers" onSave={handle2TSave} />
    </div>
  );
};