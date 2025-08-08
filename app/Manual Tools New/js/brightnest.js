export function applyBrightness(imageData, value) {
  const data = imageData.data;
  const factor = (value + 100) / 100; // konversi dari -100..100 ke 0..2

  for (let i = 0; i < data.length; i += 4) {
    data[i] = clamp(data[i] * factor, 0, 255);     // R
    data[i + 1] = clamp(data[i + 1] * factor, 0, 255); // G
    data[i + 2] = clamp(data[i + 2] * factor, 0, 255); // B
  }
  return imageData;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
