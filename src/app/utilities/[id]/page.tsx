import { notFound } from "next/navigation";
import ButtonsTemplatePage from "../pages/ButtonsPage";
import CalculatorPage from "../pages/CalculatorPage";
import { GraphPage } from "../pages/GraphPage";

enum PageType {
  GraphUtil = 1,
  Calculator = 2,
  Buttons = 3,
}

export async function generateStaticParams() {
  return [
    { params: { id: "1" } },
    { params: { id: "2" } },
    { params: { id: "3" } },
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
    case PageType.Buttons:
      return <ButtonsTemplatePage />;
    default:
      return notFound();
  }
}
