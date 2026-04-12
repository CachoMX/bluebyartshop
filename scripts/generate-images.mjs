import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, '../public/images');
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const API_KEY = process.env.GOOGLE_API_KEY;
const BASE_URL = 'https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-fast-generate-001:predict';

const images = [
  {
    name: 'hero-kids-painting.jpg',
    prompt: 'Professional lifestyle photography, two happy children ages 6 and 8 painting colorful plaster figurines together at a bright white table covered with small paint pots in rainbow colors, paintbrushes, and finished artwork. Warm sunlit kitchen background, joyful expressions, vibrant saturated colors, shallow depth of field. No text, no watermarks.',
    aspect: '16:9',
  },
  {
    name: 'hero-unboxing.jpg',
    prompt: 'Top-down flat lay product photography of a beautiful art subscription box for kids open on a wooden table, showing colorful plaster figurines, small paint pots in many colors, brushes, sticker sheet, and instruction cards arranged artfully. Bright warm natural lighting, vibrant colors, professional commercial photography. No text.',
    aspect: '4:3',
  },
  {
    name: 'product-unicorn.jpg',
    prompt: 'Professional product photo, a cute unpainted white plaster unicorn figurine next to colorful paint pots and a small paintbrush on a pastel pink background, soft studio lighting, shallow depth of field, vibrant colors, clean white space around subject. No text.',
    aspect: '4:3',
  },
  {
    name: 'product-dinosaur.jpg',
    prompt: 'Professional product photo, three small cute plaster dinosaur figurines on a soft green background, one being painted by small child hands with a tiny paintbrush and colorful paints visible, bright cheerful lighting, playful feel. No text.',
    aspect: '4:3',
  },
  {
    name: 'product-space.jpg',
    prompt: 'Professional product photo, small plaster space figurines including a rocket, astronaut, and planet on a dark blue gradient background with subtle star elements, colorful paints nearby, soft studio lighting, vibrant. No text.',
    aspect: '4:3',
  },
  {
    name: 'product-ocean.jpg',
    prompt: 'Professional product photo, cute small plaster sea animal figurines including a sea turtle, clownfish and starfish on a turquoise blue background with some ocean-themed elements, bright fun colors, soft lighting. No text.',
    aspect: '4:3',
  },
  {
    name: 'product-coloring-book.jpg',
    prompt: 'A child age 7 happily coloring a detailed magical forest scene in a coloring book with colored pencils spread out around them on a bright table, warm sunlight, joyful expression, professional lifestyle photography, vibrant. No text.',
    aspect: '4:3',
  },
  {
    name: 'product-3d-dragon.jpg',
    prompt: 'Professional product photo, a cute small 3D printed mini dragon figurine being painted with a fine brush, colorful paints in background, bright colorful lighting, close-up with shallow depth of field, warm tones. No text.',
    aspect: '4:3',
  },
  {
    name: 'product-party-kit.jpg',
    prompt: 'Professional lifestyle photography, a group of six happy children ages 5-9 at a birthday party sitting around a decorated table each painting their own plaster figurine, colorful party decorations, bright joyful atmosphere, confetti, laughing and smiling. No text.',
    aspect: '16:9',
  },
  {
    name: 'about-kids-artwork.jpg',
    prompt: 'Happy young girl age 8 proudly holding up a colorful painting she made, standing in a bright art studio with colorful artwork on the walls behind her, paint on her hands and apron, big smile, warm lifestyle photography, vibrant colors. No text.',
    aspect: '4:3',
  },
  {
    name: 'about-family-art.jpg',
    prompt: 'A warm family moment, mother and two children ages 6 and 9 sitting together at a home table painting plaster figurines from an art kit, happy laughing, bright home interior, warm sunlight through window, professional lifestyle photography. No text.',
    aspect: '16:9',
  },
  {
    name: 'testimonial-mom.jpg',
    prompt: 'Professional portrait headshot of a happy smiling mom in her 30s in a bright home interior, natural light, warm tones, approachable and friendly expression, soft bokeh background. No text.',
    aspect: '1:1',
  },
  {
    name: 'testimonial-dad.jpg',
    prompt: 'Professional portrait headshot of a happy smiling dad in his 30s in a bright modern home, natural light, warm tones, friendly expression, soft blurred background, casual attire. No text.',
    aspect: '1:1',
  },
  {
    name: 'testimonial-mom2.jpg',
    prompt: 'Professional portrait headshot of a happy smiling woman in her early 30s with a warm friendly expression, bright natural indoor lighting, soft background blur, casual style. No text.',
    aspect: '1:1',
  },
  {
    name: 'shop-supplies-flatlay.jpg',
    prompt: 'Beautiful top-down flat lay photography of colorful art supplies for kids: small paint pots in rainbow colors, paintbrushes, plaster figurines, colored pencils, stickers, all arranged neatly on a white background, professional commercial photography, vibrant saturated colors. No text.',
    aspect: '16:9',
  },
];

async function generateImage(prompt, aspectRatio) {
  const res = await fetch(`${BASE_URL}?key=${API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      instances: [{ prompt }],
      parameters: { sampleCount: 1, aspectRatio },
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`${res.status}: ${err}`);
  }

  const data = await res.json();
  return data.predictions[0].bytesBase64Encoded;
}

let ok = 0;
let fail = 0;

for (const img of images) {
  try {
    process.stdout.write(`Generating ${img.name}...`);
    const b64 = await generateImage(img.prompt, img.aspect);
    const buf = Buffer.from(b64, 'base64');
    fs.writeFileSync(path.join(OUTPUT_DIR, img.name), buf);
    console.log(` ✓ (${(buf.length / 1024).toFixed(0)}KB)`);
    ok++;
    // Small pause to be polite to the API
    await new Promise(r => setTimeout(r, 800));
  } catch (e) {
    console.log(` ✗ ${e.message}`);
    fail++;
  }
}

console.log(`\nDone: ${ok} generated, ${fail} failed.`);
console.log(`Saved to: ${OUTPUT_DIR}`);
