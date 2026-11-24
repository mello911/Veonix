import type { Collection, Outfit } from "@/data/collection";

type CollectionIndexProps = {
  collection: Collection;
  selectedId: string;
  isPlaying: boolean;
  onSelect: (id: string) => void;
  onTogglePlay: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function CollectionIndex({
  collection,
  selectedId,
  isPlaying,
  onSelect,
  onTogglePlay,
  onPrev,
  onNext,
}: CollectionIndexProps) {
  const selectedOutfit: Outfit =
    collection.outfits.find((o) => o.id === selectedId) ??
    collection.outfits[0];

  return (
    <aside className="col-index" aria-label="Collection index">
      {/* Collection header */}
      <div className="index-header">
        <p className="type-meta text-secondary">{collection.season}</p>
        <h2 className="type-collection">{collection.title}</h2>
        <p className="type-meta text-secondary">{collection.designer}</p>
      </div>

      <hr className="divider" />

      {/* Description */}
      <p className="type-caption index-description">{collection.description}</p>

      <hr className="divider" />

      {/* Lookbook controls */}
      <div className="lookbook-controls" aria-label="Lookbook playback">
        <span className="type-meta text-muted">Lookbook</span>
        <div className="lookbook-btns">
          <button
            type="button"
            className="control button secondary icon-button"
            onClick={onPrev}
            aria-label="Previous look"
            title="Previous look"
          >
            <span aria-hidden="true">◂</span>
          </button>
          <button
            type="button"
            className="control button secondary icon-button"
            onClick={onTogglePlay}
            aria-label={isPlaying ? "Pause lookbook" : "Play lookbook"}
            title={isPlaying ? "Pause" : "Play"}
            aria-pressed={isPlaying}
          >
            <span aria-hidden="true">{isPlaying ? "⏸" : "▶"}</span>
          </button>
          <button
            type="button"
            className="control button secondary icon-button"
            onClick={onNext}
            aria-label="Next look"
            title="Next look"
          >
            <span aria-hidden="true">▸</span>
          </button>
        </div>
      </div>

      <hr className="divider" />

      {/* Outfit tracklist */}
      <nav aria-label="Outfit list">
        <ol className="outfit-list" role="list">
          {collection.outfits.map((outfit) => {
            const isSelected = outfit.id === selectedId;
            return (
              <li key={outfit.id}>
                <button
                  type="button"
                  className={`outfit-item${isSelected ? " outfit-item--selected" : ""}`}
                  onClick={() => onSelect(outfit.id)}
                  aria-current={isSelected ? "true" : undefined}
                  aria-label={`Look ${outfit.number}: ${outfit.title}`}
                >
                  <span className="outfit-num type-index">
                    {String(outfit.number).padStart(2, "0")}
                  </span>
                  <span className="outfit-title type-product">
                    {outfit.title}
                  </span>
                  {isSelected && (
                    <span className="outfit-indicator" aria-hidden="true">
                      ◆
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ol>
      </nav>

      <hr className="divider" />

      {/* Selected price + action */}
      <div className="index-purchase">
        <div className="index-price-row">
          <span className="type-price">{selectedOutfit.price}</span>
          {selectedOutfit.priceNote && (
            <span className="type-meta text-muted">{selectedOutfit.priceNote}</span>
          )}
        </div>
        <button
          type="button"
          className="control button primary index-add-btn"
          onClick={() => {
            /* bubble to parent via onSelect — full add handled in page */
          }}
        >
          View look
        </button>
      </div>
    </aside>
  );
}
