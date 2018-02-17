const fs = require('fs');




// var auth = (email, password) => {

//     fs.readFile('../../public/Database/Authentication.json', 'utf8', function readFileCallback(err, data) {
//         if (err) {
//             console.log(err);
//         } else {
//             var obj = JSON.parse(data); //now it an object

//             obj.users.push({ Email: `${email}`, Password: `${password}` }); //add some data
//             var json = JSON.stringify(obj); //convert it back to json
//             console.log(json)
//             fs.writeFile('../../public/Database/Authentication.json', json, 'utf8', (err) => {
//                 if (err) throw err;
//                 console.log('The file has been saved!');
//             }); // write it back 
//         }
//     });
// }

// auth('admin@a.com', 1234567)

// module.exports = auth;


var Authentication = {
    get: () => {
        fs.readFile('../../public/Database/Authentication.json', 'utf8', function readFileCallback(err, data) {
            if (err) {
                console.log(err);
            } else {
                var obj = JSON.parse(data); //now it an object}
                console.log(obj)
                return obj;

            }
        })
    },
    add: (email, password) => {
        fs.readFile('../../public/Database/Authentication.json', 'utf8', function readFileCallback(err, data) {
            if (err) {
                console.log(err);
            } else {
                var obj = JSON.parse(data); //now it an object}

                obj.users.push({ Email: `${email}`, Password: `${password}` }); //add some data
                var json = JSON.stringify(obj); //convert it back to json
                console.log(json)
                fs.writeFile('../../public/Database/Authentication.json', json, 'utf8', (err) => {
                    if (err) throw err;
                    console.log('The file has been saved!');
                }); // write it back 
            }
        })
    }
}

Authentication.add('admin', 123456)

