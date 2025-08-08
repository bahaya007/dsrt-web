export function applyRotate(ctx, img, degrees) {
  const radians = degrees * Math.PI / 180;
  const cw = ctx.canvas.width;
  const ch = ctx.canvas.height;

  // Buat canvas sementara untuk rotate
  const tempCanvas = document.createElement('canvas');
  const tempCtx = tempCanvas.getContext('2d');

  // Swap ukuran jika rotate 90/270 derajat
  if (degrees % 180 !== 0) {
    tempCanvas.width = ch;
    tempCanvas.height = cw;
  } else {
    tempCanvas.width = cw;
    tempCanvas.height = ch;
  }

  // Rotate gambar
  tempCtx.translate(tempCanvas.width / 2, tempCanvas.height / 2);
  tempCtx.rotate(radians);
  tempCtx.drawImage(ctx.canvas, -cw / 2, -ch / 2);

  // Resize canvas asli
  ctx.canvas.width = tempCanvas.width;
  ctx.canvas.height = tempCanvas.height;

  // Gambar ulang dari canvas sementara
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.drawImage(tempCanvas, 0, 0);
}
