const inputArea = document.querySelector(".large-area--input");
const outputArea = document.querySelector(".large-area--output");
const btnFormat = document.querySelector(".controls__button--format");
const btnMinify = document.querySelector(".controls__button--minify");

btnFormat.addEventListener("click", () => {
  const formatted = JSON.stringify(JSON.parse(inputArea.value), null, 4);

  outputArea.value = formatted;
});

btnMinify.addEventListener("click", () => {
  const minified = JSON.stringify(JSON.parse(inputArea.value));

  outputArea.value = minified;
});

// function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
