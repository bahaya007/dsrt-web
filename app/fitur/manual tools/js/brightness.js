// js/brightness.js
export function applyBrightness(ctx, img, value) {
  ctx.filter = `brightness(${100 + value}%)`;
  ctx.drawImage(img, 0, 0);
}
