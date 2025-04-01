import { notFound } from "next/navigation";
import ButtonsTemplatePage from "../pages/ButtonsPage";
import CalculatorPage from "../pages/CalculatorPage";
import BlogTemplate from "@/components/BlogTemplate";
import { GraphPage } from "../pages/GraphPage";
import EditNotesPage from "../pages/EditNotesPage";

enum PageType {
  GraphUtil = 1,
  Calculator = 2,
  BlogTemplate = 3,
  Buttons = 4,
  EditNotes = 5,
}

export async function generateStaticParams() {
  return [
    { params: { id: "1" } },
    { params: { id: "2" } },
    { params: { id: "3" } },
    { params: { id: "4" } },
    { params: { id: "5" } },
  ];
}

const processTitle = (title: string) => {
  if (!title.includes("!")) return title;

  const colors = ["#77BBDD", "#FF8899", "#77DD77", "#FFDD88", "#7777AA"];
  let colorIndex = 0;

  return title.split("").map((char, index) => {
    if (char === "!") {
      return (
        <span
          key={index}
          style={{ color: colors[colorIndex++ % colors.length] }}
        >
          {char}
        </span>
      );
    }
    return char;
  });
};

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
          title=""
          subtitle={processTitle("BanG Dream! It's MyGO!!!!!") as string}
          stats="0M views · X months ago"
          author="Me ✓"
          description="BanG Dream! It's MyGO!!!!! Chihaya Anon, Nagasaki Soyo, Shiina Taki (Rikki), Takamatsu Tomori and Kaname Raana."
          imageUrl="/MyGO_Garupa.webp"
          imageCaption="MyGO! from BanG Dream!"
          adText="Shop early for the holiday season to get the best selection of Anon Tokyo merch at 10% discount!!!!! Shop now ›"
        />
      );
    case PageType.Buttons:
      return <ButtonsTemplatePage />;
    case PageType.EditNotes:
      return <EditNotesPage />;
    default:
      return notFound();
  }
}
