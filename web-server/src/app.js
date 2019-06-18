const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");
const bodyParser = require("body-parser");

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const rootDirectory = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/public", express.static(rootDirectory));

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
      

      res.render("index", {
            
            title: "My Weather App",
            name: "Iva",
            documentTitle: "Home"
      });
});


// app.post("/", (req, res) => {

//       if (!req.body.location) {
//             return res.send({
//                   error: "You must provide an address. Try again."
//             });
//       }

//       geocode(req.body.location, (err, {latitude, longitude, location} = {}) => {
//             if (err) {
//                   return res.send({
//                         error: err
//                   });
//             }

//             forecast(latitude, longitude, (err, forecastData) => {
//                   if (err) {
//                         return res.send({ err });
//                   }

//                   res.render("weather", {
//                         forecast: forecastData,
//                         location: location,
//                         address: req.body.location
//                   });
//             });
//       });
      
//       // res.render("weather", {
//       //       location: req.body.location
//       // });
// });

app.get("/about", (req, res) => {
      res.render("about", {
            title: "About section from app.js",
            name: "Iva K.",
            documentTitle: "About"
      });
});

app.get("/help", (req, res) => {
      res.render("help", {
            title: "This is HELP PAGE",
            name: "Karaivanska",
            documentTitle: "Help"
      });
});

app.get("/weather", (req, res) => {

      if (!req.query.address) {
            return res.send({
                  error: "You must provide an address. Try again."
            });
      }

      geocode(req.query.address, (err, {latitude, longitude, location} = {}) => {
            if (err) {
                  return res.send({
                        error: err
                  });
            }

            forecast(latitude, longitude, (err, forecastData) => {
                  if (err) {
                        return res.send({ err });
                  }

                  res.send({
                        forecast: forecastData,
                        location: location,
                        address: req.query.address
                  });
            });
      });

});

app.get("*", (req, res) => {
      res.render("404");
});

app.listen(3000, () => {
      console.log("The server started on port 3000");
});