//easter egg: email me how comments are different in javascript 
//than in html.  What are they like in CSS?


//Comments in HTML are used by applying the <!-- sign and a closing --> sign.
//


var maxZ = 1000;   // Global var: initial z-index of shape that gets clicked
var maxX = 600;
var maxY = 200;
//This function gets called once when the page loads as it implies
//here we will do our button initializiation and add all our initial
//elements
window.onload = function() {
  var breakWebsite = document.getElementById("break");
  breakWebsite.onclick = breakW;
  var addS = document.getElementById("addS");
  addS.onclick = addSquare;
  var removeS = document.getElementById("removeS");
  removeS.onclick = removeSquare;
  var addC = document.getElementById("addC");
  addC.onclick = addCircle;
  var removeC = document.getElementById("removeC");
  removeC.onclick = removeCircle;
  var addR = document.getElementById("addR");
  addR.onclick = addSasuke;
  var killS = document.getElementById("killS");
  killS.onclick = killS;
  var addN = document.getElementById("addN");
  addN.onclick = addNaruto;
  var killN = document.getElementById("killN");
  killN.onclick = killN;
  var colors = document.getElementById("colors");
  colors.onclick = changeColors;
  var clear = document.getElementById("clear");
  clear.onclick = clearShapes;
  
  // create several randomly positioned squares
  /*easter egg: Tell me which number determines the range and 
  which determines the minimum value (the floor) and why*/
  var elementsCount = parseInt(Math.random() * 22) + 115;
  for (var i = 0; i < elementsCount; i++) {
  	   var randWidth = parseInt(Math.random() * 12) + 12;
  	   var randHeight = parseInt(Math.random() * 13) + 50;
    addElems(randWidth, randHeight);
  }
};

function addLotsElems(randW, randH) {
  var locPosX = 1000;
  var locPosY = 1000;

  var square = document.createElement("div");
  square.className = "square";
  square.style.left = parseInt(Math.random() * locPosX) + "px";
  square.style.top = parseInt(Math.random() * locPosY) + "px";
  square.style.backgroundColor = getRandomColor();
  square.style.width = randW;
  square.style.height = randH;
  square.onclick = squareClick;

  var elementArea = document.getElementById("breakB");
  elementArea.appendChild(square);

  var circle = document.createElement("div");
  circle.className = "circle";
  //target the usually css defined properties, so we give it a string 342px or something
  circle.style.left = parseInt(Math.random() * locPosX)+ "px";
  circle.style.top = parseInt(Math.random() * locPosY) + "px";
  circle.style.backgroundColor = getRandomColor();
  circle.style.width = randW;
  circle.style.height = randH;
  circle.onclick = squareClick;

  var elementArea = document.getElementById("breakB");
  elementArea.appendChild(circle);

  var naruto = document.createElement("div");
  naruto.className = "naruto";
  //naruto.style.left = parseInt(Math.random() * locPosX) + "px";
  //naruto.style.top = parseInt(Math.random() * locPosY) + "px";
  //naruto.style.backgroundColor = getRandomColor();
  naruto.style.width = randW;
  naruto.style.height = randH;
  naruto.onclick = show;

  var elementArea = document.getElementById("breakB");
  elementArea.appendChild(naruto);

  var sasuke = document.createElement("div");
  sasuke.className = "sasuke";
  //sasuke.style.left = parseInt(Math.random() * locPosX) + "px";
  //sasuke.style.top = parseInt(Math.random() * locPosY) + "px";
  //sasuke.style.backgroundColor = getRandomColor();
  sasuke.style.width = randW;
  sasuke.style.height = randH;
  sasuke.onclick = showS;

  var elementArea = document.getElementById("breakB");
  elementArea.appendChild(sasuke);
}

// Creates and adds a new square div to the page.


