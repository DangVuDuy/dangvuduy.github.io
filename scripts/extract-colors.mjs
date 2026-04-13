import ColorThief from 'colorthief';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const apps = [
  {
    id: 'cloud-music',
    iconPath: path.join(__dirname, '../public/apps/cloud-music/icon.png'),
  },
  {
    id: 'videoxpert',
    iconPath: path.join(__dirname, '../public/apps/videoxpert/icon.png'),
  },
];

const getColor = (imagePath) => {
  return new Promise((resolve, reject) => {
    try {
      const color = ColorThief.getColor(imagePath);
      resolve(color);
    } catch (e) {
      reject(e);
    }
  });
};

for (const app of apps) {
  try {
    const color = await getColor(app.iconPath);
    const hex = '#' + color.map(c => c.toString(16).padStart(2, '0')).join('');
    const r = color[0], g = color[1], b = color[2];
    console.log(`\n${app.id}:`);
    console.log(`  themeColor:      "${hex}"`);
    console.log(`  themeColorLight: "rgba(${r},${g},${b},0.12)"`);
    console.log(`  themeGlow:       "rgba(${r},${g},${b},0.18)"`);
    console.log(`  themeGrad:       "linear-gradient(135deg, ${hex}, rgba(${r},${g},${b},0.7))"`);
  } catch (e) {
    console.error(`Error processing ${app.id}:`, e.message);
  }
}
