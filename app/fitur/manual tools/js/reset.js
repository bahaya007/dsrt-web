// js/reset.js
export function resetImage(ctx, img) {
  ctx.filter = 'none';
  ctx.clearRect(0, 0, img.width, img.height);
  ctx.drawImage(img, 0, 0);
}
