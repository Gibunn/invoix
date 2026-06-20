#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);

if (!args.length) {
	process.exit(1);
}

const featureName = args[1] || args[0];
const basePath = path.join(process.cwd(), "src", "features", featureName);

const folders = [
	`components-${featureName}`,
	`hooks-${featureName}`,
	`models-${featureName}`,
	`schemas-${featureName}`,
	`services-${featureName}`,
	`store-${featureName}`,
];

function createFolder(folderPath) {
	if (!fs.existsSync(folderPath)) {
		fs.mkdirSync(folderPath, { recursive: true });
	} else {
	}
}

function generate() {
	createFolder(basePath);

	folders.forEach((folder) => {
		createFolder(path.join(basePath, folder));
	});
}

generate();
