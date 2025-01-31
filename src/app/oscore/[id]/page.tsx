import supabase from "@/app/api/db";
import { CommandsPage, HTTPSpage, GitCheatSheet } from "../components/OSCheatSheets";
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const { data, error } = await supabase
    .from('ids_table')
    .select('ids')
    .eq('name', "oscore");

    if (error || !data || data.length === 0) {
      console.error('Error fetching ids:', error);
      return [];
    }
  
    return data[0].ids.map((id: string) => ({
      params: { id },
    }));
}

export default async function Page({ params,} : { params: Promise<{ id: string }> }) {
  const id = (await params).id;

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