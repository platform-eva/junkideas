# Design QA

Reference: user-provided editorial artist portfolio screenshot.

## Comparison

- Desktop composition matches the reference structure: image-led hero, strong left-aligned headline, gold accents, and a full-height black navigation panel.
- Existing portrait asset is used with a muted cinematic treatment and responsive crop.
- Mobile retains the same visual hierarchy with a compact, accessible menu.

## Findings

- P2: Mobile hero headline overflowed at 390px. Fixed by tightening responsive type size and tracking.
- P2: Film texture was too prominent in the first pass. Fixed by blending it softly into the navigation panel.
- P2: Project cards looked like placeholders. Fixed with optional optimized film imagery, poster-style overlays, and a preserved fallback state.
- P2: Original project images were too heavy for fast delivery. Fixed with web-optimized WebP derivatives while preserving the originals.
- P3: The available portrait differs from the short-haired mountain portrait in the reference. The layout and art direction intentionally use the project's real portrait.

final result: passed
