import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SimpleNav from "@/components/SimpleNav";
import { PRODUCTS, getProduct } from "@/lib/products";
import styles from "./page.module.css";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `Custom Packaging & Labeling — ${product.title} — Auromous`,
  };
}

export default async function CustomPackagingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div className={styles.page}>
      <img src="/assets/hero-image.jpg" alt="" className={styles.bgImage} />
      <div className={styles.bgOverlay} />

      <SimpleNav
        backHref={`/product/${product.slug}`}
        backLabel="Back To Product"
        translucent
      />

      <section className={styles.section}>
        <div className={styles.grid}>
          <div className={styles.imageFrame}>
            <img
              loading="lazy"
              src={product.packagingImage}
              alt={product.title}
              className={styles.image}
            />
          </div>

          <div>
            <div className={styles.eyebrow}>{product.title} — Private Label Capabilities</div>
            <h1 className={styles.title}>Custom Packaging &amp; Labeling</h1>
            <p className={styles.description}>
              Auromous builds retail-ready packaging around {product.title} — pouches, jars, and
              labels sized to your MOQ, regulatory market, and shelf format. From private-label
              artwork to compliant multilingual labeling, we handle the full production run so
              your product arrives shelf-ready in any market you sell into.
            </p>

            <Link href="/become-a-partner" className={styles.ctaButton}>
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
