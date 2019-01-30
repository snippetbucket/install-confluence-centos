/***

    Author: Tejas Tank
    Powered By: SnippetBucket Technoliges, Offshore Office.
    Email: info@snippetbucket.com

*/
const https = require('https');
const q = require('querystring');

/**
 * HOW TO Make an HTTP Call - GET
 */
// options for GET


var sbcql = q.escape(' and text ~ "snippetbucket"');
var btoken = Buffer("test1"+':'+"sb@123").toString('base64');

var optionsget = {
    host: '192.168.1.119',
    proto: 'https',
    port : 443,
    path: '/rest/api/content/search?cql=space='+'SB'+ sbcql,
    headers: { "Content-Type": "application/json", 'Authorization': 'Basic '+btoken},
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
