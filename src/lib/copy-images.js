import fs from 'fs-extra';
import path from 'path';

const CONTENT_DIR = path.resolve('src/routes'); // your Markdown folder
const BUILD_CONTENT_DIR = path.resolve('build/routes'); // where build output goes

/**
 * Recursively walk through directories to find and copy images from markdown folders
 * @param {string} dir - The directory to walk
 * @returns {Promise<void>}
 */
async function walk(dir) {
	const files = await fs.readdir(dir);

	for (const file of files) {
		const fullPath = path.join(dir, file);
		const stats = await fs.stat(fullPath);

		if (stats.isDirectory()) {
			await walk(fullPath);
		} else if (stats.isFile() && file.endsWith('.md')) {
			const markdownDir = path.dirname(fullPath);

			// Copy all images in the same folder as the markdown
			const items = await fs.readdir(markdownDir);
			for (const item of items) {
				const itemPath = path.join(markdownDir, item);
				const ext = path.extname(item).toLowerCase();
				if (['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'].includes(ext)) {
					const relDir = path.relative(CONTENT_DIR, markdownDir);
					const destDir = path.join(BUILD_CONTENT_DIR, relDir);
					await fs.ensureDir(destDir);
					await fs.copy(itemPath, path.join(destDir, item));
				}
			}
		}
	}
}

async function copyImages() {
	try {
		await walk(CONTENT_DIR);
		console.log('Images copied successfully!');
	} catch (err) {
		console.error('Error copying images:', err);
		process.exit(1);
	}
}

copyImages();
