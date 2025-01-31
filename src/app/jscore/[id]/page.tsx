import { notFound } from 'next/navigation';
import ButtonsTemplatePage from '../pages/ButtonsPage';
import CalculatorPage from '../pages/CalculatorPage';
import GraphsPage from '../pages/GraphsPage';
import NpmPage from '../pages/NpmPage';
import { PageProps } from "@/app/api/interfaces";

export default function Page({ params } : PageProps) {
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
      return null; // This is important as notFound() doesn't return anything
  }
};