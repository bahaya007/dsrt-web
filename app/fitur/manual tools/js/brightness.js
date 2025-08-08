export function applyBrightness(ctx, imageData, value) {
  const data = imageData.data;
  const bFactor = value / 100;
  for (let i = 0; i < data.length; i += 4) {
    data[i] = clamp(data[i] * bFactor, 0, 255);     // R
    data[i + 1] = clamp(data[i + 1] * bFactor, 0, 255); // G
    data[i + 2] = clamp(data[i + 2] * bFactor, 0, 255); // B
  }
  return imageData;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
