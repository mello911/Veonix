# VEONIX design system • working edition

Phase 002 proposes a visual language for review. Run `npm run dev` and visit `/design-system` to inspect it. The server returns a 404 for this route in production.

## Editorial direction

Bandcamp gives releases, credits, editorial stories and browsing links distinct levels of emphasis within a compact page. The proposed VEONIX layout uses a narrow index, a wider reading column and small captions. Serif titles carry the collection voice. Sans-serif labels keep material and garment details easy to scan. The original, generated botanical contact print pairs a fabric texture with the palette for review. [Bandcamp](https://bandcamp.com/)

## Color

Edit `src/design/palette.ts` to change a permanent pigment. The root layout exposes each value on the document as a CSS custom property. The preview reads the same data for the printed hex values.

| Pigment       | Custom property    | Initial value |
| ------------- | ------------------ | ------------- |
| Maroon        | `--brand-maroon`   | #733748       |
| Beige         | `--brand-beige`    | #E5D9C3       |
| Olive         | `--brand-olive`    | #65694B       |
| Gothic Grape  | `--brand-grape`    | #49394F       |
| Brown         | `--brand-brown`    | #775641       |
| Powder Blue   | `--brand-powder`   | #B4C5D5       |
| Slate Blue    | `--brand-slate`    | #475D73       |
| Midnight Blue | `--brand-midnight` | #171C35       |

Edit `src/design/tokens.css` to reassign a functional role. Tailwind v4 resolves these custom properties through `@theme inline`. Components can use utilities such as `bg-content`, `text-ink`, `border-control-border` and `outline-focus`.

| Use              | Semantic properties                                                                 |
| ---------------- | ----------------------------------------------------------------------------------- |
| Paper and panels | `--ui-page`, `--ui-content`                                                         |
| Copy             | `--ui-text`, `--ui-secondary`, `--ui-muted`                                         |
| Structure        | `--ui-border` for separators, `--ui-control-border` for interactive boundaries      |
| Actions          | `--ui-link`, `--ui-accent`, `--ui-on-accent`                                        |
| Interaction      | `--ui-selected`, `--ui-selected-surface`, `--ui-hover`, `--ui-active`, `--ui-focus` |
| Feedback         | `--ui-error`, `--ui-success`, `--ui-disabled-text`, `--ui-disabled-surface`         |

Use primary or secondary ink over the paper surfaces. Use on-accent ink over maroon, grape and midnight. Keep pale powder and beige swatches beside separate text labels.

## Typography

The system uses local Georgia, Arial and Courier New with generic fallbacks. To replace a family, edit `--face-editorial`, `--face-copy` or `--face-index`. Define any licensed local font files with `@font-face` before changing those aliases.

| Class suffix after `type-` | Role                                                     |
| -------------------------- | -------------------------------------------------------- |
| `wordmark`, `title`        | Closely set serif brand mark and fluid page title        |
| `collection`, `section`    | Italic collection title and upright section heading      |
| `body`, `product`, `price` | Reading copy, stronger garment name and tabular price    |
| `nav`, `caption`           | Compact navigation and secondary photo caption           |
| `meta`, `index`            | Monospaced specifications and numbered outfit references |

## Spacing and layout

The seven steps are 4, 8, 12, 16, 24, 32 and 48 pixels at the default 16-pixel root size. Apply them through `--step-1` to `--step-7`. Shared panel padding and vertical section rhythm use `--inset-panel` and `--section-gap`. A one-pixel rule separates entries and the two-pixel rule marks a major division.

The `page-width` utility caps the page at 80rem. Fluid margins and column gaps live in `--layout-margin` and `--layout-gap`. The optional `editorial-columns` grid stacks children in source order below 64rem. On larger screens it allocates an 11rem collection index, a flexible garment column and a 14rem identity column. Other pages can use a single column or compose their own grid with the same tokens.

The specimen uses two columns from 48rem and a single flow with a native section picker below it. Palette samples reflow from eight to four to two columns. CSS media queries read the named Tailwind breakpoints from the token sheet at build time. Reserve the named layering levels for background decoration, content, navigation and the skip link.

## Primitives

Import the following from `@/components/ui`. Native controls accept their standard accessibility and event props. Preview examples live in `src/app/design-system/specimens.tsx`.

| Component              | Usage                                                                                                               |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Button                 | Use for commands. Defaults to `type="button"`; set `type="submit"` for a form.                                      |
| TextLink               | Provide a real destination through `href`.                                                                          |
| IconButton             | Supply a meaningful `label` and icon child. Use `aria-pressed` for a toggle.                                        |
| TextInput, SearchInput | Supply a visible `label`. Connect hints or errors with `aria-describedby`.                                          |
| Select                 | Supply a visible `label` and native options.                                                                        |
| Checkbox               | Use a descriptive `label` for an independent setting.                                                               |
| Divider                | Use between related groups. Set `strong` for a major boundary.                                                      |
| SectionHeading         | Defaults to an h2. Pass `as="h3"` for a nested section.                                                             |
| ContentPanel           | Groups related content on the content surface. Supply a heading where appropriate.                                  |
| ColorSwatch            | Place named radios in a fieldset with a legend. Share `name` within one group. Each radio exposes its pigment name. |
| SizeSelector           | Supply a legend, group name and options. Supports controlled or default selection and disabled sizes.               |
| StatusLabel            | Pair its tone with explicit text. Use a live region around dynamic feedback when appropriate.                       |

## Accessibility and review

Target at least 4.5:1 for ordinary text, 3:1 for large text and 3:1 for functional boundaries and focus indicators against adjacent surfaces. Recheck each pairing after a palette change. Native labels, tab order, a skip link, visible focus outlines, checked markers and disabled attributes carry meaning alongside color. The preview includes a button state inspector, live search results and inline validation. Test radios with arrow keys, checkboxes with Space and links with Enter. Check at narrow widths and increased zoom.

## Future atmosphere

Keep permanent pigments in the palette module. Environment-level aliases such as `--environment-field` and `--environment-ink` can later vary by time, weather and season. `--ui-page` consumes the environment field. Keep control and text pairings in the functional layer. The optional `environment-frame` positions `--decoration-image` behind content on a pointer-transparent pseudo-element.

Use `media-mat` for photographs. It provides an isolated neutral surface. Apply future environmental effects to the background layer only. Ancestor opacity, filters and blend modes can alter every descendant pixel, including a garment photograph. Recheck photography against its source image whenever environment styles change.
