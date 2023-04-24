const fs = require('fs');
const fsp = fs.promises;

const readWrite = async () => {
    const data = await fsp.readFile(__dirname + '/123.txt', 'utf-8');

    console.log(data);

    await fsp.writeFile(__dirname + '/123.txt', 'next test');

    await fsp.mkdir(__dirname + '/files', { recursive: true });

    await fsp.copyFile(__dirname + '/123.txt', __dirname + '/files/456.txt');
};


readWrite();