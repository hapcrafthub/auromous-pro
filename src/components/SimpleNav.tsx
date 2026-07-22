import Link from "next/link";
import styles from "./SimpleNav.module.css";

export default function SimpleNav({
  backHref,
  backLabel,
  translucent = false,
}: {
  backHref: string;
  backLabel: string;
  translucent?: boolean;
}) {
  return (
    <nav className={`${styles.nav} ${translucent ? styles.navTranslucent : ""}`}>
      <Link href="/" className={styles.logo}>
        <span>A</span>
        <span>UROMOUS</span>
      </Link>
      <Link href={backHref} className={styles.backLink}>
        ← {backLabel}
      </Link>
    </nav>
  );
}
