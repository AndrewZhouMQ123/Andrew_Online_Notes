import { notFound } from "next/navigation";
import ButtonsTemplatePage from "../pages/ButtonsPage";
import CalculatorPage from "../pages/CalculatorPage";
import BlogTemplate from "../pages/BlogTemplate";
import { GraphPage } from "../pages/GraphPage";

enum PageType {
  GraphUtil = 1,
  Calculator = 2,
  BlogTemplate = 3,
  Buttons = 4,
}

export async function generateStaticParams() {
  return [
    { params: { id: "1" } },
    { params: { id: "2" } },
    { params: { id: "3" } },
    { params: { id: "4" } },
  ];
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = Number((await params).id);

  switch (id) {
    case PageType.GraphUtil:
      return <GraphPage />;
    case PageType.Calculator:
      return <CalculatorPage />;
    case PageType.BlogTemplate:
      return (
        <BlogTemplate
          title="BanG Dream! It's MyGO"
          stats="0M views · X months ago"
          author="Me ✓"
          description="Streaming videogame BanG Dream! It's MyGO!!!!! Featuring 5 star Chihaya Anon, Nagasaki Soyo, Shiina Taki (Rikki), Takamatsu Tomori and Kaname Raana."
          imageUrl="/MyGO_Garupa.webp"
          imageCaption="MyGO! from BanG Dream!"
          adText="Shop early for the holiday season to get the best selection of Anon Tokyo merch at 10% discount!!!!! Shop now ›"
        />
      );
    case PageType.Buttons:
      return <ButtonsTemplatePage />;
    default:
      return notFound();
  }
}
