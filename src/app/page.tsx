import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductCarousel from "@/components/ProductCarousel";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Auromous — Herbal Skin & Hair Care, Engineered For Global Brands",
};

const STORY_CARDS = [
  {
    title: "Heritage Sourcing",
    body: "Direct procurement from master farmers ensures uncompromised raw botanical purity.",
    image: "/assets/card-farmer-handshake.jpg",
  },
  {
    title: "Precision Milling",
    body: "Advanced cold milling protects delicate compounds, yielding highly potent powders.",
    image: "/assets/card-milling.jpg",
  },
  {
    title: "Batch Validation",
    body: "Strict laboratory testing verifies active thresholds with transparent COA documentation.",
    image: "/assets/card-lab.jpg",
  },
  {
    title: "Global Export",
    body: "Hermetically sealed batches routed for seamless integration into your facility.",
    image: "/assets/card-export.jpg",
  },
];

const FLAGS = [
  { code: "za", name: "South Africa" },
  { code: "cn", name: "China" },
  { code: "jp", name: "Japan" },
  { code: "my", name: "Malaysia" },
  { code: "us", name: "USA" },
  { code: "gb", name: "UK" },
  { code: "ae", name: "UAE" },
  { code: "fr", name: "France" },
  { code: "np", name: "Nepal" },
  { code: "au", name: "Australia" },
  { code: "ru", name: "Russia" },
  { code: "vn", name: "Vietnam" },
  { code: "sg", name: "Singapore" },
  { code: "id", name: "Indonesia" },
  { code: "nl", name: "Netherlands" },
  { code: "sa", name: "Saudi Arabia" },
  { code: "ca", name: "Canada" },
  { code: "cl", name: "Chile" },
  { code: "es", name: "Spain" },
];

export default function Home() {
  return (
    <div>
      <Navbar variant="fixed" />

      {/* HERO IMAGE */}
      <section className={styles.heroImageSection}>
        <img
          src="/assets/hero-image.jpg"
          alt=""
          aria-hidden="true"
          className={styles.heroImageBlurBg}
        />
        <img src="/assets/hero-image.jpg" alt="Auromous" className={styles.heroImage} />
        <div className={styles.heroImageFade} />
        <div className={styles.heroImageRule} />
        <div className={styles.scrollChevron}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 8l7 7 7-7" />
            <path d="M5 14l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* HERO TEXT */}
      <section className={styles.heroVideoSection}>
        <img
          src="/assets/slide2-image.jpg"
          alt="Auromous manufacturing"
          className={styles.heroVideoImage}
        />
        <div className={styles.heroVideoOverlay} />
        <div className={styles.heroVideoContent}>
          <h1 className={styles.heroTitle}>
            Herbal Skin &amp; Hair Care,
            <br />
            Rooted In The Land Of Ayurveda,
            <br />
            Engineered For Global Brands
          </h1>
          <p className={styles.heroSubtitle}>
            Auromous is your one-stop operational hub for premium herbal cosmetics. We handle
            everything from custom white-labeling to luxury packaging, delivering a fully
            retail-ready product line.
          </p>
          <div className={styles.heroCtaRow}>
            <Link href="/become-a-partner" className={styles.goldPillButton}>
              Request Supply Brochure
            </Link>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className={styles.story}>
        <div className={styles.storyIntro}>
          <h2 className={styles.storyHeadline}>
            Cultivated By A Thousand Farmers,
            <br />
            Standardized For Scale
          </h2>
          <p className={styles.storyText}>
            Auromous secures direct-to-farm procurement to eliminate open-market risk,
            guaranteeing uncompromised quality and absolute supply chain predictability for your
            brand.
          </p>
        </div>
        <div className={styles.storyGrid}>
          {STORY_CARDS.map((card) => (
            <div
              key={card.title}
              className={styles.storyCard}
              style={{ backgroundImage: `url('${card.image}')` }}
            >
              <div className={styles.storyCardOverlay} />
              <div className={styles.storyCardTitleWrap}>
                <span className={styles.storyCardTitle}>{card.title}</span>
              </div>
              <div className={styles.storyCardBody}>{card.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className={styles.products}>
        <div className={styles.productsInner}>
          <h2 className={styles.productsHeadline}>Flagship Export Botanicals</h2>
          <div className={styles.underline} />
          <ProductCarousel />
        </div>
      </section>

      {/* WHOLESALE */}
      <section id="wholesale" className={styles.wholesale}>
        <h2 className={styles.wholesaleHeadline}>International Logistics Network</h2>
        <div className={styles.underline} />
        <div className={styles.mapWrap}>
          <img
            loading="lazy"
            src="/assets/world-map.jpg"
            alt="Auromous international logistics network map"
            className={styles.mapImage}
          />
        </div>
        <div className={styles.flagGrid}>
          {FLAGS.map((flag) => (
            <div key={flag.code} className={styles.flagItem}>
              <img
                loading="lazy"
                src={`https://flagcdn.com/w80/${flag.code}.png`}
                alt={flag.name}
                className={styles.flagImg}
              />
              <span className={styles.flagName}>{flag.name}</span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
