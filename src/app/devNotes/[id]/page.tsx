import supabase from "@/app/api/db";
import { CommandsPage, HTTPSpage } from "../pages/OSPages";
import { notFound } from 'next/navigation';
import JSCore from "../pages/JSCheatSheet";
import NpmPage from "../pages/NpmPage";
import HTMLCore from "../pages/HTMLCheatSheet";
import CSSCore from "../pages/CSSCheatSheet";

export async function generateStaticParams() {
  const { data, error } = await supabase
    .from('ids_table')
    .select('ids')
    .eq('name', "devnotes");

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
    case 'htmlcore':
      return <HTMLCore/>
    case 'csscore':
      return <CSSCore/>
    case 'jscore':
      return <JSCore/>;
    case 'commands':
      return <CommandsPage/>;
    case 'https':
      return <HTTPSpage/>;
    case 'npm':
      return <NpmPage/>;
    default:
      notFound();
  }
}