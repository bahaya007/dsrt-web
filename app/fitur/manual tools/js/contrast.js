// js/contrast.js
export function applyContrast(ctx, img, value) {
  ctx.filter = `contrast(${100 + value}%)`;
  ctx.drawImage(img, 0, 0);
}
