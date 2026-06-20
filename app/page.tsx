import { HoverGallery } from "@/components/hover-gallery";
import { PerfumeChooser } from "@/components/perfume-chooser";
import { assetPath } from "@/lib/asset-path";
import Image from "next/image";

const hoverItems = [
  {
    title: "Romance de Verano",
    eyebrow: "Floratta",
    description: "Notas radiantes, florales y frutales para dejar una huella delicada.",
    imageSrc: assetPath("/images/genova/perfume-floratta-roca.png"),
    imageAlt: "Perfume Floratta rosa con flores sobre piedra"
  },
  {
    title: "Brisa Floral",
    eyebrow: "Colección",
    description: "Un aroma luminoso inspirado en tardes suaves, piel fresca y elegancia natural.",
    imageSrc: assetPath("/images/genova/perfume-floratta-mar.png"),
    imageAlt: "Perfume Floratta frente al mar con flores y frutas"
  },
  {
    title: "Elegancia Rosa",
    eyebrow: "Originales",
    description: "Fragancias seleccionadas para acompañar tus momentos con presencia y distinción.",
    imageSrc: assetPath("/images/genova/perfume-miss-dior.png"),
    imageAlt: "Perfume Miss Dior rosa con reflejo"
  }
];

export default function Home() {
  return (
    <main className="page-shell">
      <header className="site-header" aria-label="Encabezado de Génova">
        <div className="brand-lockup">
          <Image
            src={assetPath("/images/genova/logo-genova.png")}
            alt="Logo de Génova"
            width={94}
            height={94}
            priority
          />
          <span>GÉNOVA</span>
        </div>
        <p>PERFUMES ORIGINALES</p>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p id="hero-title">
            Cada perfume de Génova nace para despertar emociones, transmitir
            exclusividad y acompañarte con un aroma que habla de ti sin decir
            una palabra.
          </p>
        </div>
        <div className="hero-media" aria-hidden="true">
          <Image
            src={assetPath("/images/genova/hero-perfume.png")}
            alt=""
            fill
            unoptimized
            priority
            sizes="(max-width: 760px) 92vw, 56vw"
          />
        </div>
      </section>

      <PerfumeChooser />

      <section className="collection" aria-labelledby="collection-title">
        <div className="section-heading">
          <p>Colección destacada</p>
          <h1 id="collection-title">Aromas que dejan huella</h1>
        </div>
        <HoverGallery items={hoverItems} />
      </section>

      <footer className="brand-footer" aria-label="Firma de marca">
        <Image
          src={assetPath("/images/genova/logo-genova.png")}
          alt=""
          width={132}
          height={132}
          aria-hidden="true"
        />
        <p>Descubre aromas creados para dejar huella</p>
      </footer>
    </main>
  );
}
