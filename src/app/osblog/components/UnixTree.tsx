import React from 'react';

// Define types for the file system structure
type FileSystemNode = {
  name: string;
  type: 'directory' | 'file';
  children?: FileSystemNode[];
};

// Props for the TreeNode component
interface TreeNodeProps {
  node: FileSystemNode;
}

// Recursive component to render the file system tree
const TreeNode = ({ node }: TreeNodeProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 10px' }}>
      <div style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '5px', background: node.type === 'directory' ? '#e3f2fd' : '#fff' }}>
        {node.type === 'directory' ? '📁' : '📄'} {node.name}
      </div>
      {node.children && (
        <div style={{ display: 'flex', marginTop: '10px' }}>
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

// Data representing the Linux file system
const fileSystem: FileSystemNode = {
  name: '/',
  type: 'directory',
  children: [
    { name: 'bin', type: 'directory' },
    { name: 'boot', type: 'directory' },
    { name: 'dev', type: 'directory' },
    { name: 'etc', type: 'directory' },
    { name: 'home', type: 'directory' },
    { name: 'lib', type: 'directory' },
    { name: 'media', type: 'directory' },
    { name: 'mnt', type: 'directory' },
    { name: 'opt', type: 'directory' },
    { name: 'proc', type: 'directory' },
    { name: 'root', type: 'directory' },
    { name: 'run', type: 'directory' },
    { name: 'sbin', type: 'directory' },
    {
      name: 'usr',
      type: 'directory',
      children: [
        { name: 'bin', type: 'directory' },
        { name: 'lib', type: 'directory' },
        { name: 'local', type: 'directory' },
      ],
    },
    { name: 'srv', type: 'directory' },
    { name: 'sys', type: 'directory' },
    { name: 'tmp', type: 'directory' },
    { name: 'var', type: 'directory' },
  ],
};

// Main component to render the file system
export const LinuxFileSystemTree: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', overflowX: 'auto' }}>
      <h2>Linux File System</h2>
      <div style={{ display: 'inline-flex', justifyContent: 'flex-start' }}>
        <TreeNode node={fileSystem} />
      </div>
    </div>
  );
};

// Data representing the macOS file system
const macFileSystem: FileSystemNode = {
  name: '/',
  type: 'directory',
  children: [
    { name: 'Applications', type: 'directory' },
    { name: 'Library', type: 'directory' },
    { name: 'System', type: 'directory' },
    { name: 'Users', type: 'directory', children: [
      { name: 'Shared', type: 'directory' },
      { name: 'YourUsername', type: 'directory', children: [
        { name: 'Desktop', type: 'directory' },
        { name: 'Documents', type: 'directory' },
        { name: 'Downloads', type: 'directory' },
        { name: 'Pictures', type: 'directory' },
        { name: 'Movies', type: 'directory' },
        { name: 'Music', type: 'directory' },
      ]},
    ]},
    { name: 'Volumes', type: 'directory' },
    { name: 'bin', type: 'directory' },
    { name: 'etc', type: 'directory' },
    { name: 'tmp', type: 'directory' },
    { name: 'var', type: 'directory' },
  ],
};

// Main component to render the macOS file system
export const MacFileSystemTree = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', overflowX: 'auto' }}>
      <h2>macOS File System</h2>
      <div style={{ display: 'inline-flex', justifyContent: 'flex-start' }}>
        <TreeNode node={macFileSystem} />
      </div>
    </div>
  );
};