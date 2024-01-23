const myImage = document.querySelector(".surprise");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/purple_present.png") {
    myImage.setAttribute("src", "images/cute_kitty.jpg");
  } else {
    myImage.setAttribute("src", "images/purple_present.png");
  }
}; 

let myButton = document.querySelector("button");
let myBackground = document.querySelector("body");

myButton.onclick = () => {
  setBackgroundColor();
};
 
function changeColor(color) {
document.body.style.background = color;
}
 
function setBackgroundColor() {
changeColor('#5801c9');
}





