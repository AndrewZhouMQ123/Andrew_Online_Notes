import supabase from "@/app/api/db";
import { notFound } from "next/navigation";
import ButtonsTemplatePage from "../pages/ButtonsPage";
import CalculatorPage from "../pages/CalculatorPage";
import BlogTemplate from "../pages/BlogTemplate";

enum PageType {
  Buttons = 1,
  Calculator = 2,
  BlogTemplate = 3,
}

interface PageProps {
  id: string;
}

export async function generateStaticParams() {
  const { data, error } = await supabase
    .from("ids_table")
    .select("ids")
    .eq("name", "misc");

  if (error || !data || data.length === 0) {
    console.error("Error fetching ids:", error);
    return [];
  }

  return data[0].ids.map((id: number) => ({
    params: { id: id.toString() },
  }));
}

export default function Page({ params }: { params: PageProps }) {
  const id = Number(params.id);

  switch (id) {
    case PageType.Buttons:
      return <ButtonsTemplatePage />;
    case PageType.Calculator:
      return <CalculatorPage />;
    case PageType.BlogTemplate:
      return (
        <BlogTemplate
          title="BanG Dream! It's MyGO"
          stats="3.4M views · 6 months ago"
          author="Me ✓"
          description="Streaming videogame BanG Dream! It's MyGO!!!!! Featuring 5 star Chihaya Anon, Nagasaki Soyo, Shiina Taki (Rikki), Takamatsu Tomori and Kaname Raana."
          imageUrl="/MyGO_Garupa.webp"
          imageCaption="MyGO! from BanG Dream!"
          adText="Shop early for the holiday season to get the best selection of Anon Tokyo merch at 10% discount!!!!! Shop now ›"
        />
      );
    default:
      return notFound();
  }
}
