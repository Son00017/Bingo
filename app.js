const formEl = document.querySelector("form");
let title = document.querySelector(".card-title");
let img = document.querySelector(".card-img-top");
let desc = document.querySelector(".card-desc");
let chois = document.querySelector(".chois-t");
let card = document.querySelector(".card");
let btn = document.querySelector("#btn");
card.style.display = "none";
let x = Math.random() * 10 + 1;
x = Math.floor(x);
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let son = formEl.son.value;

  if (son == x) {
    img.src =
      "https://www.shutterstock.com/image-illustration/happy-smiley-emoticon-holding-trophy-260nw-231385519.jpg";
    title.textContent = "Winner winner chickin dinner";
    card.style.display = "block";
    formEl.style.display = "none";
  } else if (son !== x) {
    img.src =
      "https://media.istockphoto.com/id/513745794/vector/pensive-emoticon.jpg?s=612x612&w=0&k=20&c=F-6_1EU5hM4aXo3G1_FaAbDuRQPG32lvNZyfvK9TI30=";
    title.textContent = "You Lost";
    card.style.display = "block";
    formEl.style.display = "none";

    i += 1;
    chois.textContent = y;
    if (son > x) {
      desc.textContent = "Bir oz kichkina";
    } else if (son < x) {
      desc.textContent = "Bir oz katta";
    }
  }
});
