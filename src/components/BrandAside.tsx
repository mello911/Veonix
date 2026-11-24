import type {
  AtmosphereState,
  TimeOfDay,
  Weather,
  Season,
} from "@/data/collection";

type Option<T extends string> = { value: T; label: string };

type BrandAsideProps = {
  atmosphere: AtmosphereState;
  onAtmosphereChange: (next: AtmosphereState) => void;
  timeOptions: readonly Option<TimeOfDay>[];
  weatherOptions: readonly Option<Weather>[];
  seasonOptions: readonly Option<Season>[];
};

export function BrandAside({
  atmosphere,
  onAtmosphereChange,
  timeOptions,
  weatherOptions,
  seasonOptions,
}: BrandAsideProps) {
  function setTime(time: TimeOfDay) {
    onAtmosphereChange({ ...atmosphere, time });
  }
  function setWeather(weather: Weather) {
    onAtmosphereChange({ ...atmosphere, weather });
  }
  function setSeason(season: Season) {
    onAtmosphereChange({ ...atmosphere, season });
  }

  return (
    <aside className="col-aside" aria-label="Brand information and atmosphere">
      {/* Brand profile */}
      <div className="aside-brand">
        <div className="brand-logo-block" aria-hidden="true">
          <span className="brand-logo-mark">V</span>
        </div>
        <div>
          <p className="type-wordmark aside-wordmark">VEONIX</p>
          <p className="type-meta text-muted">Independent fashion house</p>
        </div>
      </div>

      <hr className="divider" />

      {/* Artistic statement */}
      <blockquote className="brand-statement">
        <p className="type-body">
          Clothes assembled from silence — undyed cloth, botanical traces, the
          fold-memory of linen left in the dark.
        </p>
        <footer className="type-meta text-muted brand-statement-footer">
          — Design statement, Fragment SS27
        </footer>
      </blockquote>

      <hr className="divider" />

      {/* Collection info */}
      <dl className="aside-info">
        <div>
          <dt className="type-meta text-muted">Collection</dt>
          <dd className="type-meta">Fragment — Spring 2027</dd>
        </div>
        <div>
          <dt className="type-meta text-muted">Pieces</dt>
          <dd className="type-meta">6 looks · limited production</dd>
        </div>
        <div>
          <dt className="type-meta text-muted">Materials</dt>
          <dd className="type-meta">Linen · cotton · silk · wool</dd>
        </div>
        <div>
          <dt className="type-meta text-muted">Origin</dt>
          <dd className="type-meta">Small-batch atelier</dd>
        </div>
      </dl>

      <hr className="divider" />

      {/* Atmosphere controls */}
      <section aria-labelledby="atmosphere-heading">
        <h3 id="atmosphere-heading" className="type-nav aside-section-title">
          Atmosphere
        </h3>
        <p className="type-caption text-muted atmosphere-note">
          Provisional — full engine coming next phase.
        </p>

        <AtmosphereGroup
          label="Time of day"
          options={timeOptions}
          value={atmosphere.time}
          name="atm-time"
          onChange={setTime}
        />

        <AtmosphereGroup
          label="Weather"
          options={weatherOptions}
          value={atmosphere.weather}
          name="atm-weather"
          onChange={setWeather}
        />

        <AtmosphereGroup
          label="Season"
          options={seasonOptions}
          value={atmosphere.season}
          name="atm-season"
          onChange={setSeason}
        />
      </section>

      <hr className="divider" />

      {/* Influences */}
      <section aria-labelledby="influences-heading">
        <h3 id="influences-heading" className="type-nav aside-section-title">
          Influences
        </h3>
        <ul className="influence-list" role="list">
          {[
            "Japanese minimalist fashion",
            "Gothic romanticism",
            "Independent music culture",
            "Vintage editorial composition",
            "Botanical illustration",
          ].map((item) => (
            <li key={item} className="type-caption">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <hr className="divider" />

      {/* Links */}
      <nav aria-label="Brand navigation">
        <ul className="aside-links" role="list">
          {[
            ["Lookbook", "/lookbook"],
            ["About VEONIX", "/about"],
            ["Press & contact", "/press"],
            ["Size guide", "/size-guide"],
            ["Care & materials", "/care"],
          ].map(([label, href]) => (
            <li key={label}>
              <a href={href} className="text-link type-caption">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

type AtmosphereGroupProps<T extends string> = {
  label: string;
  options: readonly Option<T>[];
  value: T;
  name: string;
  onChange: (v: T) => void;
};

function AtmosphereGroup<T extends string>({
  label,
  options,
  value,
  name,
  onChange,
}: AtmosphereGroupProps<T>) {
  return (
    <fieldset className="atmosphere-group">
      <legend className="type-meta text-muted atmosphere-label">{label}</legend>
      <div className="atmosphere-options">
        {options.map((opt) => (
          <label
            key={opt.value}
            className={`atmosphere-chip${value === opt.value ? " atmosphere-chip--active" : ""}`}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              className="sr-only"
            />
            <span>{opt.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
