// Centralized mock data for the VEONIX storefront.
// All imagery references are local SVG placeholders — replace `photo` paths
// with actual photography without touching any component logic.

export type BrandColorKey =
  | "maroon"
  | "beige"
  | "olive"
  | "grape"
  | "brown"
  | "powder"
  | "slate"
  | "midnight";

export type GarmentColor = {
  key: BrandColorKey;
  label: string;
};

export type SizeOption = {
  value: string;
  disabled?: boolean;
};

export type Outfit = {
  id: string;
  number: number;
  title: string;
  description: string;
  price: string;
  priceNote?: string;
  fabric: string;
  weight?: string;
  fit: string;
  colors: GarmentColor[];
  sizes: SizeOption[];
  /** Replace with a real image path; the component reads this prop only. */
  photo: string;
  photoAlt: string;
};

export type Collection = {
  id: string;
  title: string;
  season: string;
  designer: string;
  description: string;
  outfits: readonly Outfit[];
};

export const COLLECTION: Collection = {
  id: "ss-fragment",
  title: "Fragment",
  season: "Spring — 2027",
  designer: "VEONIX",
  description:
    "A collection assembled from remnants — undyed linen, overcast mornings, botanical contact prints and the silence between notes. Twelve looks, each a study in what remains when ornament is removed.",
  outfits: [
    {
      id: "look-01",
      number: 1,
      title: "Morning Interlude",
      description:
        "Wide-leg trousers in undyed linen paired with a collarless press-stud jacket. The silhouette is long and unhurried, as though interrupted mid-thought.",
      price: "¥58,000",
      fabric: "100% linen — undyed",
      weight: "215 g/m²",
      fit: "Relaxed; trousers cut high and wide. Jacket drapes straight from the shoulder. Size up if unsure.",
      colors: [
        { key: "beige", label: "Undyed" },
        { key: "olive", label: "Field" },
      ],
      sizes: [
        { value: "XS" },
        { value: "S" },
        { value: "M" },
        { value: "L" },
        { value: "XL", disabled: true },
      ],
      photo: "/placeholders/look-01.svg",
      photoAlt: "Look 01 — Morning Interlude: wide-leg linen trousers and collarless jacket",
    },
    {
      id: "look-02",
      number: 2,
      title: "Pressed Stem",
      description:
        "Long pleated skirt with a hand-stitched botanical seam running from hip to hem. Worn with a narrow rib top in the same cloth.",
      price: "¥42,000",
      fabric: "Cotton / linen blend — 55% cotton, 45% linen",
      weight: "180 g/m²",
      fit: "Slim through the hip, releasing into a wide hem. True to size.",
      colors: [
        { key: "beige", label: "Undyed" },
        { key: "midnight", label: "Ink" },
      ],
      sizes: [
        { value: "XS" },
        { value: "S" },
        { value: "M" },
        { value: "L" },
        { value: "XL" },
      ],
      photo: "/placeholders/look-02.svg",
      photoAlt: "Look 02 — Pressed Stem: pleated skirt with botanical seam detail",
    },
    {
      id: "look-03",
      number: 3,
      title: "Quiet Room",
      description:
        "A single-piece dress with dropped shoulders and a straight hem. Pockets, naturally. The cloth holds a soft fold-memory from its bolt.",
      price: "¥52,000",
      fabric: "100% washed linen",
      weight: "190 g/m²",
      fit: "Oversized. Shoulder seam falls mid-upper arm. Order your usual size.",
      colors: [
        { key: "slate", label: "Ash Blue" },
        { key: "beige", label: "Undyed" },
        { key: "midnight", label: "Night" },
      ],
      sizes: [
        { value: "XS" },
        { value: "S" },
        { value: "M" },
        { value: "L" },
        { value: "XL" },
      ],
      photo: "/placeholders/look-03.svg",
      photoAlt: "Look 03 — Quiet Room: oversized dropped-shoulder linen dress",
    },
    {
      id: "look-04",
      number: 4,
      title: "Archive Coat",
      description:
        "A mid-weight overcoat with exposed seam allowances turned outward — a nod to the unfinished. The hem is left raw; it will continue to settle.",
      price: "¥96,000",
      priceNote: "Limited — 24 pieces",
      fabric: "Wool / cotton blend — 60% wool, 40% cotton",
      weight: "320 g/m²",
      fit: "Generous; intended to wear over layered pieces. Order your usual size.",
      colors: [
        { key: "brown", label: "Warm Earth" },
        { key: "midnight", label: "Void" },
      ],
      sizes: [
        { value: "XS", disabled: true },
        { value: "S" },
        { value: "M" },
        { value: "L" },
        { value: "XL" },
      ],
      photo: "/placeholders/look-04.svg",
      photoAlt: "Look 04 — Archive Coat: mid-weight overcoat with exposed seams",
    },
    {
      id: "look-05",
      number: 5,
      title: "Still Water",
      description:
        "A pull-on trouser in heavy cotton canvas. The cut is narrow at the ankle and gathered to a wide waistband. No closure — simply worn.",
      price: "¥36,000",
      fabric: "100% cotton canvas — enzyme washed",
      weight: "280 g/m²",
      fit: "Narrow ankle, full through the thigh. Waistband is elasticated. True to size.",
      colors: [
        { key: "olive", label: "Moss" },
        { key: "midnight", label: "Indigo" },
        { key: "beige", label: "Raw" },
      ],
      sizes: [
        { value: "XS" },
        { value: "S" },
        { value: "M" },
        { value: "L" },
        { value: "XL" },
      ],
      photo: "/placeholders/look-05.svg",
      photoAlt: "Look 05 — Still Water: narrow-ankle cotton canvas trouser",
    },
    {
      id: "look-06",
      number: 6,
      title: "Night Passage",
      description:
        "A layered evening look: wide silk-cotton kimono jacket over a slim slip. The jacket is unstructured; it moves with the wearer. The slip is straight.",
      price: "¥74,000",
      priceNote: "Jacket + slip set",
      fabric: "Jacket: silk/cotton — 70% silk, 30% cotton. Slip: 100% cotton.",
      weight: "Jacket: 95 g/m² · Slip: 140 g/m²",
      fit: "Jacket: one size. Slip: slim; size up for comfort.",
      colors: [
        { key: "grape", label: "Gothic Grape" },
        { key: "midnight", label: "Midnight" },
      ],
      sizes: [
        { value: "XS" },
        { value: "S" },
        { value: "M" },
        { value: "L" },
        { value: "XL", disabled: true },
      ],
      photo: "/placeholders/look-06.svg",
      photoAlt: "Look 06 — Night Passage: kimono jacket over slim cotton slip",
    },
  ],
} as const;

// Atmosphere control options — engine will be implemented separately.
export type TimeOfDay = "dawn" | "afternoon" | "pink-sunset" | "midnight";
export type Weather = "clear" | "rainy" | "windy";
export type Season = "spring" | "hot-summer-sunday" | "fall";

export type AtmosphereState = {
  time: TimeOfDay;
  weather: Weather;
  season: Season;
};

export const TIME_OPTIONS: { value: TimeOfDay; label: string }[] = [
  { value: "dawn", label: "Dawn" },
  { value: "afternoon", label: "Afternoon" },
  { value: "pink-sunset", label: "Pink sunset" },
  { value: "midnight", label: "Midnight" },
];

export const WEATHER_OPTIONS: { value: Weather; label: string }[] = [
  { value: "clear", label: "Clear" },
  { value: "rainy", label: "Rainy" },
  { value: "windy", label: "Windy" },
];

export const SEASON_OPTIONS: { value: Season; label: string }[] = [
  { value: "spring", label: "Spring" },
  { value: "hot-summer-sunday", label: "Hot summer Sunday" },
  { value: "fall", label: "Fall" },
];

export const DEFAULT_ATMOSPHERE: AtmosphereState = {
  time: "afternoon",
  weather: "clear",
  season: "spring",
};
