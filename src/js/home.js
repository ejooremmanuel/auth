const btnJumbotron = document.querySelectorAll(".btn.jumbotron");
const logo = document.getElementById("logo");

btnJumbotron.forEach((btn) => {
  btn.addEventListener("click", () => {
    location.href = "./signin-and-signup.html?signup";
  });
});

// multiple features card animation
const multipleFeatureCards = document.querySelectorAll(
  ".multiple-features-card"
);

multipleFeatureCards.forEach((multipleFeatureCard, i) => {
  window.addEventListener("scroll", () => {
    if (multipleFeatureCard.getBoundingClientRect().top <= 200) {
      multipleFeatureCard.style.transform = `scale(0.93${i * 5})`;
      multipleFeatureCard.style.top = `calc(${
        window.innerWidth < 900 ? "7" : "10"
      }rem + ${i * 3}px)`;
      if (multipleFeatureCards.length - 1 !== i) {
        multipleFeatureCard.style.boxShadow = `0 -10px 27px 0 rgb(0 0 0 / 2%)`;
      }
    } else {
      multipleFeatureCard.style.transform = `scale(1)`;
      multipleFeatureCard.style.top = `${
        window.innerWidth < 900 ? "7" : "10"
      }rem`;
      multipleFeatureCard.style.boxShadow = `0 10px 27px 0 rgb(0 0 0 / 15%)`;
    }
  });
});

const btnStayInSchool = document.getElementById("btn-stay-in-school");

btnStayInSchool.addEventListener("click", () => {
  window.open("https://www.google.com", "_self", "");
  window.close();
});
