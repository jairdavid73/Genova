import { HoverCard, type HoverCardProps } from "./hover-card";
import styles from "./hover-gallery.module.css";

type HoverGalleryProps = {
  items: HoverCardProps[];
};

export function HoverGallery({ items }: HoverGalleryProps) {
  return (
    <div className={styles.gallery}>
      {items.map((item) => (
        <HoverCard key={`${item.title}-${item.imageSrc}`} {...item} />
      ))}
    </div>
  );
}
