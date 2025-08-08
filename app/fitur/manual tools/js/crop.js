// js/crop.js
export function cropImage(canvas, ctx, width, height) {
  const croppedData = ctx.getImageData(0, 0, width, height);
  canvas.width = width;
  canvas.height = height;
  ctx.putImageData(croppedData, 0, 0);
}
