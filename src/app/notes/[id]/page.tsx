import { notFound } from "next/navigation";
import FlashCard from "../pages/FlashCard";
import Glossary from "../pages/Glossary";
import CHAOSWIKI from "../pages/ChaosKnight";

enum PageType {
  FlashCard = 1,
  Glossary = 2,
  CHAOSWIKI = 3,
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
    case PageType.FlashCard:
      return <FlashCard />;
    case PageType.Glossary:
      return <Glossary />;
    case PageType.CHAOSWIKI:
      return <CHAOSWIKI />;
    default:
      return notFound();
  }
}