function addElems(randW, randH) {
  var square = document.createElement("div");
  square.className = "square";
  square.style.left = parseInt(Math.random() * maxX) + "px";
  square.style.top = parseInt(Math.random() * maxY) + "px";
  square.style.backgroundColor = getRandomColor();
  square.style.width = randW;
  square.style.height = randH;
  square.onclick = squareClick;

  var elementArea = document.getElementById("elementarea");
  elementArea.appendChild(square);

  var circle = document.createElement("div");
  circle.className = "circle";
  //target the usually css defined properties, so we give it a string 342px or something
  circle.style.left = parseInt(Math.random() * maxX)+ "px";
  circle.style.top = parseInt(Math.random() * maxY) + "px";
  circle.style.backgroundColor = getRandomColor();
  circle.style.width = randW;
  circle.style.height = randH;
  circle.onclick = squareClick;

  var elementArea = document.getElementById("elementarea");
  elementArea.appendChild(circle);

  var naruto = document.createElement("div");
  naruto.className = "naruto";
  //target the usually css defined properties, so we give it a string 342px or something
  naruto.style.left = parseInt(Math.random() * maxX)+ "px";
  naruto.style.top = parseInt(Math.random() * maxY) + "px";
  naruto.style.backgroundColor = getRandomColor();
  naruto.style.width = randW;
  naruto.style.height = randH;
  naruto.onclick = show;

  var elementArea = document.getElementById("elementarea");
  elementArea.appendChild(naruto);

  var sasuke = document.createElement("div");
  sasuke.className = "sasuke";
  //target the usually css defined properties, so we give it a string 342px or something
  sasuke.style.left = parseInt(Math.random() * maxX)+ "px";
  sasuke.style.top = parseInt(Math.random() * maxY) + "px";
  sasuke.style.backgroundColor = getRandomColor();
  sasuke.style.width = randW;
  sasuke.style.height = randH;
  sasuke.onclick = showS;

  var elementArea = document.getElementById("elementarea");
  elementArea.appendChild(sasuke);
}

function breakW() {
	var elementsCount = 10000;
	for (var i = 0; i < elementsCount; i++) {
  	   var randWidth = parseInt(Math.random() * 40) + 100;
  	   var randHeight = parseInt(Math.random() * 40) + 50;
    addLotsElems(randWidth, randHeight);
  }
}
// Gives a new randomly chosen color to every element on the page.
function changeColors() {
  var elementArea = document.getElementById("elementarea");
  var elements = elementArea.getElementsByTagName("div");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = getRandomColor();
  }
}

// Gives a new randomly chosen color to every square on the page.
function changeSquareColors() {
  var elementArea = document.getElementById("elementarea");
  var elements = elementArea.getElementsByTagName("div");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = getRandomColor();
  }
}

// Gives a new randomly chosen color to every circle on the page.
function changeCircleColors() {
  var elementArea = document.getElementById("elementarea");
  var elements = elementArea.getElementsByTagName("div");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = getRandomColor();
  }
}

function clearShapes() {
//TODO: find a way to clear all shapes inside the shape area
var elementArea = document.getElementById("elementarea");
//get all things that are divs inside the elementsarea, loop through them
var elements = elementArea.getElementsByTagName("div");
for (var i = 0; i < elements.length; i++) {
    elements[i].remove("circle","square");
    //elements[i].style.border = "white";
  }
}

//number
var numF = 5;
//string
var numT = "3";
var result = numF + numT;

// Creates and adds a new square div to the page.
function addSquare() {
  var square = document.createElement("div");
  square.className = "square";
  square.style.left = parseInt(Math.random() * 600) + "px";
  square.style.top = parseInt(Math.random() * 50) + "px";
  square.style.backgroundColor = getRandomColor();
  var randW = parseInt(Math.random() * 43) + 20;
  var randH = parseInt(Math.random() * 40) + 22;
  square.style.width = randW;
  square.style.height = randH;
  square.onclick = squareClick;

  var elementArea = document.getElementById("elementarea");
  elementArea.appendChild(square);
}

