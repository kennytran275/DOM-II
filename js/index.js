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

//
