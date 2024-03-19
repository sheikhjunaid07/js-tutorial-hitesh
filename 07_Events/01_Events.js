//old and incorrect way
// document.getElementById("owl").onclick = function(){
//   alert("owl is clicked!!")
// }

//new and standard way
document.getElementById("owl").addEventListener("click",() => {
    console.log("owl is clicked");
  },false);

document.getElementById("images").addEventListener("click",() => {
    console.log("images is clicked");
  },false);

//example of remove element using events
document.querySelector("#images").addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    let removeImage = e.target.parentNode;
    removeImage.remove();
  }
});
