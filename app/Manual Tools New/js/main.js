import { applyBrightness } from './brightness.js';
import { applyContrast } from './contrast.js';
import { applySaturation } from './saturation.js';
import { applyRotate } from './rotate.js';
import { cropCanvas } from './crop.js';
import { resetCanvas } from './reset.js';
import { HistoryStack } from './undo.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const brightnessSlider = document.getElementById('brightness');
const contrastSlider = document.getElementById('contrast');
const saturationSlider = document.getElementById('saturation');
const rotateSlider = document.getElementById('rotate');

const cropBtn = document.getElementById('crop-btn');
const resetBtn = document.getElementById('reset-btn');
const undoBtn = document.getElementById('undo-btn');

const img = new Image();
img.crossOrigin = 'anonymous';
img.src = 'your-image-url.jpg'; // Ganti sesuai gambar kamu

const history = new HistoryStack();

img.onload = () => {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);
  history.push(ctx);
};

function applyFilters() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  applyRotate(ctx, img, Number(rotateSlider.value));

  let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  imageData = applyBrightness(imageData, Number(brightnessSlider.value));
  imageData = applyContrast(imageData, Number(contrastSlider.value));
  imageData = applySaturation(imageData, Number(saturationSlider.value));

  ctx.putImageData(imageData, 0, 0);
  history.push(ctx);
}

brightnessSlider.addEventListener('input', applyFilters);
contrastSlider.addEventListener('input', applyFilters);
saturationSlider.addEventListener('input', applyFilters);
rotateSlider.addEventListener('input', applyFilters);

cropBtn.addEventListener('click', () => {
  cropCanvas(ctx, 300, 300);
  history.push(ctx);
});

resetBtn.addEventListener('click', () => {
  resetCanvas(ctx, img, {
    brightness: brightnessSlider,
    contrast: contrastSlider,
    saturation: saturationSlider,
    rotate: rotateSlider,
  });
  history.push(ctx);
});

undoBtn.addEventListener('click', () => {
  history.undo(ctx);
});
