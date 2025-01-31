import { CommandsPage, HTTPSpage, GitCheatSheet } from "../components/OSCheatSheets";
import { notFound } from 'next/navigation';
import { PageProps } from "@/app/api/interfaces";

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