const elMain = document.querySelector(".main-wrap"),
  elArticle = document.querySelectorAll("article"),
  elSec = document.querySelectorAll("section"),
  elHeight = [];
let move = 0;
console.log(elArticle.length);

// const cloneEl = () => {
//   elMain.prepend(elArticle[elArticle.length - 1].cloneNode(true));
//   elMain.append(elArticle[0].cloneNode(true));
//   //   setTranslate()
// };
// cloneEl();

//마우스휠 : 업다운
elSec.forEach((section, key) => {
  elHeight.push(section.offsetTop);
  //   console.log(elHeight);
  section.addEventListener("mousewheel", function () {
    // console.log(key);
    // console.log(event.wheelDelta);
    play(key);
  });
});
//마우스휠 : 업다운
function play(key) {
  //   console.log(key);
  //   console.log(event.wheelDelta);
  //   console.log();
  if (event.wheelDelta < 0) {
    move = elSec[key].nextElementSibling.offsetTop;
    console.log(elSec[key].clientHeight, "높이");
    console.log(move);
    elMain.style = `transform: translateY(-${move}px);`;
  } else {
    move = elSec[key].previousElementSibling.offsetTop;
    console.log(move);
    elMain.style = `transform : translateY(-${move}px);`;
  }
  //   console.log(move);
}
// console.log(elArticle[0].clientWidth);
// console.log(elArticle[1].clientWidth);
// console.log(elArticle[2].clientWidth);

let start, end;

elArticle.forEach((el, key) => {
  el.addEventListener("mousedown", function () {
    start = event.pageX;
    console.log(start, "start");
  });
  el.addEventListener("mouseup", function () {
    end = event.pageX;
    console.log(end, "end");
    moveSlide(key);
  });
});

function moveSlide(key) {
  // if (key >= 0 || key < 3) {
  if (start < end) {
    move = elArticle[key].previousElementSibling.offsetLeft;
    console.log(key);
    console.log(move, "1");
    elMain.style = `transform: translateX(-${move}px);`;
  } else if (start > end) {
    move = elArticle[key].nextElementSibling.offsetLeft;
    console.log(key);
    console.log(move, "2");
    elMain.style = `transform: translateX(-${move}px);`;
  }
  // return;
  console.log("sta");
  // event.preventDefault();
  console.log("end");
  // }
}
