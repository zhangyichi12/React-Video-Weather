var open = require('open');
const SERVER_PORT = process.env.SERVER_PORT || 8080;

/**********************************1**********************************/
require('./node_modules/webpack-dev-server/bin/webpack-dev-server.js');
/**********************************1**********************************/

/**********************************2**********************************/
// var exec = require('child_process').exec, child;
//
// child = exec('node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js', function(err, stdout, stderr){
//     console.log('stdout: ' + stdout);
//     console.log('stderr: ' + stderr);
//     if(err) {
//         console.log('exec error: ' + err);
//     }
// });
/**********************************2**********************************/

open(`http://localhost:${SERVER_PORT}`, 'Google Chrome'); //webpack-dev-server default port
