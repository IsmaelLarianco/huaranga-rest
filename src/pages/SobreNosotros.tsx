import infoData from "../data/info-restaurante.json";
import type { InfoRestaurante } from "../types/InfoRestaurante";
import ValoresSlider from "../components/ValoresSliders";

const info = infoData as InfoRestaurante;

export default function SobreNosotros() {
  return (
    <div>
      {/* MISIÓN — fondo crema */}
      <section className="py-30 px-8 bg-amber-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-orange-700 font-semibold uppercase tracking-wide text-sm">
              Lo que nos mueve
            </span>
            <h2 className="font-display text-4xl font-bold text-stone-900 mt-2">
              Misión
            </h2>
          </div>
          <div className="bg-white rounded-2xl p-10 shadow-lg border border-stone-200">
            <p className="text-stone-600 leading-relaxed text-lg">
              {info.mision}
            </p>
          </div>
        </div>
      </section>

      {/* VISIÓN — fondo oscuro (igual que Especialidades) */}
      <section className="py-24 px-8 bg-stone-950">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-orange-500 font-semibold uppercase tracking-wide text-sm">
              Hacia dónde vamos
            </span>
            <h2 className="font-display text-4xl font-bold text-white mt-2">
              Visión
            </h2>
          </div>
          <div className="bg-stone-900 rounded-2xl p-10 border border-stone-800">
            <p className="text-stone-300 leading-relaxed text-lg">
              {info.vision}
            </p>
          </div>
        </div>
      </section>

      {/* VALORES — fondo terracota */}
<section className="py-24 px-8 bg-[#7E8C54]">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div>
      <span className="text-orange-200 font-semibold uppercase tracking-wide text-sm">
        Lo que nos representa
      </span>
      <h2 className="font-display text-4xl font-bold text-amber-50 mt-2">
        Valores
      </h2>
    </div>
    <ValoresSlider valores={info.valores} />
  </div>
</section>

    </div>
  );
}