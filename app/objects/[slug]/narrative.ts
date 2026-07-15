// Narrative-arc conformance. Storage keys are fixed metaphor words chosen because
// they can't collide with legacy fieldNote titles (tradefish already carries
// "Problem"/"Decision"). Display labels are decoupled (see NARRATIVE_LABELS) so the
// U8 checkpoint can A/B metaphor vs plain wording without re-authoring any case.

export const NARRATIVE_KEYS = ["Wall", "Fork", "Resolution", "Impact"] as const;
export type NarrativeKey = (typeof NARRATIVE_KEYS)[number];

// Display labels — the ONLY thing the U8 label A/B changes. Storage keys never move.
// Default: metaphor set (option A). Plain set (option B) = Problem/Decision/Resolution/Impact.
export const NARRATIVE_LABELS: Record<NarrativeKey, string> = {
  Wall: "Wall",
  Fork: "Fork",
  Resolution: "Resolution",
  Impact: "Impact",
};

type FieldNote = { title: string; body: string };

// How many canonical titles a case carries. Conformance is all-or-nothing: the
// U7 guard rejects any case whose count is 1–3 so a partial arc can never
// silently degrade into cryptic board headings.
export function countNarrativeKeys(fieldNotes?: FieldNote[]): number {
  if (!fieldNotes) return 0;
  const titles = new Set(fieldNotes.map((note) => note.title));
  return NARRATIVE_KEYS.filter((key) => titles.has(key)).length;
}

// A case renders the designed arc only when its fieldNotes are EXACTLY the four
// canonical titles (extra material folds into the four bodies upstream). Then the
// arc replaces the field-notes board — fieldNotes are consumed by exactly one renderer.
export function isNarrativeArc(fieldNotes?: FieldNote[]): boolean {
  return (
    !!fieldNotes &&
    fieldNotes.length === NARRATIVE_KEYS.length &&
    countNarrativeKeys(fieldNotes) === NARRATIVE_KEYS.length
  );
}
