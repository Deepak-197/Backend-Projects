
const { writeToFile, readFromFile, cowSay, deleteFile} = require('./main');

const command = process.argv[2];
const argument = process.argv[3];

switch (command){
    case 'write':
        const [url, address, family] = argument.split('|').map(item => item.trim());

        writeToFile({
            url: url,
            address: address,
            family: family
        });
        break;

    case 'read':
        readFromFile(argument, (data) => {
            console.log('File content:');
            console.log(data);
        }) ;
        break;

    case 'cow':
        readFromFile(argument, cowSay);
        break;

    case 'delete':
        deleteFile(argument);
        break;
    default:
        console.log('Invalid command.');
}