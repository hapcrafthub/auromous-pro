import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SimpleNav from "@/components/SimpleNav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
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
    title: `${product.title} — Auromous`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const sampleMailto =
    "mailto:support@auromous.com?subject=" +
    encodeURIComponent(`Sample & COA Request - ${product.title}`);
  const tradeMailto =
    "mailto:support@auromous.com?subject=" + encodeURIComponent(`Bulk Enquiry - ${product.title}`);
  const contactMailto =
    "mailto:support@auromous.com?subject=" + encodeURIComponent(`Enquiry - ${product.title}`);

  return (
    <div>
      <SimpleNav backHref="/products" backLabel="Back To Products" />

      <section className={styles.section}>
        <div className={styles.grid}>
          <div className={styles.imageFrame}>
            <img
              loading="lazy"
              src={product.gridImage}
              alt={product.title}
              className={styles.image}
            />
          </div>

          <div>
            <div className={styles.eyebrow}>{product.botanical}</div>
            <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.description}>{product.description}</p>

            <div className={styles.actions}>
              <a href={sampleMailto} className={styles.primaryButton}>
                Request Sample &amp; COA
              </a>
              <a href={tradeMailto} className={styles.secondaryButton}>
                Bulk Enquiries
              </a>
              <Link href={`/product/${product.slug}/packaging`} className={styles.secondaryButton}>
                Custom Packaging &amp; Labeling
              </Link>
              <a href={contactMailto} className={`${styles.secondaryButton} ${styles.contactButton}`}>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
