



const fs = require('fs');
const path = require('path');

const command = process.argv[2];
const args = process.argv.slice(3);

const readFile = (filePath) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err.message);
    } else {
      console.log(data);
    }
  });
};

const appendToFile = (filePath, content) => {
  fs.appendFile(filePath, content, 'utf8', (err) => {
    if (err) {
      console.error('Error appending to file:', err.message);
    } else {
      console.log('Content appended successfully.');
    }
  });
};

const deleteFile = (filePath) => {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error deleting file:', err.message);
    } else {
      console.log('File deleted successfully.');
    }
  });
};

const createFile = (filePath) => {
  fs.writeFile(filePath, '', (err) => {
    if (err) {
      console.error('Error creating file:', err.message);
    } else {
      console.log('File created successfully.');
    }
  });
};

const renameFile = (oldPath, newPath) => {
  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.error('Error renaming file:', err.message);
    } else {
      console.log('File renamed successfully.');
    }
  });
};

const listDirectory = (directoryPath) => {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Error listing directory:', err.message);
    } else {
      console.log('Files in directory:', files.join(', '));
    }
  });
};

switch (command) {
  case 'read':
    readFile(args[0]);
    break;
  case 'append':
    appendToFile(args[0], args[1]);
    break;
  case 'delete':
    deleteFile(args[0]);
    break;
  case 'create':
    createFile(args[0]);
    break;
  case 'rename':
    renameFile(args[0], args[1]);
    break;
  case 'list':
    listDirectory(args[0]);
    break;
  default:
    console.log('Invalid command.');
}
