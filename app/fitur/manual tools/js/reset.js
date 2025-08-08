export function resetCanvas(ctx, img, sliders) {
  ctx.canvas.width = img.width;
  ctx.canvas.height = img.height;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.drawImage(img, 0, 0);

  // Reset semua slider ke default value (asumsi 100 untuk brightness, contrast, saturation; 0 untuk rotate)
  sliders.brightness.value = 100;
  sliders.contrast.value = 100;
  sliders.saturation.value = 100;
  sliders.rotate.value = 0;
}
