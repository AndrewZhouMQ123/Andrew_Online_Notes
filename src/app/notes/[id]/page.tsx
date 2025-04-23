import { notFound } from "next/navigation";
import FlashCard from "../pages/FlashCard";
import Glossary from "../pages/Glossary";

enum PageType {
  FlashCard = 1,
  Glossary = 2,
}

export async function generateStaticParams() {
  return [{ params: { id: "1" } }, { params: { id: "2" } }];
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
    default:
      return notFound();
  }
}
