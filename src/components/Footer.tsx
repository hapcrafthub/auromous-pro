import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div>
            <div className={styles.brandLogo}>
              <span>A</span>
              <span>UROMOUS</span>
            </div>
            <p className={styles.brandBlurb}>
              Auromous secures direct-to-farm procurement to eliminate open-market risk,
              guaranteeing uncompromised quality and absolute supply chain predictability for
              your brand.
            </p>
          </div>

          <div>
            <div className={styles.colTitle}>Products</div>
            <div className={styles.colLinks}>
              <Link href="/products#clays" className={styles.colLink}>
                Cosmetic Clays &amp; Mineral Bases
              </Link>
              <Link href="/products#haircare" className={styles.colLink}>
                Botanical Hair Care Actives &amp; Colorants
              </Link>
              <Link href="/products#skincare" className={styles.colLink}>
                Phyto-Actives &amp; Skincare Botanicals
              </Link>
            </div>
          </div>

          <div>
            <div className={styles.colTitle}>Company</div>
            <div className={styles.colLinks}>
              <Link href="/#story" className={styles.colLink}>
                Our Story
              </Link>
              <Link href="/#wholesale" className={styles.colLink}>
                Wholesale
              </Link>
            </div>
          </div>

          <div>
            <div className={styles.colTitle}>Contact</div>
            <div className={styles.colLinks}>
              <a href="mailto:support@auromous.com" className={styles.colLink}>
                support@auromous.com
              </a>
              <a href="tel:+919335133424" className={styles.colLink}>
                +91 9335133424
              </a>
            </div>
          </div>
        </div>

        <div className={styles.socialRow}>
          <a
            href="https://www.instagram.com/auromous.co?igsh=bzd2NmVweGZjdTk1"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="Instagram"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://x.com/Auromous"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="X (Twitter)"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H15.17l-5.214-6.817L3.99 21.75H.68l7.73-8.835L.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/auromous/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="LinkedIn"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="mailto:support@auromous.com" className={styles.socialIcon} aria-label="Email">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16v16H4z" />
              <path d="M4 6l8 7 8-7" />
            </svg>
          </a>
          <span className={styles.handle}>/@auromous</span>
        </div>

        <div className={styles.bottomBar}>
          <span className={styles.bottomText}>© Auromous. All rights reserved.</span>
          <span className={styles.bottomText}>Global B2B &amp; D2C Herbal Cosmetics</span>
        </div>
      </div>
    </footer>
  );
}
