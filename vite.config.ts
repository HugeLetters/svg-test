import { sveltekit } from '@sveltejs/kit/vite';
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		{
			name: 'svg-generator',
			async buildStart() {
				const svgFolder = './src/lib/icon/asset';
				const svgFileNames = await readdir(svgFolder);
				await mkdir('./static').catch(() => void 0);
				await Promise.all(
					svgFileNames.map(async (name) =>
						writeFile(
							`./static/${name.replace('.svelte', '.svg')}`,
							`<svg xmlns="http://www.w3.org/2000/svg">${await readFile(resolve(svgFolder, name), 'utf8')}</svg>`
						)
					)
				);
			}
		}
	]
});
