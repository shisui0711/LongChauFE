const sass = require('node-sass');
const fs = require('fs-extra');
const path = require('path');

const inputDirs = [
    './src/scss',
    './src/scss/admin',
    './src/scss/components'
]; // Các thư mục chứa các file SCSS
const outputDir = './dist/css'; // Thư mục đầu ra cho file CSS đã biên dịch

const scssFiles = [];

// Tìm tất cả các file SCSS trong các thư mục đầu vào
inputDirs.forEach(dir => {
    fs.readdirSync(dir).filter(file => file.endsWith('.scss')).forEach(file => {
        scssFiles.push({
            inputFile: path.join(dir, file),
            outputFile: path.join(outputDir, file.replace('.scss', '.css'))
        });
    });
});

// Biên dịch từng file SCSS và ghi kết quả vào thư mục đầu ra
scssFiles.forEach(file => {
    sass.render({
        file: file.inputFile,
        outputStyle: 'compressed'
    }, (err, result) => {
        if (err) {
            console.error(`Error compiling ${file.inputFile}:`, err);
        } else {
            fs.ensureDirSync(outputDir);
            fs.writeFileSync(file.outputFile, result.css);
            console.log(`Compiled ${file.inputFile} to ${file.outputFile}`);
        }
    });
});