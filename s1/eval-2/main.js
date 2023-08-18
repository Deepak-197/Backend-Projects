// main.js

const fs = require('fs');
const cowsay = require('cowsay');

function writeToFile(website) {
    const data = `URL: ${website.url} | Address: ${website.address} | ${website.family}\n`;

    try {
        fs.appendFileSync('data.txt', data);
        console.log(`Data for ${website.url} written to data.txt`);
    } catch (err) {
        console.error('Error writing to file:', err);
    }
}

function readFromFile(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
        } else {
            callback(data);
        }
    });
}

function cowSay(text) {
    const cowText = cowsay.say({
        text: text,
        e: 'oO',
        T: 'U '
    });
    console.log(cowText);
}

function deleteFile(filename) {
    fs.unlink(filename, (err) => {
        if (err) {
            console.error('Error deleting file:', err);
        } else {
            console.log(`${filename} deleted successfully.`);
        }
    });
}

module.exports = {
    writeToFile,
    readFromFile,
    cowSay,
    deleteFile
};
