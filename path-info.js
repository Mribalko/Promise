/**
 * Created by mriba on 29.05.2017.
 */

const fs = require('fs');
const encode = {encoding: 'utf8'};

module.exports = function (path, callback) {
    //проверяем тип объекта
    fs.lstat(path, (err, stats) =>{
       if(err) throw err;
       // файл
       if(stats.isFile()) {
           fs.readFile(path, encode, (err, data) =>{
               if(err) throw err;
               callback(null, {path: path, type: 'file', content: data, childs: undefined });
           })
       }

        else {
           // папка
           if (stats.isDirectory()) {
               fs.readdir(path, (err, files) => {
                   if (err) throw err;
                   callback(null, {path: path, type: 'directory', content: undefined, childs: files});
               });
           }
           // ни файл, ни папка
           else {
               callback(null, {path: path, type: undefined, content: undefined, childs: undefined});
           }

       }

    });
};