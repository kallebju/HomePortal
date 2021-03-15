var AWS = require('aws-sdk');

var iotdata = new AWS.IotData({
    endpoint: process.env.IOT_ENDPOINT
});

var params = {
    thingName: 'BasementRPi'
};
  
exports.handler = async function(event) {
    const promise = new Promise((resolve, reject) => {
        iotdata.getThingShadow(params, (err,data) => {
            if (err){
                console.log('An error has occured: ',err.errorMessage)
                reject(err)
            }
            else{
                console.log(`Response from getThingShadow: ${JSON.stringify(data)}`)
                resolve(JSON.parse(data.payload).state.reported)
            }     
        })
        });
    return promise
}
