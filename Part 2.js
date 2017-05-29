/**
 * Created by mriba on 29.05.2017.
 */
const readAll = require('./read-all');

function show(file) {
    console.log('-'.repeat(10));
    console.log(`Содержимое файла ${file.name}:`);
    console.log(file.content);
    console.log('-'.repeat(10));
}

readAll('./logs/')
    .then(files => files.forEach(show))
    .catch(err => console.error(err));