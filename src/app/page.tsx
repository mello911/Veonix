"use client";

import { useState, useCallback } from "react";
import type { Outfit, AtmosphereState } from "@/data/collection";
import {
  COLLECTION,
  DEFAULT_ATMOSPHERE,
  TIME_OPTIONS,
  WEATHER_OPTIONS,
  SEASON_OPTIONS,
} from "@/data/collection";
import { SiteHeader } from "@/components/SiteHeader";
import { CollectionIndex } from "@/components/CollectionIndex";
import { FashionStage } from "@/components/FashionStage";
import { BrandAside } from "@/components/BrandAside";

export default function StorefrontPage() {
  const [selectedId, setSelectedId] = useState<string>(
    COLLECTION.outfits[0].id,
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [playIndex, setPlayIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const [bag, setBag] = useState<{ outfitId: string; size: string }[]>([]);
  const [atmosphere, setAtmosphere] =
    useState<AtmosphereState>(DEFAULT_ATMOSPHERE);

  const selectedOutfit: Outfit =
    COLLECTION.outfits.find((o) => o.id === selectedId) ??
    COLLECTION.outfits[0];

  const selectOutfit = useCallback(
    (id: string) => {
      setSelectedId(id);
      setSelectedSize(null);
      setSelectedColor(null);
    },
    [],
  );

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => {
      if (!prev) {
        // start: advance index on each tick (placeholder — real timer elsewhere)
        setPlayIndex((i) => (i + 1) % COLLECTION.outfits.length);
        setSelectedId(
          COLLECTION.outfits[(playIndex + 1) % COLLECTION.outfits.length].id,
        );
      }
      return !prev;
    });
  }, [playIndex]);

  const prevLook = useCallback(() => {
    const idx = COLLECTION.outfits.findIndex((o) => o.id === selectedId);
    const prev = (idx - 1 + COLLECTION.outfits.length) % COLLECTION.outfits.length;
    selectOutfit(COLLECTION.outfits[prev].id);
    setPlayIndex(prev);
  }, [selectedId, selectOutfit]);

  const nextLook = useCallback(() => {
    const idx = COLLECTION.outfits.findIndex((o) => o.id === selectedId);
    const next = (idx + 1) % COLLECTION.outfits.length;
    selectOutfit(COLLECTION.outfits[next].id);
    setPlayIndex(next);
  }, [selectedId, selectOutfit]);

  const toggleWishlist = useCallback(() => {
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(selectedId)) next.delete(selectedId);
      else next.add(selectedId);
      return next;
    });
  }, [selectedId]);

  const addToBag = useCallback(() => {
    if (!selectedSize) return;
    setBag((prev) => [...prev, { outfitId: selectedId, size: selectedSize }]);
  }, [selectedId, selectedSize]);

  return (
    <div className="environment-frame storefront-env">
      <SiteHeader bagCount={bag.length} />
      <main className="storefront-main">
        <div className="page-width storefront-columns">
          <CollectionIndex
            collection={COLLECTION}
            selectedId={selectedId}
            isPlaying={isPlaying}
            onSelect={selectOutfit}
            onTogglePlay={togglePlay}
            onPrev={prevLook}
            onNext={nextLook}
          />
          <FashionStage
            outfit={selectedOutfit}
            selectedSize={selectedSize}
            selectedColor={selectedColor}
            isWishlisted={wishlist.has(selectedId)}
            onSizeChange={setSelectedSize}
            onColorChange={setSelectedColor}
            onWishlist={toggleWishlist}
            onAddToBag={addToBag}
          />
          <BrandAside
            atmosphere={atmosphere}
            onAtmosphereChange={setAtmosphere}
            timeOptions={TIME_OPTIONS}
            weatherOptions={WEATHER_OPTIONS}
            seasonOptions={SEASON_OPTIONS}
          />
        </div>
      </main>
    </div>
  );
}
