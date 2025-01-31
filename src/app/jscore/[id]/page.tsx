import supabase from '@/app/api/db';
import { notFound } from 'next/navigation';
import ButtonsTemplatePage from '../pages/ButtonsPage';
import CalculatorPage from '../pages/CalculatorPage';
import GraphsPage from '../pages/GraphsPage';
import NpmPage from '../pages/NpmPage';

export async function generateStaticParams() {
  const { data, error } = await supabase
    .from('ids_table')
    .select('ids')
    .eq('name', "jscore");

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
    case 'npm':
      return <NpmPage/>;
    case 'buttons':
      return <ButtonsTemplatePage />;
    case 'calculator':
      return <CalculatorPage />;
    case 'graphs':
      return <GraphsPage />;
    default:
      notFound();
      return null; // This is important as notFound() doesn't return anything
  }
};