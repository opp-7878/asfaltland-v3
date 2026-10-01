# DESIGN.md — AsfaltLand v3 (light, modern)

Recorded from the built page `v3/index.html` (2026-09-28). The v2 system in `../v2/DESIGN.md` («Паспорт объекта») does not apply here.

## Direction

A clean, modern, light contractor site at full craft. There's no themed costume: price in the headline, proof through before/after, and a live estimate. Yellow is used only inside the logo. The single accent is an electric cobalt.

## Color

| Token | Value | Use |
|---|---|---|
| `--bg` | `hsl(216 28% 97%)` | Page ground |
| `--surface` / `--surface-2` | `hsl(216 40% 99.4%)` / `hsl(216 24% 94%)` | Cards, alternating sections / quiet fills |
| `--ink` / `--ink-2` / `--ink-3` | `hsl(222 46% 10%)` / `hsl(222 16% 30%)` / `hsl(222 10% 44%)` | Headings / body / captions |
| `--line` / `--line-2` | `hsl(220 20% 88%)` / `hsl(220 16% 80%)` | Borders, hover borders |
| `--accent` (+600/700 hover/active, 50/100/200 tints) | `hsl(226 80% 50%)` | Primary CTA, selected states, price in H1, timeline main bar, rating card |
| `--night` / `--night-2` / `--night-line` / `--night-mute` | `hsl(224 34% 11%)` … | Estimate panel, facts band, footer |
| `--ok` | `hsl(152 62% 34%)` | Live survey dot, success state |

Strategy: restrained. The ground is neutral, the cobalt goes to actions and state, and there are two night-navy blocks (the estimate and the facts) for contrast. White on accent ≈ 5.9:1.

## Type

Onest (Google Fonts, Cyrillic) is the only family, at weights 400–700.

- H1: clamp(42px, 5.4vw, 78px), line-height 1, letter-spacing −0.045em.
- H2: clamp(34px, 3.8vw, 56px), letter-spacing −0.035em.
- Body: 16px/1.6. Leads: 17–19px.
- Numbers are tabular (`.num`).

## Shape and depth

- Radii: 10 / 16 / 24 / 32px. Cards use 24px; the hero photo, calculator, facts and order card use 32px.
- Buttons use a 12px radius at 52px height; filters are pills.
- Shadows are soft and hsl-tinted (`--shadow-sm`, `--shadow`, `--shadow-lg`), with no hard offsets.

## Components

- **Header:** sticky; gains a border and shadow on scroll.
- **Hero:** two columns. The right side is a deck of four object cards, fanned and rotated −3/−6/−9°.
  - The top card wipes from before to after, up to 50%. Then it flies off and the next card comes forward, every 4.8 s.
  - Controls: arrows, swipe, a «1 / 4» count and an aria-live caption.
  - Autoplay pauses on hover, focus, a hidden tab or when off-screen, and is off under reduced motion.
  - A floating next-survey-slot card has a pulsing dot.
  - An alternative hero (a giant headline with inline photo capsules) is kept in `heroes/a-words.html`.
- **Client strip:** a static row of six client types; it scrolls horizontally on narrow screens.
- **Works:** a bento grid of photo cards (one wide, three single, one full-width strip). The whole card is clickable, and the image zooms slightly on hover.
- **Before/after:** a `clip-path` slider with a white 2px line and a 48px round grip. It works with drag, touch and keyboard (`role=slider`), and sweeps once on first view. The featured object spans the row with a spec list and a CTA. Pill filters.
- **Timeline:** a 5-day grid. Bars grow on first view; the main phase is cobalt and the final one is ink.
- **Calculator:** a white form (selectable cards with radio dots, number input plus a logarithmic range) paired with a night estimate panel. The total and row sums flip on recalculation.
- **Contract:** a night facts band with counters, then six clauses in two columns, each with an icon tile.
- **Reviews:** a scroll-snap carousel with prev/next buttons. The first card is a cobalt rating card.
- **FAQ:** a sticky aside with a call card, plus a one-open accordion using `grid-template-rows` 0fr→1fr.
- **Order:** a photo half under a dark gradient, and a form half with validation, a phone mask and a success state.
- **Footer:** night background with the light logo.
- **Mobile action bar:** Call and WhatsApp buttons below 768px.

## Motion

- Ease is `cubic-bezier(.16,1,.3,1)`.
- Scroll reveals (`.rise`, 18px rise plus fade, short stagger) are JS-gated, so content stays visible without JS.
- Authored moments: the hero clip reveal, the before/after sweep, and the timeline bars.
- Everything respects `prefers-reduced-motion`.

## Content

Same copy, prices, photos and logo as v2. This is a demo concept: all numbers, reviews and contacts are placeholders (stated in the footer).
