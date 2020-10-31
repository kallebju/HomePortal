const https = require('https')
const options = {
    hostname: 'https://ab1e6p1gfdk1g-ats.iot.eu-central-1.amazonaws.com/things/BasementRPi/shadow?name=Heater',
    port: 443,
    path: '/',
    method: 'POST'
  };
const postData = JSON.stringify({state:{desired:{heat:true}}})
  
exports.handler = async function(event) {
    const promise = new Promise((resolve, reject) => {
        var req = https.request(options, (res) => {
                resolve(res.statusCode)
            });
        req.on('error', (e) => {
            reject(Error(e))
        });
        req.write(postData)
        req.end(); 
        })
    return promise
}
