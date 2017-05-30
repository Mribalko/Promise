/**
 * Created by mriba on 29.05.2017.
 */
const fs = require('fs');
const encode = {encoding: 'utf8'};


module.exports = function readall(path) {
    return new Promise(function(resolve, reject){
        fs.readdir(path, (err, files) => {
            if(err)
                reject(err);

            resolve(
                // map для каждого элемента files вернет результат
                // работы функции readFile, который является promise
                // Таким образом,  Promise.all получит на вход массив promise,
                // которые должны завершиться вместе
                // На выходе получим массив результатов функции readFile
                Promise.all(files.map(readFile))
            );

        })
    })
};


function readFile(file) {
    return new Promise(function(resolve, reject){
        fs.readFile(file, encode, (err, data) => {
            if(err) reject(err);
            resolve({name: file, content: data});
        });

    });
}