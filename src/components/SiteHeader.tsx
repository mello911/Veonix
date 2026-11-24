"use client";

import { useState, useId } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "Lookbook", href: "/lookbook" },
  { label: "Journal", href: "/journal" },
] as const;

type SiteHeaderProps = {
  bagCount?: number;
};

export function SiteHeader({ bagCount = 0 }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const menuId = useId();

  return (
    <header className="site-header" role="banner">
      <div className="page-width site-header-inner">
        {/* Skip link */}
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>

        {/* Wordmark */}
        <Link href="/" className="header-wordmark type-wordmark" aria-label="VEONIX — home">
          VEONIX
        </Link>

        {/* Search */}
        <div className="header-search" role="search">
          <label htmlFor="site-search" className="sr-only">
            Search
          </label>
          <input
            id="site-search"
            type="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search…"
            className="control header-search-input"
            aria-label="Search the store"
          />
        </div>

        {/* Primary nav */}
        <nav
          className="header-nav"
          aria-label="Primary navigation"
          id={menuId}
        >
          <ul role="list" className="header-nav-list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="header-nav-link type-nav">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Utility actions */}
        <div className="header-actions">
          <Link
            href="/wishlist"
            className="header-action-btn"
            aria-label="Wishlist"
            title="Wishlist"
          >
            <span aria-hidden="true">♡</span>
          </Link>
          <Link
            href="/bag"
            className="header-action-btn"
            aria-label={`Shopping bag — ${bagCount} item${bagCount === 1 ? "" : "s"}`}
            title="Shopping bag"
          >
            <span aria-hidden="true">▣</span>
            {bagCount > 0 && (
              <span className="bag-count" aria-hidden="true">
                {bagCount}
              </span>
            )}
          </Link>
        </div>

        {/* Hamburger (mobile) */}
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span aria-hidden="true">{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <div className="mobile-nav" aria-label="Mobile navigation">
          <ul role="list" className="mobile-nav-list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="mobile-nav-link type-nav"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
