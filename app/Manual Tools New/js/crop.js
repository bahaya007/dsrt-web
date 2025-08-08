export function cropCanvas(ctx, width, height) {
  const sx = (ctx.canvas.width - width) / 2;
  const sy = (ctx.canvas.height - height) / 2;

  const imageData = ctx.getImageData(sx, sy, width, height);

  ctx.canvas.width = width;
  ctx.canvas.height = height;

  ctx.putImageData(imageData, 0, 0);
}
