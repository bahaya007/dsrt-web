export function resetCanvas(ctx, img, sliders) {
  ctx.canvas.width = img.width;
  ctx.canvas.height = img.height;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.drawImage(img, 0, 0);

  // Reset slider values
  sliders.brightness.value = 0;
  sliders.contrast.value = 0;
  sliders.saturation.value = 0;
  sliders.rotate.value = 0;
}
