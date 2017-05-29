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

            files.forEach(file => {
                let data = fs.readFileSync(file, encode);
                array.push({name: file, content: data});
            });
            resolve(array);
        })
    })
};