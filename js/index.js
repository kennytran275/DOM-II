// Your code goes here

// logo heading
const logoHeading = document.querySelector(".logo-heading");

logoHeading.addEventListener("mouseover", function (event) {
  event.target.style.backgroundColor = "blue";
});

logoHeading.addEventListener("mouseout", function (event) {
  event.target.style.backgroundColor = "white";
});

// intro image
const introImg = document.querySelector("img");

introImg.addEventListener("dblclick", function (event) {
  event.target.style.border = "thick dotted purple";
});

// paragraphs
const allPara = document.querySelectorAll("p");

for (let i = 0; i < allPara.length; i++) {
  allPara[i].addEventListener("mouseenter", function (event) {
    event.target.style.color = "red";
  });

  allPara[i].addEventListener("mouseleave", function (event) {
    event.target.style.color = "green";
  });
}

// document
document.addEventListener("keydown", function (event) {
  event.target.style.backgroundColor = "gray";
});

document.addEventListener("keyup", function (event) {
  event.target.style.backgroundColor = "pink";
});

// images
const images = document.querySelectorAll("img");

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function (event) {
    event.target.style.border = "thick solid magenta";
  });
}

// h2 titles
const h2Titles = document.querySelectorAll("h2");

for (let i = 0; i < h2Titles.length; i++) {
  h2Titles[i].addEventListener("pointerenter", function (event) {
    event.target.style.fontWeight = "bold";
  });

  h2Titles[i].addEventListener("pointerleave", function (event) {
    event.target.style.fontWeight = "normal";
  });
}
