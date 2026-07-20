/**
 * Auto-scan `src/assets/gallery/` for images. Drop a file into that folder
 * and Vite includes it in the next build — no code changes required.
 *
 * Naming convention for Before/After pairs:
 *   NN-before.<ext>  +  NN-after.<ext>   (e.g. 01-before.jpg + 01-after.jpg)
 * Any other filename is treated as a standalone gallery tile.
 */

const modules = import.meta.glob("/src/assets/gallery/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

interface Entry {
  path: string;
  url: string;
  basename: string;
}

const entries: Entry[] = Object.entries(modules)
  .map(([path, url]) => ({
    path,
    url,
    basename: path.split("/").pop() ?? "",
  }))
  .sort((a, b) => a.basename.localeCompare(b.basename));

export interface BeforeAfterPair {
  id: string;
  before: string;
  after: string;
}

export interface GalleryTile {
  id: string;
  url: string;
  label: string;
}

const beforeMap = new Map<string, string>();
const afterMap = new Map<string, string>();
const standalone: Entry[] = [];

for (const entry of entries) {
  const beforeMatch = entry.basename.match(/^(.+?)-before\.[a-z]+$/i);
  const afterMatch = entry.basename.match(/^(.+?)-after\.[a-z]+$/i);
  if (beforeMatch) beforeMap.set(beforeMatch[1], entry.url);
  else if (afterMatch) afterMap.set(afterMatch[1], entry.url);
  else standalone.push(entry);
}

export const beforeAfterPairs: BeforeAfterPair[] = Array.from(beforeMap.entries())
  .filter(([id]) => afterMap.has(id))
  .map(([id, before]) => ({ id, before, after: afterMap.get(id)! }));

export const galleryTiles: GalleryTile[] = standalone.map((entry) => ({
  id: entry.basename,
  url: entry.url,
  label: entry.basename.replace(/\.[a-z]+$/i, "").replace(/[-_]/g, " "),
}));
