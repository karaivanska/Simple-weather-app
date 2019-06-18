console.log("Client side javascript!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
let messageOne = document.querySelector("#message-one");
let messageTwo = document.querySelector("#message-two");

weatherForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const location = search.value;
      
      messageOne = "Loading...";
      messageTwo = "TEST";

      fetch('http://localhost:3000/weather?address=' + location).then((res) => {
            res.json().then((data) => {
                  
                  if (data.error) {
                        messageOne.textContent = data.error;
                  } else {
                        messageOne.textContent = data.location;
                        messageTwo.textContent = data.forecast;
                       
                  }
                  //console.log(data);
            });
      });
});


