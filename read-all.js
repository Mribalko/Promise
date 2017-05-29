/**
 * Created by mriba on 29.05.2017.
 */
const fs = require('fs');
const encode = {encoding: 'utf8'};


module.exports = function (path) {
    return new Promise(function(resolve, reject){
        fs.readdir(path, (err, files) => {
            if(err) reject(err);

            let array = [];
            const filesCount = files.length;

            files.forEach(file => {
                fs.readFile(file, encode, (err, data) => {
                    array.push({name: file, content: data});

                    if(filesCount == array.length)
                        resolve(array);
                });

            });

        })
    })
};