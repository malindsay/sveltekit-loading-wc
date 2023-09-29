const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        "./dist/app-wc-ui/polyfills.js",
        "./dist/app-wc-ui/runtime.js",
        "./dist/app-wc-ui/main.js",
    ]
    await fs.ensureDir('dist/app-wc-ui/assets');
    await concat (files, 'dist/app-wc-ui/assets/app-wc-ui.js');
})()