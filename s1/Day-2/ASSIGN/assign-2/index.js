const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const command = args[0];
const filePath = args[1];
const content = args.slice(2).join(' ');

switch (command) {
  case 'read':
    readFile(filePath);
    break;
  case 'append':
    appendToFile(filePath, content);
    break;
  case 'delete':
    deleteFile(filePath);
    break;
  case 'create':
    createFile(filePath);
    break;
  case 'rename':
    const newFilePath = args[2];
    renameFile(filePath, newFilePath);
    break;
  case 'list':
    const dirPath = filePath || '.';
    listFilesInDirectory(dirPath);
    break;
  default:
    console.log('Invalid command');
    break;
}

function readFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
    } else {
      console.log(data);
    }
  });
}

function appendToFile(filePath, content) {
  fs.appendFile(filePath, content, (err) => {
    if (err) {
      console.error('Error appending to file:', err);
    } else {
      console.log('Content appended successfully');
    }
  });
}

function deleteFile(filePath) {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error deleting file:', err);
    } else {
      console.log('File deleted successfully');
    }
  });
}

function createFile(filePath) {
  fs.writeFile(filePath, '', (err) => {
    if (err) {
      console.error('Error creating file:', err);
    } else {
      console.log('File created successfully');
    }
  });
}

function renameFile(oldPath, newPath) {
  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.error('Error renaming file:', err);
    } else {
      console.log('File renamed successfully');
    }
  });
}

function listFilesInDirectory(dirPath) {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error('Error listing directory:', err);
    } else {
      files.forEach((file) => {
        console.log(file);
      });
    }
  });
}




// const fs = require('fs');
// const path = require('path');

// const command = process.argv[2];
// const args = process.argv.slice(3);

// const readFile = (filePath) => {
//   fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       console.error('Error reading file:', err.message);
//     } else {
//       console.log(data);
//     }
//   });
// };

// const appendToFile = (filePath, content) => {
//   fs.appendFile(filePath, content, 'utf8', (err) => {
//     if (err) {
//       console.error('Error appending to file:', err.message);
//     } else {
//       console.log('Content appended successfully.');
//     }
//   });
// };

// const deleteFile = (filePath) => {
//   fs.unlink(filePath, (err) => {
//     if (err) {
//       console.error('Error deleting file:', err.message);
//     } else {
//       console.log('File deleted successfully.');
//     }
//   });
// };

// const createFile = (filePath) => {
//   fs.writeFile(filePath, '', (err) => {
//     if (err) {
//       console.error('Error creating file:', err.message);
//     } else {
//       console.log('File created successfully.');
//     }
//   });
// };

// const renameFile = (oldPath, newPath) => {
//   fs.rename(oldPath, newPath, (err) => {
//     if (err) {
//       console.error('Error renaming file:', err.message);
//     } else {
//       console.log('File renamed successfully.');
//     }
//   });
// };

// const listDirectory = (directoryPath) => {
//   fs.readdir(directoryPath, (err, files) => {
//     if (err) {
//       console.error('Error listing directory:', err.message);
//     } else {
//       console.log('Files in directory:', files.join(', '));
//     }
//   });
// };

// switch (command) {
//   case 'read':
//     readFile(args[0]);
//     break;
//   case 'append':
//     appendToFile(args[0], args[1]);
//     break;
//   case 'delete':
//     deleteFile(args[0]);
//     break;
//   case 'create':
//     createFile(args[0]);
//     break;
//   case 'rename':
//     renameFile(args[0], args[1]);
//     break;
//   case 'list':
//     listDirectory(args[0]);
//     break;
//   default:
//     console.log('Invalid command.');
// }
