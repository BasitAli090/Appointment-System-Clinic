const fs = require('fs');
const path = require('path');

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
}

// Files to copy
const filesToCopy = ['index.html', 'script.js', 'styles.css', 'list-styles.css'];

// Copy files to public directory
filesToCopy.forEach(file => {
    const srcPath = path.join(__dirname, file);
    const destPath = path.join(publicDir, file);
    
    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${file} to public/`);
    }
});

console.log('Build complete!');

