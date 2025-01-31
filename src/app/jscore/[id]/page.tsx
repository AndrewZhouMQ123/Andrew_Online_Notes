import { notFound } from 'next/navigation';
import ButtonsTemplatePage from '../pages/ButtonsPage';
import CalculatorPage from '../pages/CalculatorPage';
import GraphsPage from '../pages/GraphsPage';
import NpmPage from '../pages/NpmPage';

export async function generateStaticParams() {
  // Fetch the list of valid IDs from an API
  // const response = await fetch('https://api.example.com/ids');
  // const ids = await response.json();
  const ids = ['npm', 'buttons', 'calculator', 'graphs'];
  
  return ids.map((id: string) => ({
    id,
  }));
};

export default function Page({ params,} : { params: { id: string }; }) {
  const { id } = params;

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
  }
};