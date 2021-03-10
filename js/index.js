// Your code goes here
// logo heading
const logoHeading = document.querySelector(".logo-heading");

logoHeading.addEventListener("mouseover", function (event) {
  event.target.style.backgroundColor = "blue";
});

logoHeading.addEventListener("mouseout", function (event) {
  event.target.style.backgroundColor = "white";
});

// images
const imgs = document.querySelector("img");

imgs.addEventListener("dblclick", function (event) {
  event.target.style.border = "thick dotted purple";
});

//
