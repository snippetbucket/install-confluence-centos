/***

    Author: Tejas Tank
    Powered By: SnippetBucket Technoliges, Offshore Office.
    Email: info@snippetbucket.com

*/
const https = require('https');

/**
 * HOW TO Make an HTTP Call - GET
 */
// options for GET
var optionsget = {
    host: '192.168.1.119',
    proto: 'https',
    port : 443,
    path: '/rest/api/content/',
    headers: { "Content-Type": "application/json", 'Authorization': 'Basic dGVzdDE6c2JAMTIz'},
    method : 'GET' ,
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
