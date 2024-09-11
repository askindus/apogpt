import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

// Replicate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Go one level up from the 'frontend' directory
const rootDir = path.join(__dirname, '..');

const source = path.join(rootDir, 'data');
const destination = path.join(rootDir, 'static', 'assets','data');

// Copy directory recursively
fs.copy(source, destination, err => {
  if (err) {
    console.error('Error copying files:', err);
  } else {
    console.log('Files copied successfully!');
  }
});