import supabase from "@/app/api/db";
import { CommandsPage, HTTPSpage, ShortCutsPage } from "../pages/OSPages";
import { notFound } from "next/navigation";
import JSCore from "../pages/JSCheatSheet";
import NpmPage from "../pages/NpmPage";
import HTMLCore from "../pages/HTMLCheatSheet";
import CSSCore from "../pages/CSSCheatSheet";

enum PageType {
  HTMLCore = 1,
  CSSCore = 2,
  JSCore = 3,
  Commands = 4,
  Shortcuts = 5,
  HTTPS = 6,
  Npm = 7,
}

export async function generateStaticParams() {
  const { data, error } = await supabase
    .from("ids_table")
    .select("ids")
    .eq("name", "devnotes");

  if (error || !data || data.length === 0) {
    console.error("Error fetching ids:", error);
    return [];
  }

  return data[0].ids.map((id: number) => ({
    id: id.toString(),
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);

  switch (id) {
    case PageType.HTMLCore:
      return <HTMLCore />;
    case PageType.CSSCore:
      return <CSSCore />;
    case PageType.JSCore:
      return <JSCore />;
    case PageType.Commands:
      return <CommandsPage />;
    case PageType.Shortcuts:
      return <ShortCutsPage />;
    case PageType.HTTPS:
      return <HTTPSpage />;
    case PageType.Npm:
      return <NpmPage />;
    default:
      return notFound();
  }
}
