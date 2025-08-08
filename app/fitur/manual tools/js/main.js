import { applyBrightness } from './brightness.js';
import { applyContrast } from './contrast.js';
import { applySaturation } from './saturation.js';
// import modul lain sesuai kebutuhan

// Contoh fungsi utama apply filter gabungan
function applyFilters(ctx, img, brightnessVal, contrastVal, saturationVal) {
  ctx.drawImage(img, 0, 0);
  let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  imageData = applyBrightness(ctx, imageData, brightnessVal);
  imageData = applyContrast(ctx, imageData, contrastVal);
  imageData = applySaturation(ctx, imageData, saturationVal);

  ctx.putImageData(imageData, 0, 0);
}
