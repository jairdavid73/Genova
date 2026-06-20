"use client";

import Image from "next/image";
import { Check, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import styles from "./perfume-chooser.module.css";

const perfumes = [
  {
    name: "Romance de Verano",
    family: "Floral frutal",
    mood: "Suave, luminosa y romantica",
    occasion: "Ideal para tardes especiales",
    imageSrc: "/images/genova/perfume-floratta-roca.png",
    imageAlt: "Perfume Floratta rosa sobre piedra con flores",
    notes: ["Flor de verano", "Durazno", "Vainilla suave"],
    intensity: 3
  },
  {
    name: "Brisa Floral",
    family: "Fresca floral",
    mood: "Alegre, limpia y delicada",
    occasion: "Perfecta para el dia a dia",
    imageSrc: "/images/genova/perfume-floratta-mar.png",
    imageAlt: "Perfume Floratta frente al mar con flores y frutas",
    notes: ["Petalos frescos", "Frutas jugosas", "Brisa marina"],
    intensity: 2
  },
  {
    name: "Elegancia Rosa",
    family: "Floral elegante",
    mood: "Sofisticada, femenina y memorable",
    occasion: "Para noches y momentos de presencia",
    imageSrc: "/images/genova/perfume-miss-dior.png",
    imageAlt: "Perfume Miss Dior rosa con reflejo",
    notes: ["Rosa", "Almizcle", "Madera clara"],
    intensity: 4
  }
];

export function PerfumeChooser() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [chosenName, setChosenName] = useState("");
  const selected = perfumes[selectedIndex];

  const selectionMessage = useMemo(() => {
    if (!chosenName) {
      return "Explora cada aroma y encuentra el que habla por ti.";
    }

    return `${chosenName} es tu perfume elegido.`;
  }, [chosenName]);

  return (
    <section className={styles.chooser} aria-labelledby="chooser-title">
      <div className={styles.copy}>
        <p className={styles.kicker}>Experiencia interactiva</p>
        <h2 id="chooser-title">Elige el perfume que va contigo</h2>
        <p className={styles.lead}>{selectionMessage}</p>

        <div className={styles.options} role="tablist" aria-label="Perfumes disponibles">
          {perfumes.map((perfume, index) => {
            const isActive = index === selectedIndex;

            return (
              <button
                aria-selected={isActive}
                className={isActive ? styles.activeOption : styles.option}
                key={perfume.name}
                onClick={() => {
                  setSelectedIndex(index);
                  setChosenName("");
                }}
                role="tab"
                type="button"
              >
                <span>{perfume.name}</span>
                <small>{perfume.family}</small>
              </button>
            );
          })}
        </div>
      </div>

      <div className={styles.preview}>
        <div className={styles.imageFrame}>
          <Image
            src={selected.imageSrc}
            alt={selected.imageAlt}
            fill
            unoptimized
            sizes="(max-width: 860px) 92vw, 42vw"
          />
        </div>

        <div className={styles.detailPanel}>
          <div>
            <p className={styles.family}>{selected.family}</p>
            <h3>{selected.name}</h3>
            <p>{selected.mood}</p>
          </div>

          <div className={styles.notes} aria-label="Notas principales">
            {selected.notes.map((note) => (
              <span key={note}>{note}</span>
            ))}
          </div>

          <div className={styles.meta}>
            <span>{selected.occasion}</span>
            <div className={styles.intensity} aria-label={`Intensidad ${selected.intensity} de 5`}>
              {Array.from({ length: 5 }).map((_, index) => (
                <i
                  className={index < selected.intensity ? styles.filledDot : styles.dot}
                  key={index}
                />
              ))}
            </div>
          </div>

          <button
            className={styles.chooseButton}
            onClick={() => setChosenName(selected.name)}
            type="button"
          >
            {chosenName === selected.name ? <Check size={18} /> : <Sparkles size={18} />}
            {chosenName === selected.name ? "Perfume elegido" : "Elegir esta fragancia"}
          </button>
        </div>
      </div>
    </section>
  );
}
