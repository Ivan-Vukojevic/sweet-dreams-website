import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, extname, parse } from 'path';

const SOURCE_DIR = './src/assets/images';
const OUTPUT_DIR = './src/assets/images-optimized';

// Quality settings
const QUALITY = {
  webp: 82,
  jpg: 85,
  jpeg: 85
};

// Responsive sizes for different use cases
const SIZES = {
  thumbnail: 150,      // Gallery thumbnails
  small: 400,          // Mobile views
  medium: 800,         // Tablet views
  large: 1200,         // Desktop views
  hero: 1920,          // Hero/background images
  logo: 80             // Logo/icons
};

async function optimizeImage(inputPath, outputPath, basename) {
  const ext = extname(inputPath).toLowerCase();
  
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    console.log(`\nProcessing: ${basename}`);
    console.log(`  Original: ${metadata.width}x${metadata.height}, ${metadata.format}`);
    
    // Determine image category and sizes to generate
    let sizesToGenerate = [];
    
    if (basename.includes('logo')) {
      // Logo - just optimize at small size
      sizesToGenerate = [{ name: '', width: SIZES.logo }];
    } else if (basename.includes('gallery')) {
      // Gallery images - need thumbnail + medium for main view
      sizesToGenerate = [
        { name: '-thumb', width: SIZES.thumbnail },
        { name: '', width: SIZES.medium }
      ];
    } else if (basename.includes('hero') || basename.includes('background')) {
      // Hero/background - need large size
      sizesToGenerate = [{ name: '', width: SIZES.hero }];
    } else if (basename.includes('main')) {
      // Main apartment images - need multiple sizes
      sizesToGenerate = [
        { name: '-small', width: SIZES.small },
        { name: '', width: SIZES.large }
      ];
    } else {
      // Default - optimize as-is or at large size
      sizesToGenerate = [{ name: '', width: Math.min(metadata.width, SIZES.large) }];
    }
    
    // Generate each size variant
    for (const size of sizesToGenerate) {
      const { name, dir } = parse(outputPath);
      const variantPath = join(dir, `${basename}${size.name}${ext}`);
      
      const resized = image.clone().resize(size.width, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
      
      if (ext === '.webp') {
        await resized.webp({ quality: QUALITY.webp, effort: 6 }).toFile(variantPath);
      } else if (ext === '.jpg' || ext === '.jpeg') {
        await resized.jpeg({ quality: QUALITY.jpg, progressive: true }).toFile(variantPath);
      } else if (ext === '.png') {
        const webpPath = variantPath.replace('.png', '.webp');
        await resized.webp({ quality: QUALITY.webp, effort: 6 }).toFile(webpPath);
        console.log(`  ✓ ${size.name || 'original'}: ${size.width}px (converted to WebP)`);
        continue;
      }
      
      console.log(`  ✓ ${size.name || 'original'}: ${size.width}px`);
    }
    
  } catch (error) {
    console.error(`  ✗ Error: ${error.message}`);
  }
}

async function processDirectory() {
  try {
    // Create output directory
    await mkdir(OUTPUT_DIR, { recursive: true });
    
    // Read all files from source directory
    const files = await readdir(SOURCE_DIR);
    
    // Filter image files
    const imageFiles = files.filter(file => {
      const ext = extname(file).toLowerCase();
      return ['.webp', '.jpg', '.jpeg', '.png'].includes(ext);
    });
    
    console.log(`Found ${imageFiles.length} images to optimize\n`);
    
    // Process each image
    for (const file of imageFiles) {
      const inputPath = join(SOURCE_DIR, file);
      const outputPath = join(OUTPUT_DIR, file);
      const basename = parse(file).name;
      await optimizeImage(inputPath, outputPath, basename);
    }
    
    console.log('\n✓ All images optimized with responsive sizes!');
    console.log(`\nOptimized images are in: ${OUTPUT_DIR}`);
    console.log('Manual step: Update image imports in components to use appropriate sizes.');
    
  } catch (error) {
    console.error('Error processing images:', error);
  }
}

processDirectory();
