"use client";

import { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  ColorSwatch,
  IconButton,
  SearchInput,
  SectionHeading,
  Select,
  SizeSelector,
  StatusLabel,
  TextInput,
  TextLink,
} from "@/components/ui";
import { palette, type BrandColor } from "@/design/palette";

type IndexProps = { sections: readonly (readonly [string, string])[] };
export function SectionIndex({ sections }: IndexProps) {
  const [active, setActive] = useState<string>(sections[0][0]);
  useEffect(() => {
    const targets = sections.map(([id]) => document.getElementById(id));
    const update = () => {
      const current = targets
        .filter((el) => el && el.getBoundingClientRect().top <= 110)
        .at(-1);
      setActive(
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 2
          ? sections[sections.length - 1][0]
          : (current?.id ?? sections[0][0]),
      );
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sections]);
  return (
    <nav className="index" aria-label="Section index">
      <div className="index-desktop">
        <p className="folio-label">Section index</p>
        {sections.map(([id, name]) => (
          <a
            href={`#${id}`}
            key={id}
            aria-current={active === id ? "location" : undefined}
          >
            {name}
          </a>
        ))}
      </div>
      <div className="index-mobile">
        <Select
          label="Section index"
          value={active}
          onChange={(e) => {
            window.location.hash = e.target.value;
            setActive(e.target.value);
          }}
        >
          {sections.map(([id, name]) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </Select>
      </div>
    </nav>
  );
}

const materials = [
  "Cotton twill",
  "Linen canvas",
  "Silk organza",
  "Wool gabardine",
];
const colors: BrandColor[] = ["maroon", "olive", "powder", "midnight"];
const sizes = [
  { value: "XS" },
  { value: "S" },
  { value: "M" },
  { value: "L" },
  { value: "XL", disabled: true },
];
export function Controls() {
  const [saved, setSaved] = useState(false);
  const [state, setState] = useState("default");
  const [marked, setMarked] = useState(false);
  const [action, setAction] = useState("No changes saved.");
  const [query, setQuery] = useState("");
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("Woven");
  const [details, setDetails] = useState(true);
  const [color, setColor] = useState<BrandColor>("maroon");
  const [size, setSize] = useState("M");
  const matches = materials.filter((item) =>
    item.toLowerCase().includes(query.trim().toLowerCase()),
  );
  const invalid = note.length > 32;
  return (
    <>
      <section id="actions">
        <div className="section-head">
          <SectionHeading>Buttons &amp; links</SectionHeading>
        </div>
        <div className="choice-row">
          <Button
            disabled={saved}
            onClick={() => {
              setSaved(true);
              setAction("Sample saved for this session.");
            }}
          >
            Save sample
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setSaved(false);
              setMarked(false);
              setAction("Sample reset.");
            }}
          >
            Reset sample
          </Button>
          <IconButton
            label="Bookmark sample"
            aria-pressed={marked}
            onClick={() => {
              setMarked(!marked);
              setAction(marked ? "Bookmark removed." : "Sample bookmarked.");
            }}
          >
            {marked ? "★" : "☆"}
          </IconButton>
          <Button disabled>Unavailable</Button>
          <TextLink href="#panels">View panel examples</TextLink>
        </div>
        <p className="feedback" role="status">
          {action}
        </p>
        <div className="state-study">
          <Select
            label="Inspect button state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            {["default", "hover", "active", "focus", "disabled"].map((key) => (
              <option key={key} value={key}>
                {key[0].toUpperCase() + key.slice(1)}
              </option>
            ))}
          </Select>
          <div aria-hidden="true" inert>
            <Button data-specimen={state} disabled={state === "disabled"}>
              Sample button
            </Button>
          </div>
        </div>
      </section>
      <section id="fields">
        <div className="section-head">
          <SectionHeading>Form fields</SectionHeading>
        </div>
        <div className="field-grid">
          <div>
            <TextInput
              label="Material note"
              placeholder="Add a short note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              aria-invalid={invalid}
              aria-describedby="note-hint"
            />
            <p
              id="note-hint"
              className={invalid ? "feedback error" : "feedback"}
              aria-live="polite"
            >
              {invalid ? "Note exceeds 32 characters." : "Up to 32 characters."}
            </p>
          </div>
          <Select
            label="Construction"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Woven</option>
            <option>Knitted</option>
            <option>Felted</option>
          </Select>
          <div>
            <SearchInput
              label="Find a material"
              placeholder="Search material names"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-controls="material-results"
            />
            <p className="feedback" id="material-results" role="status">
              {matches.length ? matches.join(" · ") : "No matching materials."}
            </p>
          </div>
          <TextInput label="Archive code" value="VX-002" disabled />
        </div>
      </section>
      <section id="choices">
        <div className="section-head">
          <SectionHeading>Selection controls</SectionHeading>
        </div>
        <div className="field-grid">
          <fieldset className="option-set">
            <legend>Color</legend>
            <div className="choice-row">
              {colors.map((key) => (
                <ColorSwatch
                  key={key}
                  color={key}
                  name="sample-color"
                  checked={color === key}
                  onChange={() => setColor(key)}
                />
              ))}
            </div>
          </fieldset>
          <SizeSelector
            label="Size"
            name="sample-size"
            options={sizes}
            value={size}
            onChange={setSize}
          />
        </div>
        <Checkbox
          label="Show sample details"
          checked={details}
          onChange={(e) => setDetails(e.target.checked)}
        />
        {details && (
          <p className="selection-summary" role="status">
            {palette[color].name} <span>/</span> {size} <span>/</span>{" "}
            {category}
          </p>
        )}
        <div className="status-line">
          <StatusLabel>Draft</StatusLabel>
          <StatusLabel tone="success">Available</StatusLabel>
          <StatusLabel tone="error">Unavailable</StatusLabel>
        </div>
      </section>
    </>
  );
}
