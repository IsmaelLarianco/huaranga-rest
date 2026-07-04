import { Link } from "react-router-dom";
import infoData from "../data/info-restaurante.json";
import type { InfoRestaurante } from "../types/InfoRestaurante";
import Especialidades from "./Especialidad";

const info = infoData as InfoRestaurante;

export default function Home() {
  return (
    <>
    <section
      className="h-[90vh] flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/home-bg.jpg')" }}
    >
      <div>
        <h1 className="titulo text-5xl font-bold mb-4">{info.nombre}</h1>
        <p className="titulo text-xl mb-6">{info.eslogan}</p>
        <Link
          to="/menu"
          className="bg-orange-700 backdrop-blur-sm px-4 py-2 rounded-xl"
        >
          Ver Menú
        </Link>
      </div>
    </section>  
      <Especialidades />
    </>
  );
}