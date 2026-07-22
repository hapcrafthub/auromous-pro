"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./PageTransitionOverlay.module.css";

const MIN_VISIBLE_MS = 400;
const INITIAL_HIDE_DELAY_MS = 650;

export default function PageTransitionOverlay() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const prevPathname = useRef(pathname);
  // Only ever read after the click handler below has set it; 0 is a safe placeholder.
  const shownAt = useRef<number>(0);

  // Initial page load / hard reload: flash briefly, then fade out.
  useEffect(() => {
    const t = setTimeout(() => setVisible(false), INITIAL_HIDE_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  // Client-side route change completed: fade out once the new route has
  // mounted, but never before the overlay has had a moment to be seen.
  useEffect(() => {
    if (prevPathname.current === pathname) return;
    prevPathname.current = pathname;
    const elapsed = Date.now() - shownAt.current;
    const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);
    const t = setTimeout(() => setVisible(false), remaining);
    return () => clearTimeout(t);
  }, [pathname]);

  // Show immediately when the user activates an internal link — registered
  // on the CAPTURE phase so this runs before Next's <Link> calls
  // preventDefault() and does its own client-side routing (a bubble-phase
  // listener would see e.defaultPrevented already true and never fire).
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      if (anchor.target === "_blank") return;
      const href = anchor.getAttribute("href") || "";
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        return;
      }
      let url: URL;
      try {
        url = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return;

      shownAt.current = Date.now();
      setVisible(true);
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return (
    <div className={`${styles.overlay} ${visible ? styles.visible : ""}`} aria-hidden="true">
      <div className={styles.wrap}>
        <svg className={styles.mortar} viewBox="0 0 80 80" fill="none">
          <path d="M12 44c0 12.15 12.536 22 28 22s28-9.85 28-22" fill="#224832" />
          <path
            d="M12 44c0 12.15 12.536 22 28 22s28-9.85 28-22"
            stroke="#D7A751"
            strokeWidth="1.5"
          />
          <ellipse cx="40" cy="44" rx="28" ry="10" fill="#2c5b3f" />
          <ellipse cx="40" cy="44" rx="28" ry="10" fill="none" stroke="#D7A751" strokeWidth="1.5" />
          <ellipse cx="40" cy="45.5" rx="19" ry="6.5" fill="#132a1c" />
          <g className={styles.pestle}>
            <rect x="37" y="12" width="9" height="32" rx="4.5" fill="#D7A751" />
            <ellipse cx="41.5" cy="14" rx="7" ry="5.5" fill="#EAE8DF" />
          </g>
        </svg>
      </div>
    </div>
  );
}
