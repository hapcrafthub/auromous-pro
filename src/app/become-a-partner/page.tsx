import type { Metadata } from "next";
import SimpleNav from "@/components/SimpleNav";
import PartnerForm from "./PartnerForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Get Custom Quote — Auromous",
  description:
    "Request a custom quote or supply brochure from Auromous for global distribution and wholesale of premium herbal cosmetic raw materials.",
};

export default function BecomeAPartnerPage() {
  return (
    <div className={styles.page}>
      <img src="/assets/hero-image.jpg" alt="" className={styles.bgImage} />
      <div className={styles.bgOverlay} />

      <SimpleNav backHref="/" backLabel="Back To Home" translucent />

      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.eyebrow}>Global Distribution &amp; Wholesale</div>
          <h1 className={styles.title}>Get Custom Quote</h1>
          <PartnerForm />
        </div>
      </section>
    </div>
  );
}
