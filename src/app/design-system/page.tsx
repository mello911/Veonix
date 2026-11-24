import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { brandColors, palette } from "@/design/palette";
import {
  ContentPanel,
  Divider,
  SectionHeading,
  StatusLabel,
} from "@/components/ui";
import { Controls, SectionIndex } from "./specimens";
import herbarium from "./herbarium.webp";
import "./preview.css";

export const metadata: Metadata = {
  title: "Visual foundations · VEONIX",
  robots: { index: false, follow: false },
};

const sections = [
  ["palette", "Brand palette"],
  ["roles", "Interface colors"],
  ["type", "Typography"],
  ["measure", "Spacing & borders"],
  ["actions", "Buttons & links"],
  ["fields", "Form fields"],
  ["choices", "Selection controls"],
  ["panels", "Content panels"],
] as const;

const roles = [
  ["page", "Page background"],
  ["content", "Content background"],
  ["text", "Primary text"],
  ["secondary", "Secondary text"],
  ["muted", "Muted text"],
  ["border", "Dividers"],
  ["control-border", "Control borders"],
  ["link", "Links"],
  ["accent", "Interactive accent"],
  ["on-accent", "Text on accent"],
  ["selected", "Selected state"],
  ["selected-surface", "Selected surface"],
  ["hover", "Hover"],
  ["active", "Active state"],
  ["focus", "Focus indicator"],
  ["error", "Error"],
  ["success", "Success"],
  ["disabled-text", "Disabled text"],
  ["disabled-surface", "Disabled surface"],
];

const types = [
  ["wordmark", "Wordmark", "VEONIX"],
  ["title", "Page title", "Material studies"],
  ["collection", "Collection title", "A quiet procession"],
  ["section", "Section heading", "Tailoring notes"],
  ["body", "Body", "Washed linen holds the memory of each fold."],
  ["product", "Product information", "Pleated linen jacket"],
  ["price", "Price", "¥28,000"],
  ["meta", "Metadata", "Linen / 215 g/m²"],
  ["nav", "Navigation", "Collection index"],
  ["caption", "Caption", "Pressed umbel on undyed linen."],
  ["index", "Outfit index", "Look 03 / 12"],
];

export default function DesignSystem() {
  if (process.env.NODE_ENV !== "development") notFound();
  return (
    <div className="specimen">
      <a className="skip" href="#preview">
        Skip to specimens
      </a>
      <header className="mast">
        <div className="page-width mast-inner">
          <span className="type-wordmark">VEONIX</span>
          <span className="mast-context">Design system</span>
          <span className="mast-status">Development preview</span>
        </div>
      </header>
      <main id="preview" className="page-width" tabIndex={-1}>
        <div className="intro">
          <div className="intro-copy">
            <p className="folio-label">
              Phase 002 <span aria-hidden="true">/</span> Working edition
            </p>
            <h1 className="type-title">Visual foundations</h1>
            <p className="intro-note">
              A working reference for the colors, typography and controls of the
              VEONIX collection archive.
            </p>
          </div>
          <figure className="intro-plate">
            <div className="media-mat">
              <Image
                src={herbarium}
                alt="Pressed stems and leaves against folded linen and dark woven cloth"
                loading="eager"
                unoptimized
              />
            </div>
            <figcaption className="type-caption">
              Material study <span aria-hidden="true">/</span> Botanical contact
              print
            </figcaption>
          </figure>
        </div>
        <div className="reference-layout">
          <SectionIndex sections={sections} />
          <div className="specimen-sections">
            <section id="palette">
              <div className="section-head">
                <SectionHeading>Brand palette</SectionHeading>
                <span className="type-meta">8 colors</span>
              </div>
              <div className="palette-sheet">
                {brandColors.map((key) => (
                  <figure key={key}>
                    <div
                      className="pigment"
                      style={{ backgroundColor: `var(--brand-${key})` }}
                    />
                    <figcaption>
                      <strong>{palette[key].name}</strong>
                      <code>{palette[key].hex}</code>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
            <section id="roles">
              <div className="section-head">
                <SectionHeading>Interface colors</SectionHeading>
              </div>
              <dl className="role-list">
                {roles.map(([token, name]) => (
                  <div
                    key={token}
                    style={{ "--chip": `var(--ui-${token})` } as CSSProperties}
                  >
                    <dt>{name}</dt>
                    <dd>
                      <code>--ui-{token}</code>
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
            <section id="type">
              <div className="section-head">
                <SectionHeading>Typography</SectionHeading>
              </div>
              <dl className="type-list">
                {types.map(([role, name, sample]) => (
                  <div key={role}>
                    <dt className="type-meta">{name}</dt>
                    <dd className={`type-${role}`}>{sample}</dd>
                  </div>
                ))}
              </dl>
            </section>
            <section id="measure">
              <div className="section-head">
                <SectionHeading>Spacing &amp; borders</SectionHeading>
              </div>
              <div className="measure-grid">
                <div className="spacing-list">
                  {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                    <div key={n}>
                      <code>--step-{n}</code>
                      <i
                        aria-hidden="true"
                        style={{ width: `var(--step-${n})` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="rules">
                  <p className="type-meta">Hairline · 1 px</p>
                  <Divider />
                  <p className="type-meta">Emphasis · 2 px</p>
                  <Divider strong />
                </div>
              </div>
            </section>
            <Controls />
            <section id="panels">
              <div className="section-head">
                <SectionHeading>Content panels</SectionHeading>
              </div>
              <div className="panel-pair">
                <ContentPanel>
                  <p className="folio-label">Material note</p>
                  <SectionHeading as="h3">Washed linen</SectionHeading>
                  <p>
                    Irregular slubs give the plain weave a dry hand. Press
                    lightly to preserve its texture.
                  </p>
                </ContentPanel>
                <ContentPanel>
                  <p className="folio-label">Collection note</p>
                  <h3 className="type-collection">A quiet procession</h3>
                  <p>
                    Long pleats, narrow sleeves and a palette drawn from pressed
                    stems.
                  </p>
                  <StatusLabel>Study in progress</StatusLabel>
                </ContentPanel>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
