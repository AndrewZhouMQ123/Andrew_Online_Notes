import { notFound } from 'next/navigation';
import BlogTemplate from '@/components/BlogTemplate';

export async function generateStaticParams() {
  // Fetch the list of valid IDs from an API
  // const response = await fetch('https://api.example.com/ids');
  // const ids = await response.json();
  const ids = ['blogtemplate'];
  
  return ids.map((id: string) => ({
    id,
  }));
}

export default function Page({ params,} : { params: { id: string }; }) {
  const { id } = params;

  switch (id) {
    case 'blogtemplate':
      return <BlogTemplate
        title="BanG Dream! It's MyGO"
        stats="3.4M views · 6 months ago"
        author="Andrew Zhou ✓"
        description="Streaming videogame BanG Dream! It's MyGO!!!!! Featuring 5 star Chihaya Anon, Nagasaki Soyo, Shiina Taki (Rikki), Takamatsu Tomori and Kaname Raana."
        imageUrl="/MyGO_Garupa.webp"
        imageCaption="MyGO! from BanG Dream!"
        adText="Shop early for the holiday season to get the best selection of Anon Tokyo merch at 10% discount!!!!! Shop now ›"
      />
    default:
      notFound();
  }
}