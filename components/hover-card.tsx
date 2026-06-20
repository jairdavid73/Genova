import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import styles from "./hover-card.module.css";

export type HoverCardProps = {
  title: string;
  eyebrow: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export function HoverCard({
  title,
  eyebrow,
  description,
  imageSrc,
  imageAlt
}: HoverCardProps) {
  return (
    <article className={styles.card} tabIndex={0}>
      <Image
        className={styles.image}
        src={imageSrc}
        alt={imageAlt}
        fill
        unoptimized
        sizes="(max-width: 720px) 100vw, 33vw"
        priority
      />
      <div className={styles.scrim} />
      <div className={styles.content}>
        <div>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
      <span className={styles.action} aria-hidden="true">
        <ArrowUpRight size={20} strokeWidth={2.2} />
      </span>
    </article>
  );
}
