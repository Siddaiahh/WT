//node js file system
//reading file

var fs = require('fs');

fs.readFile('input.txt', function (err, data) {
                    if (err) throw err;
    console.log(data.toString());
});
