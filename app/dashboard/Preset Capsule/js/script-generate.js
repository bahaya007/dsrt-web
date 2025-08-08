const categories = ['basic', 'color', 'creative', 'portrait'];
const presetSelector = document.getElementById('preset-selector');
const imagePreview = document.getElementById('image-preview');
const presetStyleLink = document.getElementById('preset-style');

// Generate opsi preset
categories.forEach(category => {
  for (let i = 1; i <= 20; i++) {
    const option = document.createElement('option');
    option.value = `${category}/preset${i}`; // contoh: "basic/preset1"
    option.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} Preset ${i}`;
    presetSelector.appendChild(option);
  }
});

// Set default preset
presetSelector.value = 'basic/preset1';

presetSelector.addEventListener('change', (e) => {
  const [category, preset] = e.target.value.split('/'); // ["basic", "preset1"]

  // Ganti file CSS yang dipakai
  presetStyleLink.href = `css/${category}/${preset}.css`;

  // Update class gambar
  imagePreview.className = '';
  imagePreview.classList.add(preset);
});
