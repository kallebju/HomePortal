var AWS = require('aws-sdk');

var iotdata = new AWS.IotData({
    endpoint:"ab1e6p1gfdk1g-ats.iot.eu-central-1.amazonaws.com"
});

const postData = JSON.stringify({state:{desired:{heat:true}}})
var params = {
    payload: postData,
    thingName: 'BasementRPi',
    shadowName: 'Heater'
};
  
exports.handler = async function(event) {
    const promise = new Promise((resolve, reject) => {
        iotdata.updateThingShadow(params, (err,data) => {
            if (err){
                console.log('An error has occured: ',err.errorMessage)
                reject(err)
            }
            else{
                console.log(`Response from updateThingShadow: ${JSON.stringify(data)}`)
                resolve(data)
            }     
        })
        });
    return promise
}
