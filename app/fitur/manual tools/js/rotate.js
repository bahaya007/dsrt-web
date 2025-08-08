export function applyRotate(ctx, img, degrees) {
  const radians = (degrees * Math.PI) / 180;
  const width = img.width;
  const height = img.height;

  // Hitung canvas baru supaya pas putaran
  const sin = Math.abs(Math.sin(radians));
  const cos = Math.abs(Math.cos(radians));
  const newWidth = Math.floor(width * cos + height * sin);
  const newHeight = Math.floor(height * cos + width * sin);

  // Resize canvas (pastikan kamu set canvas di luar)
  ctx.canvas.width = newWidth;
  ctx.canvas.height = newHeight;

  ctx.clearRect(0, 0, newWidth, newHeight);

  // Transform dan gambar ulang
  ctx.save();
  ctx.translate(newWidth / 2, newHeight / 2);
  ctx.rotate(radians);
  ctx.drawImage(img, -width / 2, -height / 2);
  ctx.restore();
}
