var express = require('express')
var app = express()
var fs = require('fs')
// var querystring = require('querystring');
var bodyParser = require('body-parser')
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');


    // Pass to next layer of middleware
    next();
});

app.get('/', function (req, res) {
    if(req.query.create == "true"){
        console.log(req,res);
        var id = req.query.dirName;
        var dir = './tmp';
        if(id){
            dir=id;
        }
        console.log(dir)
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        res.send('{success:"ok"}')
    }else {
        var id = req.query.path;    
        var path = '/';
        if(id){
            path=id;
        }
        var directories = [];
        var i = 0;
        fs.readdir(path, (err, files) => {
            var filelength = files.length;

            files.forEach(file => {
                console.log(file);
                fs.lstat(path + '/'+file, (err, stats) => {
                    console.log(stats.isDirectory());
                    i++;
                    if(stats.isDirectory()){
                        directories.push(file);
                    }
                    if(filelength == i){
                        var currentDir = {
                            directories: directories
                        };
                        res.json(currentDir);
                    }
                });
            });
        });
    }
    
})


app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})
