import type { Plato } from "../types/Plato";

interface MenuCardProps {
  plato: Plato;
}

export default function MenuCard({ plato }: MenuCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
      <img src={plato.imagen} alt={plato.nombre} className="w-full h-44 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{plato.nombre}</h3>
        <p className="text-neutral-600 text-sm mb-2">{plato.descripcion}</p>
        <span className="font-bold text-orange-700">${plato.precio}</span>
      </div>
    </div>
  );
}