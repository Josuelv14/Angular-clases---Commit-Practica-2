const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const tailwind = require('@tailwindcss/postcss');
const autoprefixer = require('autoprefixer');

const inputPath = path.join(__dirname, '..', 'src', 'styles.css');
const outputPath = path.join(__dirname, '..', 'src', 'tailwind.css');

async function build() {
  try {
    const css = fs.readFileSync(inputPath, 'utf8');
    const result = await postcss([tailwind, autoprefixer]).process(css, {
      from: inputPath,
      to: outputPath,
      map: false,
    });
    fs.writeFileSync(outputPath, result.css, 'utf8');
    console.log('Generado:', outputPath);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

build();
