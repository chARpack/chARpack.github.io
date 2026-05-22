import { visit } from 'unist-util-visit';
import path from 'path';

const defaultClass = 'mx-auto max-w-md';

/**
 * Custom remark plugin for handling images, links, and attributes in markdown.
 * - Rewrites image URLs based on folder type
 * - Parses pseudo-attributes like $class for styling
 * - Handles xref links for internal navigation
 * - Sets external links to open in new tab
 */
export default function remarkCustom(options = {}) {
	return (tree, file) => {
		const filename = file.filename || '';
		const parts = filename.split('/');

		// Determine folder type
		let folder = 'manual'; // default
		if (parts.includes('development')) folder = 'development';
		else if (parts.includes('manual')) folder = 'manual';

		const manualIndex = parts.indexOf('manual');
		const version = manualIndex !== -1 ? parts[manualIndex + 1] : 'master';

		visit(tree, (node) => {
			// --- IMAGE HANDLING ---
			if (node.type === 'image' && node.url) {
				// Use URL constructor to properly parse and extract basename
				try {
					const url = new URL(node.url, 'https://example.com');
					const imageName = path.basename(url.pathname);

					// Rewrite URL based on folder type
					if (folder === 'manual') {
						node.url = `/images/manual/${version}/${imageName}`;
					} else if (folder === 'development') {
						node.url = `/images/development/${imageName}`;
					} else {
						node.url = `/images/${folder}/${imageName}`;
					}
				} catch (e) {
					// If URL parsing fails, use fallback
					const imageName = path.basename(node.url);
					if (folder === 'manual') {
						node.url = `/images/manual/${version}/${imageName}`;
					} else if (folder === 'development') {
						node.url = `/images/development/${imageName}`;
					} else {
						node.url = `/images/${folder}/${imageName}`;
					}
				}

				// Use nullish coalescing operator for safe property initialization
				node.data = node.data || {};
				node.data.hProperties = node.data.hProperties || {};

				// Parse $class="..." and other pseudo-attributes
				const attrRegex = /(\$class|width|height|id)="([^"]+)"/g;
				let match;
				while ((match = attrRegex.exec(node.alt)) !== null) {
					const [, key, value] = match;
					if (key === '$class') {
						node.data.hProperties.className = value.trim().split(/\s+/);
					} else {
						node.data.hProperties[key] = value;
					}
				}

				// Remove pseudo-attributes from alt text
				node.alt = node.alt.replace(/(\$class|width|height|id)="[^"]+"/g, '').trim();

				// Default class if none
				if (!node.data.hProperties.className) {
					node.data.hProperties.className = defaultClass;
				}
			}

			// --- LINK HANDLING ---
			if (node.type === 'link') {
				if (node.url?.startsWith('xref:')) {
					const target = node.url.replace(/^xref:/, '');
					if (folder === 'manual') {
						node.url = `/manual/${version}/${target}`;
					} else if (folder === 'development') {
						node.url = `/development/${target}`;
					} else {
						node.url = `/${folder}/${target}`;
					}
				} else if (/^(https?:)?\/\//.test(node.url)) {
					// External link => new tab
					node.data = node.data || {};
					node.data.hProperties = node.data.hProperties || {};
					node.data.hProperties.target = '_blank';
					node.data.hProperties.rel = 'noopener noreferrer';
				}
			}
		});
	};
}
