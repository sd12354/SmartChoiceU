const fs = require('fs');

// Read the JSON file
const jsonData = fs.readFileSync('colleges.json', 'utf8');

// Parse the JSON data
const colleges = JSON.parse(jsonData);



function search() {
  for (let i = 0; i < colleges.length; i++){
    var div = document.createElement("div");
    div.style.width = "100vw";
div.style.height = "1000px";
div.style.background = "rgb(38, 38, 38)";
div.style.color = "white";
div.innerHTML = "Hello";
document.body.appendChild(div)
  }
}