alert('Hello World');
var myButton = document.getElementById("myButton");

// myButton.addEventListener("click", () => {
//   var myElement = document.getElementById("main");
//   myElement.innerHTML = "Hello from West Seattle";
// })

myButton.addEventListener("click", function(){
  var myElement = document.getElementById("main");
  myElement.innerHTML = "Hello from West Seattle";
})