const scrollBtn = document.querySelector(".scroll");
const reqBlock = document.querySelector(".about-section");

scrollBtn.addEventListener("click", e => {
  e.preventDefault();

  reqBlock.scrollIntoView({ block: "center", behavior: "smooth" });
});
console.log("12345");