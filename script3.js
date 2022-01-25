// ############################## FETCH API ####################################

let name = "Jalandhar";

const data = "api.openweathermap.org/data/2.5/weather?q={name}&appid={5fb493fbf125f4360b45be4dd73f60cc};"

// loadJSON("http://api.openweathermap.org/data/2.5/weather?q=London&appid=5fb493fbf125f4360b45be4dd73f60cc&units=metric", weatherdata);


// const jsonData= require("http://api.openweathermap.org/data/2.5/weather?q=London&appid=5fb493fbf125f4360b45be4dd73f60cc&units=metric"); 
// console.log(jsonData);


function weatherdata(data) {

    console.log(data);
    
}

// weatherdata(data);
// loading JSON data from an Url using an fetch api
// function fetches the file from the path where it is saved and returns file as the
// response in console.data() 
// fetch api works in web based environment=>
fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=31.3260&lon=75.5762&appid=5fb493fbf125f4360b45be4dd73f60cc`)
.then(response => {
   return response.json();
})
.then(jsondata => weatherdata(jsondata));