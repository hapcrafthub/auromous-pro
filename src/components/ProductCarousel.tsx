"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { FEATURED_PRODUCTS } from "@/lib/products";
import styles from "./ProductCarousel.module.css";

export default function ProductCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [thumbWidth, setThumbWidth] = useState(30);

  function updateThumb() {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const p = maxScroll > 0 ? el.scrollLeft / maxScroll : 0;
    const w = Math.max(15, Math.min(70, (el.clientWidth / el.scrollWidth) * 100));
    setProgress(p);
    setThumbWidth(w);
  }

  const thumbLeft = progress * (100 - thumbWidth);

  return (
    <div className={styles.wrap}>
      <div id="formulations" ref={trackRef} onScroll={updateThumb} className={styles.track}>
        {FEATURED_PRODUCTS.map((line) => (
          <Link key={line.slug} href={`/product/${line.slug}`} className={styles.card}>
            <div className={styles.imageFrame}>
              <img
                loading="lazy"
                src={line.gridImage}
                alt={line.title}
                className={styles.image}
              />
            </div>
            <h3 className={styles.cardTitle}>{line.title}</h3>
            <div className={styles.cardBotanical}>{line.botanical}</div>
          </Link>
        ))}
        <Link href="/products" className={styles.moreCard}>
          <div className={styles.moreCircle}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </div>
          <h3 className={styles.moreTitle}>More Products</h3>
        </Link>
      </div>
      <div className={styles.swipeRow}>
        <div className={styles.swipePill}>
          <span className={styles.swipeLabel}>Swipe</span>
          <div className={styles.swipeTrack}>
            <div
              className={styles.swipeThumb}
              style={{ left: `${thumbLeft}%`, width: `${thumbWidth}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
