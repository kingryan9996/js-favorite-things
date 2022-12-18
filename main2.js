const elMain = document.querySelector(".main-wrap");
const elArticle = document.querySelector("article");
const elSec = document.querySelectorAll("section");
const elId = document.getElementById("test");
const elHeight = [];

let move = 0;
console.log(elId.clientHeight);
elMain.addEventListener("wheel", (event) => {
  play(event);
});
//마우스휠 : 업다운

function play(event) {
  move = elId.clientHeight;
  if (event.wheelDelta < 0) {
    elArticle.style = `transform: translateY(-${move}px);`;
    console.log(move);
  } else {
    elArticle.style = `transform : translateY(-${move}px);`;
    console.log(move);
  }
  move += move;
}
