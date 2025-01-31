import supabase from '@/app/api/db';
import { notFound } from 'next/navigation';
import BlogTemplate from '@/components/BlogTemplate';

export async function generateStaticParams() {
  const { data, error } = await supabase
    .from('ids_table')
    .select('ids')
    .eq('name', "htmlcore");

    if (error || !data || data.length === 0) {
      console.error('Error fetching ids:', error);
      return [];
    }
  
    return data[0].ids.map((id: string) => ({
      params: { id }, 
    }));
}

export default async function Page({ params } : { params: Promise<{ id: string }> }) {
  const id = (await params).id;

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
      return null; // This is important as notFound() doesn't return anything
  }
}