// Creates and adds a new circle div to the page.
function addCircle() {
  var circle = document.createElement("div");
  circle.className = "circle";
  circle.style.left = parseInt(Math.random() * 640) + "px";
  circle.style.top = parseInt(Math.random() * 200) + "px";
  circle.style.backgroundColor = getRandomColor();
  var randW = parseInt(Math.random() * 40) + 20;
  var randH = parseInt(Math.random() * 40) + 20;
  circle.style.width = randW;
  circle.style.height = randH;
	
  circle.onclick = squareClick;

  var elementArea = document.getElementById("elementarea");
  elementArea.appendChild(circle);
}

function addNaruto() {
  var naruto = document.createElement("div");
  naruto.className = "naruto";
  //naruto.style.left = parseInt(Math.random() * 650) + "px";
  //naruto.style.top = parseInt(Math.random() * 250) + "px";
  //naruto.style.backgroundColor = getRandomColor();
  //var randW = parseInt(Math.random() * 40) + 20;
  //var randH = parseInt(Math.random() * 40) + 20;
  //naruto.style.width = randW;
  //naruto.style.height = randH;
  
  naruto.onclick = show;

  var elementArea = document.getElementById("addN");
  elementArea.appendChild(naruto);
}

function addSasuke() {
  var sasuke = document.createElement("div");
  sasuke.className = "sasuke";
  //sasuke.style.left = parseInt(Math.random() * 650) + "px";
  //sasuke.style.top = parseInt(Math.random() * 250) + "px";
  //sasuke.style.backgroundColor = getRandomColor();
  //var randW = parseInt(Math.random() * 40) + 20;
  //var randH = parseInt(Math.random() * 40) + 20;
  //sasuke.style.width = randW;
  //sasuke.style.height = randH;
  
  sasuke.onclick = showS;

  var elementArea = document.getElementById("addR");
  elementArea.appendChild(sasuke);
}
function removeSquare() {
  var elementArea = document.getElementById("elementarea");
  var elements = elementArea.getElementsByTagName("div");
  var randS = elements[elements.length-1];
  randS.remove();
}

function removeCircle() {
  var elementArea = document.getElementById("elementarea");
  var elements = elementArea.getElementsByTagName("div");
  var randC = elements[elements.length-1];
  randC.remove();
}

function killS() {
  var elementArea = document.getElementByClass("sasuke");
  var elements = elementArea.getElementsByTagName("div");
  var randM = elements[elements.length-1];
  randM.remove();
}

function killN() {
  var elementArea = document.getElementByClass("naruto");
  var elements = elementArea.getElementsByTagName("div");
  var randN = elements[elements.length-1];
  randN.remove();
}

// Generates and returns a random color string such as "#f08a7c".
function getRandomColor() {
  var letters = "0123456789abcdef";
  var result = "#";
  for (var i = 0; i < 6; i++) {
    result += letters.charAt(parseInt(Math.random() * letters.length));

  }
  return result;
}

// Called when a square is clicked; moves it to the top or removes it.
function squareClick() {
  var oldZ = parseInt(this.style.zIndex);
  if (oldZ == maxZ) {
    this.parentNode.removeChild(this);   // square is on top; remove it
  } else {
    maxZ++;
    this.style.zIndex = maxZ;
  }

}
 function show() {
  //document.getElementById('addR').remove('addR');
  document.getElementById('addN').style.maxHeight = "200px";
  var images = document.querySelectorAll("#addN img");
  for(var i = 0; i < images.length; i++)
  {
    images[i].src = images[i].getAttribute('data-src');
  }
}
 function showS() {
  //document.getElementById('addN').remove('addN');
  document.getElementById('addR').style.maxHeight = "200px";
  var images = document.querySelectorAll("#addR img");
  for(var i = 0; i < images.length; i++)
  {
    images[i].src = images[i].getAttribute('data-src');
  }
}
