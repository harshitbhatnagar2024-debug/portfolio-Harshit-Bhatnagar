// FORM
var form = document.querySelector("form");

form.onsubmit = function(e) {
  e.preventDefault();
console.log("Form submitted");  

  var name = document.querySelector("input").value;
console.log(name);   
  var email = document.querySelectorAll("input")[1].value;
console.log(email);  
  var message = document.querySelector("textarea").value;
console.log(message);  

  if (name == "" || email == "" || message == "") {
    alert("Fill all fields");
  } else {
    alert("Message sent");
    btn.innerHTML = "Send";
  }
};


// BUTTON
var btn = document.querySelector("button");

btn.onclick = function() {
  btn.innerHTML = "Sending...";
};


// NAV (no loop reset, just simple click color)
var links = document.querySelectorAll("nav a");

links[0].onclick = function() {
  this.style.color = "#00ffe7";
};

links[1].onclick = function() {
  this.style.color = "#00ffe7";
};

links[2].onclick = function() {
  this.style.color = "#00ffe7";
};

links[3].onclick = function() {
  this.style.color = "#00ffe7";
};

links[4].onclick = function() {
  this.style.color = "#00ffe7";
};

links[5].onclick = function() {
  this.style.color = "#00ffe7";
};