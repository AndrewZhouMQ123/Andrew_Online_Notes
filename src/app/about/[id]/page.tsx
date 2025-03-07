import { notFound } from "next/navigation";
import ContactMePage from "../pages/ContactMe";

enum PageType {
  ContactMe = 1,
}

export async function generateStaticParams() {
  return [{ params: { id: "1" } }];
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = Number((await params).id);

  switch (id) {
    case PageType.ContactMe:
      return <ContactMePage />;
    default:
      return notFound();
  }
}
