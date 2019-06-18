const request = require("request");

const forecast = (latatute, longatute, result) => {
      const url = "https://api.darksky.net/forecast/318d615304acb52708ba68eb978ef571/" + latatute + "," + longatute;
      
      request({url: url, json: true}, (err, res) => {

            if(err){
                  err = "Check your connection!";
                  result(err, undefined);
            } else if(res.body.err){
                  err = "Check input parameters.";
                  result(err, undefined);
            } else{
                  const temperature = res.body.currently.time;
                  result(undefined, temperature);
            }
      });      
}
module.exports = forecast;