/**
 * Created by mriba on 29.05.2017.
 */
const fs = require('fs');
const encode = {encoding: 'utf8'};


const read = function (file) {
    return new Promise(function(resolve, reject){
        fs.readFile(file, encode, (err, data) => {
            if(err) reject(err);
            resolve(data);
        })
    })
};

const write = function (file, data) {
    return new Promise(function(resolve, reject){
        fs.writeFile(file, data, (err) => {
            if(err) reject(err);
            resolve(file);
        })
    })
};

module.exports = {
  read,
  write
};

