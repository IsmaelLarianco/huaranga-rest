import EspecialidadSlider from "../components/EspecialidadSlider";

export default function Especialidades() {
  return (
    <section className="py-20 px-8 bg-stone-950">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Texto a la izquierda */}
        <div>
          <span className="text-orange-500 font-semibold uppercase tracking-wide text-sm">
            Lo mejor de la casa
          </span>
          <h2 className="font-display text-4xl font-bold text-white mt-2 mb-4">
            Especialidad de la Casa
          </h2>
          <p className="text-stone-300 leading-relaxed">
            Descubre los platos que nos representan: cortes seleccionados, cocción lenta al fuego 
            y recetas que reflejan la tradición de nuestra parrilla.
          </p>
        </div>

        {/* Slider a la derecha */}
        <EspecialidadSlider />

      </div>
    </section>
  );
}