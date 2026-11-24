import type { CSSProperties } from "react";

export const palette = {
  maroon: { name: "Maroon", hex: "#733748" },
  beige: { name: "Beige", hex: "#E5D9C3" },
  olive: { name: "Olive", hex: "#65694B" },
  grape: { name: "Gothic Grape", hex: "#49394F" },
  brown: { name: "Brown", hex: "#775641" },
  powder: { name: "Powder Blue", hex: "#B4C5D5" },
  slate: { name: "Slate Blue", hex: "#475D73" },
  midnight: { name: "Midnight Blue", hex: "#171C35" },
} as const;

export type BrandColor = keyof typeof palette;
export const brandColors = Object.keys(palette) as BrandColor[];
export const brandProperties = Object.fromEntries(
  brandColors.map((key) => [`--brand-${key}`, palette[key].hex]),
) as CSSProperties;
