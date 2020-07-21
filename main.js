
const fs = require('fs');
const path = require('path');

var data = { name: "Janssen Bailio" }
var result = { value: 30 }

// fetch folders in root dir
var folders = fs.readdirSync(__dirname);

readFiles(folders)
    .then(() => {
        console.log('executing main function');
        mainFunction();
    });

async function readFiles(folders) {
    for(var i = 0; i < folders.length; i++) {

        var folder = folders[i];
        var folderCheck = folder.search('.js'); // makes sure we read only folders and not other files

        if (folderCheck == -1) {
    
            // fetch files per folder in loop
            var files = fs.readdirSync('./' + folder);
    
            // loop through files in folder
            for(var j = 0; j < files.length; j++) {
    
                var file = files[j];
                
                if(file.substr(file.length - 3) == '.js') {
                    var path = `${folder}/${file}`

                    console.log(`executing: ${folder} -> ${file}`)
                    var readFile = require('./' + path)(data, result);
                    var returnObj = await readFile;
                    console.log('execution finished. Returned object: ', returnObj);
                    console.log();
                }
            }
    
        }
    }
}

function mainFunction() {
    console.log('main function executed');
    return true;
}