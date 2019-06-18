const geocode = require("../utils/geocode");
const forecast = require("../utils/forecast");
const yargs = require("yargs");
yargs.version("1.1.0");

const address = process.argv[2];

if(!address){
    console.log("Please put a correct location.");
} else{
    geocode(address, (err, data) => {

        if (err) {
            return console.log(err);
        }
    
        forecast(data.latittude, data.longtittude, (err, forecastData) => {
            if (err) {
                return forecastData;
            }
    
            console.log(data.location);
            console.log(forecastData);
        });
    });
    
}




// const url = "https://api.darksky.net/forecast/318d615304acb52708ba68eb978ef571/37.8267,-122.4233";

// request({ url: url}, (err, res) => {
//     const data = JSON.parse(res.body);
//     console.log(data.currently.temperature + " and " + data.currently.humidity);


// });

// const curl =
// request({url: curl, json: true}, (err, res) => {
//     //const data = JSON.parse(res.body);

//     if(err){
//         console.log("Check your internet connection");
//     } else if(JSON.parse(res.body.features.length) === 0){
//         console.log("There is a problem with input parameters");
//     } else{
//         const latittude = res.body.features[0].center[1];
//         const longtittude = res.body.features[0].center[0];
//         console.log(`Success ${latittude} and ${longtittude}`);
//     }    
// });

