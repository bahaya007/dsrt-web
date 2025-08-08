
// Ambil elemen dari DOM
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const brightnessSlider = document.getElementById('brightness');
const contrastSlider = document.getElementById('contrast');
const saturationSlider = document.getElementById('saturation');
const rotateSlider = document.getElementById('rotate');

const cropBtn = document.getElementById('crop-btn');
const resetBtn = document.getElementById('reset-btn');
const undoBtn = document.getElementById('undo-btn');

let img = new Image();
img.crossOrigin = "anonymous";
// Ganti URL gambar sesuai kebutuhan
img.src = 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=500&q=80';

let historyStack = [];
let isApplyingFilter = false;

img.onload = () => {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);
  saveState();
};

// Simpan state canvas ke history stack untuk undo
function saveState() {
  try {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    historyStack.push(imageData);
    if(historyStack.length > 20) historyStack.shift(); // Batasi undo maksimal 20 langkah
  } catch (e) {
    // Kadang error cross-origin, ignore saja
  }
}

// Undo terakhir
function undo() {
  if (historyStack.length > 1) {
    historyStack.pop();
    const previous = historyStack[historyStack.length - 1];
    ctx.putImageData(previous, 0, 0);
  }
}

// Terapkan filter & rotasi ke gambar
function applyFilters() {
  if (isApplyingFilter) return; // Cegah pemanggilan berulang

  isApplyingFilter = true;

  const brightness = Number(brightnessSlider.value);
  const contrast = Number(contrastSlider.value);
  const saturation = Number(saturationSlider.value);
  const rotate = Number(rotateSlider.value);

  // Reset canvas dan ukurannya
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Simpan dan terapkan rotasi
  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate((rotate * Math.PI) / 180);
  ctx.translate(-canvas.width / 2, -canvas.height / 2);

  // Gambar ulang
  ctx.drawImage(img, 0, 0);

  ctx.restore();

  // Ambil data pixel dan manipulasi brightness, contrast, saturasi
  let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imageData.data;

  const bFactor = brightness / 100;
  const cFactor = contrast / 100;
  const sFactor = saturation / 100;

  for(let i = 0; i < data.length; i += 4) {
    // Brightness
    data[i] = clamp(data[i] * bFactor, 0, 255);     // R
    data[i+1] = clamp(data[i+1] * bFactor, 0, 255); // G
    data[i+2] = clamp(data[i+2] * bFactor, 0, 255); // B

    // Contrast
    data[i] = clamp(((data[i] - 128) * cFactor + 128), 0, 255);
    data[i+1] = clamp(((data[i+1] - 128) * cFactor + 128), 0, 255);
    data[i+2] = clamp(((data[i+2] - 128) * cFactor + 128), 0, 255);

    // Saturation
    let hsl = rgbToHsl(data[i], data[i+1], data[i+2]);
    hsl[1] = clampFloat(hsl[1] * sFactor, 0, 1);
    let rgb = hslToRgb(hsl[0], hsl[1], hsl[2]);
    data[i] = clamp(rgb[0], 0, 255);
    data[i+1] = clamp(rgb[1], 0, 255);
    data[i+2] = clamp(rgb[2], 0, 255);
  }

  ctx.putImageData(imageData, 0, 0);

  saveState();

  isApplyingFilter = false;
}

// Fungsi pembantu
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function clampFloat(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

// Konversi RGB ke HSL
function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  let max = Math.max(r,g,b), min = Math.min(r,g,b);
  let h, s, l = (max + min) / 2;
  if(max == min) { h = s = 0; }
  else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch(max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [h, s, l];
}
// Konversi HSL ke RGB
function hslToRgb(h, s, l) {
  let r, g, b;
  if(s == 0) { r = g = b = l; }
  else {
    function hue2rgb(p, q, t) {
      if(t < 0) t += 1;
      if(t > 1) t -= 1;
      if(t < 1/6) return p + (q - p) * 6 * t;
      if(t < 1/2) return q;
      if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    }
    let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    let p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return [r * 255, g * 255, b * 255];
}

// Event Listener
brightnessSlider.addEventListener('input', applyFilters);
contrastSlider.addEventListener('input', applyFilters);
saturationSlider.addEventListener('input', applyFilters);
rotateSlider.addEventListener('input', applyFilters);

cropBtn.addEventListener('click', () => {
  // Crop 300x300 di tengah canvas
  const cropWidth = 300;
  const cropHeight = 300;
  const sx = (canvas.width - cropWidth) / 2;
  const sy = (canvas.height - cropHeight) / 2;

  const cropped = ctx.getImageData(sx, sy, cropWidth, cropHeight);
  canvas.width = cropWidth;
  canvas.height = cropHeight;
  ctx.putImageData(cropped, 0, 0);

  saveState();
});

resetBtn.addEventListener('click', () => {
  // Reset semua ke gambar asli
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);

  brightnessSlider.value = 100;
  contrastSlider.value = 100;
  saturationSlider.value = 100;
  rotateSlider.value = 0;

  historyStack = [];
  saveState();
});

undoBtn.addEventListener('click', () => {
  undo();
});
