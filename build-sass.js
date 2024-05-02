const sass = require('node-sass');
const fs = require('fs-extra');
const path = require('path');

const inputDir = './src/scss'; // Thư mục chứa các file SCSS
const outputDir = './public/css'; // Thư mục đầu ra cho file CSS đã biên dịch

// Tìm tất cả các file SCSS trong thư mục đầu vào
const scssFiles = fs.readdirSync(inputDir).filter(file => file.endsWith('.scss'));

// Biên dịch từng file SCSS và ghi kết quả vào thư mục đầu ra
scssFiles.forEach(file => {
    const inputFile = path.join(inputDir, file);
    const outputFile = path.join(outputDir, file.replace('.scss', '.css'));
    sass.render({
        file: inputFile,
        outputStyle: 'compressed' // Loại bỏ dấu cách không cần thiết khỏi CSS đầu ra
    }, (err, result) => {
        if (err) {
            console.error(`Error compiling ${file}:`, err);
        } else {
            fs.ensureDirSync(outputDir);
            fs.writeFileSync(outputFile, result.css);
            console.log(`Compiled ${file} to ${outputFile}`);
        }
    });
});
