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

interface PageProps {
  params: { id: string };
}

export default function Page({ params,} : PageProps) {
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
      return null;
  }
}