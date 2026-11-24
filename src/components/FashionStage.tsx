import Image from "next/image";
import type { Outfit } from "@/data/collection";
import { ColorSwatch, SizeSelector } from "@/components/ui";
import type { BrandColorKey } from "@/data/collection";

type FashionStageProps = {
  outfit: Outfit;
  selectedSize: string | null;
  selectedColor: string | null;
  isWishlisted: boolean;
  onSizeChange: (size: string) => void;
  onColorChange: (color: string) => void;
  onWishlist: () => void;
  onAddToBag: () => void;
};

export function FashionStage({
  outfit,
  selectedSize,
  selectedColor,
  isWishlisted,
  onSizeChange,
  onColorChange,
  onWishlist,
  onAddToBag,
}: FashionStageProps) {
  const canAdd = selectedSize !== null;

  return (
    <article className="col-stage" aria-label={`Look ${outfit.number}: ${outfit.title}`}>
      {/* Photography */}
      <figure className="stage-figure media-mat">
        <Image
          key={outfit.id}
          src={outfit.photo}
          alt={outfit.photoAlt}
          width={480}
          height={640}
          priority
          unoptimized
          className="stage-photo"
        />
        <figcaption className="stage-caption type-index">
          Look {String(outfit.number).padStart(2, "0")} / {" "}
          {String(6).padStart(2, "0")} — {outfit.title}
        </figcaption>
      </figure>

      {/* Outfit details */}
      <div className="stage-details">
        <div className="stage-title-row">
          <h2 className="type-section">{outfit.title}</h2>
          <button
            type="button"
            className="wishlist-btn"
            onClick={onWishlist}
            aria-pressed={isWishlisted}
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <span aria-hidden="true">{isWishlisted ? "♥" : "♡"}</span>
          </button>
        </div>

        <p className="type-body stage-description">{outfit.description}</p>

        <dl className="stage-specs">
          <div>
            <dt className="type-meta text-muted">Fabric</dt>
            <dd className="type-meta">{outfit.fabric}</dd>
          </div>
          {outfit.weight && (
            <div>
              <dt className="type-meta text-muted">Weight</dt>
              <dd className="type-meta">{outfit.weight}</dd>
            </div>
          )}
          <div>
            <dt className="type-meta text-muted">Fit</dt>
            <dd className="type-meta">{outfit.fit}</dd>
          </div>
        </dl>

        <hr className="divider" />

        {/* Colors */}
        <fieldset className="option-set stage-colors">
          <legend className="type-nav">Colour</legend>
          <div className="choice-row">
            {outfit.colors.map((c) => (
              <ColorSwatch
                key={c.key}
                color={c.key as BrandColorKey}
                name={`color-${outfit.id}`}
                checked={selectedColor === c.key}
                onChange={() => onColorChange(c.key)}
              />
            ))}
          </div>
        </fieldset>

        {/* Sizes */}
        <SizeSelector
          label="Size"
          name={`size-${outfit.id}`}
          options={outfit.sizes}
          value={selectedSize ?? undefined}
          onChange={onSizeChange}
        />

        <hr className="divider" />

        {/* Price + add */}
        <div className="stage-cta">
          <div className="stage-price-block">
            <span className="type-price stage-price">{outfit.price}</span>
            {outfit.priceNote && (
              <span className="type-meta text-muted">{outfit.priceNote}</span>
            )}
          </div>
          <button
            type="button"
            className="control button primary stage-add-btn"
            disabled={!canAdd}
            onClick={onAddToBag}
            aria-label={canAdd ? `Add ${outfit.title} to bag` : "Select a size to add to bag"}
          >
            {canAdd ? "Add to bag" : "Select size"}
          </button>
        </div>
      </div>
    </article>
  );
}
