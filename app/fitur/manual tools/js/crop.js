export function cropCanvas(ctx, cropWidth, cropHeight) {
  const canvas = ctx.canvas;
  const sx = (canvas.width - cropWidth) / 2;
  const sy = (canvas.height - cropHeight) / 2;

  const cropped = ctx.getImageData(sx, sy, cropWidth, cropHeight);
  canvas.width = cropWidth;
  canvas.height = cropHeight;
  ctx.putImageData(cropped, 0, 0);
}
