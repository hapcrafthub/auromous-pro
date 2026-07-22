import type { Metadata } from "next";
import Link from "next/link";
import SimpleNav from "@/components/SimpleNav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CATEGORIES, getProductsByCategory } from "@/lib/products";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "All Products — Auromous",
  description:
    "Browse Auromous's full catalog of cosmetic clays, botanical hair care actives, and skincare phyto-actives available for private-label and bulk B2B supply.",
};

export default function AllProductsPage() {
  return (
    <div>
      <SimpleNav backHref="/" backLabel="Back To Home" />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.title}>Our All Products</h1>
          <div className={styles.underline} />

          <div className={styles.pillRow}>
            {CATEGORIES.map((cat) => (
              <Link key={cat.key} href={`#${cat.key}`} className={styles.pill}>
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {CATEGORIES.map((cat) => (
        <section key={cat.key} id={cat.key} className={styles.categorySection}>
          <div className={styles.categoryInner}>
            <div className={styles.eyebrow}>{cat.eyebrow}</div>
            <h2 className={styles.categoryTitle}>{cat.name}</h2>
            <div className={styles.categoryUnderline} />

            <div className={styles.grid}>
              {getProductsByCategory(cat.key).map((p) => (
                <Link key={p.slug} href={`/product/${p.slug}`} className={styles.card}>
                  <div className={styles.cardImageFrame}>
                    <img
                      loading="lazy"
                      src={p.gridImage}
                      alt={p.title}
                      className={styles.cardImage}
                    />
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.cardTitle}>{p.title}</div>
                    <div className={styles.cardBotanical}>{p.botanical}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
