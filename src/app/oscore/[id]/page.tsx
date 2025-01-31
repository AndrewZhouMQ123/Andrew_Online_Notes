import { CommandsPage, HTTPSpage, GitCheatSheet } from "../components/OSCheatSheets";
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  // Fetch the list of valid IDs from an API
  // const response = await fetch('https://api.example.com/ids');
  // const ids = await response.json();
  const ids = ['commands', 'https', 'git'];
  
  return ids.map((id: string) => ({
    id,
  }));
}

export default function Page({ params,} : { params: { id: string }; }) {
  const { id } = params;

  switch (id) {
    case 'commands':
      return <CommandsPage />;
    case 'https':
      return <HTTPSpage />;
    case 'git':
      return <GitCheatSheet />;
    default:
      notFound();
  }
}