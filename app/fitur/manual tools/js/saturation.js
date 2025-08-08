// js/saturation.js
export function applySaturation(ctx, img, value) {
  ctx.filter = `saturate(${100 + value}%)`;
  ctx.drawImage(img, 0, 0);
}
