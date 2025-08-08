export function applyContrast(imageData, value) {
  const data = imageData.data;
  const cFactor = value / 100;

  for (let i = 0; i < data.length; i += 4) {
    data[i] = clamp(((data[i] - 128) * cFactor + 128), 0, 255);
    data[i + 1] = clamp(((data[i + 1] - 128) * cFactor + 128), 0, 255);
    data[i + 2] = clamp(((data[i + 2] - 128) * cFactor + 128), 0, 255);
  }
  return imageData;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
