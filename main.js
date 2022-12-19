const elMain = document.querySelector(".main-wrap"),
  elArticle = document.querySelectorAll("article"),
  elSec = document.querySelectorAll("section"),
  elHeight = [];
let moveHeight = 0;
let moveWidth = 0;
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
    moveHeight = elSec[key].nextElementSibling.offsetTop;
    console.log(elSec[key].clientHeight, "높이");
    console.log(moveHeight);
    elMain.style = `transform: translate(-${moveWidth}px,-${moveHeight}px);`;
  } else {
    moveHeight = elSec[key].previousElementSibling.offsetTop;
    console.log(moveHeight);
    elMain.style = `transform : translate(-${moveWidth}px,-${moveHeight}px);`;
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
    moveWidth = elArticle[key].previousElementSibling.offsetLeft;
    console.log(key);
    console.log(moveWidth, "1");
    elMain.style = `transform: translate(-${moveWidth}px,-${moveHeight}px);`;
  } else if (start > end) {
    moveWidth = elArticle[key].nextElementSibling.offsetLeft;
    console.log(key);
    console.log(moveWidth, "2");
    elMain.style = `transform: translate(-${moveWidth}px,-${moveHeight}px);`;
  }
  // return;
  console.log("sta");
  // event.preventDefault();
  console.log("end");
  // }
}
    elMain.style = `transform: translate(-1920px, -937px);`;