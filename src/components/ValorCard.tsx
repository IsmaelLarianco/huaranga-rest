import type { Valor } from "../types/InfoRestaurante";

interface ValorCardProps {
  valor: Valor;
}

export default function ValorCard({ valor }: ValorCardProps) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition text-center border border-orange-100">
      <h4 className="font-bold text-lg text-orange-700 mb-2">{valor.titulo}</h4>
      <p className="text-neutral-600 text-sm">{valor.descripcion}</p>
    </div>
  );
}