// index.js

const { writeToFile, readFromFile, cowSay, deleteFile } = require('../main');

const websites = [
    {
        url: 'www.instagram.com',
        address: '157.240.23.174',
        family: 'IPv4'
    },
    {
        url: 'www.example.com',
        address: '93.184.216.34',
        family: 'IPv4'
    },
    // Add more websites as needed
];

websites.forEach(website => {
    writeToFile(website);
});

// After writing data, read and make the cow say the content from the file
readFromFile('data.txt', cowSay);

// Delete the data.txt file
deleteFile('data.txt');




