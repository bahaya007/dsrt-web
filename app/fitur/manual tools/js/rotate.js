// js/rotate.js
export function applyRotation(canvas, ctx, img, degrees) {
  const radians = degrees * Math.PI / 180;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Resize canvas agar tidak terpotong saat rotasi
  const size = Math.max(img.width, img.height);
  canvas.width = size;
  canvas.height = size;

  ctx.save();
  ctx.translate(size / 2, size / 2);
  ctx.rotate(radians);
  ctx.drawImage(img, -img.width / 2, -img.height / 2);
  ctx.restore();
}
