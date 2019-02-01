/***

    Author: Tejas Tank
    Powered By: SnippetBucket Technoliges, Offshore Office.
    Email: info@snippetbucket.com

*/
const https = require('https');
const ex = require('./sb-config.js');
const cnf = ex.config();


/**
 * HOW TO Make an HTTP Call - GET
 */
// options for GET

var btoken = Buffer(cnf.user+':'+cnf.password).toString('base64');

var optionsget = {
    host: cnf.host,
    proto: 'https',
    port : 443,
    path: '/rest/api/space/tta',
    headers: { "Content-Type": "application/json", 'Authorization': 'Basic '+btoken},
    method : 'DELETE' ,
    agent: false,
    rejectUnauthorized: false
};

 


console.info('Options prepared:');
console.info(optionsget);
console.info('Do the GET call');

// do the GET request
var reqGet = https.request(optionsget, function(res) {
    console.log("statusCode: ", res.statusCode);
    // uncomment it for header details
//  console.log("headers: ", res.headers);

    res.on('data', function(d) {
        console.info('GET result:\n');
        process.stdout.write(d);
        console.info('\n\nCall completed');
    });

});

reqGet.end();
reqGet.on('error', function(e) {
    console.error(e);
});
