"use client";
import React from 'react';
import CMDTable from '@/app/osblog/components/CMDTable';
import { commands, vimcommands } from '@/app/osblog/data/commands';
import { shortcuts } from '@/app/osblog/data/shortcuts';
import HTTPStable from '@/app/osblog/components/HTTPStable';
import { httpProperties, httpMethods, httpHeaders, httpStatusCodes } from './data/httpsdoc';
import { handleSave } from '@/api/generatePDF';
import PlayButton from '@/app/components/textToSpeechBtn';

const CommandsPage: React.FC = () => {
  return (
    <div className="page-wrap">
      <PlayButton/>
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

const GitCheatSheet: React.FC = () => {
  return (
    <div className="page-wrap">
      <h2>Git Cheat Sheet</h2>
      <h3>Resolving Merge Conflicts</h3>
      <ol>
        <li></li>
        <li></li>
        <li></li>
      </ol>
      <h3>Changing Project Name</h3>
      <ol>
        <li>
          Rename the Local Repository:
          <p>
            Open your terminal or command prompt. Navigate to your local
            repository: <code>cd /path/to/your/local/repo</code>
          </p>
          <p>
            Rename the local repository:{" "}
            <code>git remote rename old-repo-name new-repo-name</code>
          </p>
          <p>
            Update the remote URL to the new repo name:{" "}
            <code>
              git remote set-url origin
              https://github.com/username/new-repo-name.git
            </code>
          </p>
        </li>
        <li>
          Rename the GitHub Repository:
          <p>
            Go to your GitHub repository. Click on the &quot;Settings&quot;
            tab. Scroll down to the &quot;Danger Zone&quot; section.
          </p>
          <p>
            Click on &quot;Rename this repository&quot;. Enter the new
            repository name. Click &quot;Rename&quot; to confirm the change.
          </p>
        </li>
        <li>
          Push Changes:
          <p>
            If you have already made changes locally, commit and push them:
          </p>
          <ul>
            <li>
              <code>git add .</code>
            </li>
            <li>
              <code>git commit -m &quot;Update repository name&quot;</code>
            </li>
            <li>
              <code>git push origin main</code> (or <code>master</code>)
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <CommandsPage />
      <HTTPSpage />
      <GitCheatSheet/>
    </div>
  );
}
