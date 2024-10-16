export function getLighterColor(
  hexColor: string,
  factor: number = 0.5
): string {
  hexColor = hexColor.replace(/^#/, "");

  let r = parseInt(hexColor.slice(0, 2), 16);
  let g = parseInt(hexColor.slice(2, 4), 16);
  let b = parseInt(hexColor.slice(4, 6), 16);

  r = Math.round(r + (255 - r) * factor);
  g = Math.round(g + (255 - g) * factor);
  b = Math.round(b + (255 - b) * factor);

  r = Math.min(255, Math.max(0, r));
  g = Math.min(255, Math.max(0, g));
  b = Math.min(255, Math.max(0, b));

  const lighterHex = `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;

  return lighterHex;
}
