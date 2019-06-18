const request = require("request");

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1Ijoia2FyYWl2YW5za2EiLCJhIjoiY2p1ZGpqOGI1MHd4YzQ0cXE5Zmdob21qbCJ9.qgvjw3-W_k0LtCW0DtRhCA";

    request({url: url, json: true }, (err, res) => {
        if (err) {
            err = "Check your connectivity";
            callback(err, undefined);
        } else if (res.body.features.length === 0) {
            err = "Wrong input parameter";
            callback(err, undefined);
        } else {
            data = {
                latitude: res.body.features[0].center[1],
                longitude: res.body.features[0].center[0],
                location: res.body.features[0].place_name
            }
            callback(undefined, data);
        }
    });
};

module.exports = geocode;