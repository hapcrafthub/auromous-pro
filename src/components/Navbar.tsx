"use client";

import { useMemo, useState, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import styles from "./Navbar.module.css";

const PACKAGING_ITEMS = ["Custom Packaging", "Custom Labeling"];
const SHIPPING_ITEMS = ["Express Courier", "Commercial Cargo", "Ocean Freight"];

export default function Navbar({ variant = "sticky" }: { variant?: "sticky" | "fixed" }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const homeAnchor = (hash: string) => (isHome ? hash : `/${hash}`);

  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"products" | "packaging" | "shipping" | null>(
    null
  );
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const trimmed = query.trim().toLowerCase();
  const results = useMemo(() => {
    if (!trimmed) return [];
    return PRODUCTS.filter((p) => p.title.toLowerCase().includes(trimmed)).slice(0, 8);
  }, [trimmed]);
  const showResults = trimmed.length > 0;

  function toggleDropdown(key: "products" | "packaging" | "shipping") {
    setOpenDropdown((cur) => (cur === key ? null : key));
  }

  // When already on the target page, scroll manually instead of relying on
  // <Link>'s hash handling — guarantees the jump happens even though the nav
  // is fixed/sticky (which Next.js otherwise has to special-case around).
  function handleAnchorClick(e: MouseEvent, id: string | null) {
    setMenuOpen(false);
    setOpenDropdown(null);
    if (!isHome) return; // let <Link> navigate to `/#id` and land there normally
    e.preventDefault();
    if (id === null) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav className={`${styles.nav} ${variant === "fixed" ? styles.navFixed : ""}`} id="top">
      <div className={styles.topRow}>
        <Link href="/" className={styles.logo}>
          <span>A</span>
          <span>UROMOUS</span>
        </Link>
        <button
          type="button"
          aria-label="Toggle menu"
          className={styles.hamburger}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      <div className={`${styles.links} ${menuOpen ? styles.linksOpen : ""}`}>
        <div className={styles.navItem}>
          <Link href="/" className={styles.navLink} onClick={(e) => handleAnchorClick(e, null)}>
            Home
          </Link>
        </div>

        <div
          className={styles.navItem}
          data-open={openDropdown === "products"}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <Link
            href={homeAnchor("#products")}
            className={styles.navLink}
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown("products");
            }}
          >
            Products
          </Link>
          <div className={`${styles.drop} ${styles.dropProducts}`}>
            {CATEGORIES.map((cat) => {
              const items = PRODUCTS.filter((p) => p.category === cat.key);
              const open = activeCategory === cat.key;
              return (
                <div className={styles.catRow} key={cat.key}>
                  <button
                    type="button"
                    className={styles.catHeader}
                    onClick={() => setActiveCategory(open ? null : cat.key)}
                  >
                    <span className={styles.catName}>{cat.name}</span>
                    <span className={`${styles.catArrow} ${open ? styles.catArrowOpen : ""}`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </button>
                  <div className={`${styles.catItems} ${open ? styles.catItemsOpen : ""}`}>
                    {items.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/product/${item.slug}`}
                        className={styles.dropItem}
                        onClick={() => {
                          setMenuOpen(false);
                          setOpenDropdown(null);
                        }}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={styles.navItem}
          data-open={openDropdown === "packaging"}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <Link
            href={homeAnchor("#wholesale")}
            className={styles.navLink}
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown("packaging");
            }}
          >
            Packaging
          </Link>
          <div className={`${styles.drop} ${styles.dropSimple}`}>
            {PACKAGING_ITEMS.map((item) => (
              <Link
                key={item}
                href={homeAnchor("#wholesale")}
                className={styles.simpleItem}
                onClick={(e) => handleAnchorClick(e, "wholesale")}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div
          className={styles.navItem}
          data-open={openDropdown === "shipping"}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <Link
            href={homeAnchor("#wholesale")}
            className={styles.navLink}
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown("shipping");
            }}
          >
            Shipping
          </Link>
          <div className={`${styles.drop} ${styles.dropSimple}`}>
            {SHIPPING_ITEMS.map((item) => (
              <Link
                key={item}
                href={homeAnchor("#wholesale")}
                className={styles.simpleItem}
                onClick={(e) => handleAnchorClick(e, "wholesale")}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.navItem}>
          <a
            href="mailto:support@auromous.com?subject=Careers%20Inquiry"
            className={styles.navLink}
          >
            Careers
          </a>
        </div>
        <div className={styles.navItem}>
          <Link
            href={homeAnchor("#story")}
            className={styles.navLink}
            onClick={(e) => handleAnchorClick(e, "story")}
          >
            About Us
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link
            href={homeAnchor("#contact")}
            className={styles.navLink}
            onClick={(e) => handleAnchorClick(e, "contact")}
          >
            Contact
          </Link>
        </div>
      </div>

      <div className={`${styles.searchArea} ${menuOpen ? styles.searchAreaOpen : ""}`}>
        <div className={styles.searchBox}>
          <svg className={styles.searchIcon} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        {showResults && (
          <div className={styles.searchResults}>
            {results.map((r) => (
              <Link
                key={r.slug}
                href={`/product/${r.slug}`}
                className={styles.searchResultItem}
                onClick={() => {
                  setQuery("");
                  setMenuOpen(false);
                }}
              >
                {r.title}
              </Link>
            ))}
            {results.length === 0 && <div className={styles.searchEmpty}>No products found</div>}
          </div>
        )}
      </div>
    </nav>
  );
}
