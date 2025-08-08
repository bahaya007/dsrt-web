// js/main.js
import { applyBrightness } from './brightness.js';
import { applyContrast } from './contrast.js';
import { applySaturation } from './saturation.js';
import { applyRotation } from './rotate.js';
import { cropImage } from './crop.js';
import { resetImage } from './reset.js';
import { undoLast } from './undo.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let img = new Image();
let history = [];

// Load gambar default (atau bisa pakai upload)
img.src = 'https://via.placeholder.com/600x400.png?text=Upload+Image';
img.onload = () => {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);
  saveHistory();
};

// Simpan state canvas untuk Undo
function saveHistory() {
  history.push(canvas.toDataURL());
  if (history.length > 20) history.shift();
}

// Event Brightness
document.getElementById('brightness').addEventListener('input', (e) => {
  applyBrightness(ctx, img, parseInt(e.target.value));
  saveHistory();
});

// Event Contrast
document.getElementById('contrast').addEventListener('input', (e) => {
  applyContrast(ctx, img, parseInt(e.target.value));
  saveHistory();
});

// Event Saturation
document.getElementById('saturation').addEventListener('input', (e) => {
  applySaturation(ctx, img, parseInt(e.target.value));
  saveHistory();
});

// Event Rotate
document.getElementById('rotate').addEventListener('input', (e) => {
  applyRotation(canvas, ctx, img, parseInt(e.target.value));
  saveHistory();
});

// Event Crop
document.getElementById('crop-btn').addEventListener('click', () => {
  cropImage(canvas, ctx, 300, 300);
  saveHistory();
});

// Event Reset
document.getElementById('reset-btn').addEventListener('click', () => {
  resetImage(ctx, img);
  saveHistory();
});

// Event Undo
document.getElementById('undo-btn').addEventListener('click', () => {
  undoLast(canvas, ctx, history);
});
