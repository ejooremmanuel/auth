const planTime = document.querySelector(".pricing-model-btn input");
const btnPlan = document.querySelector(".pricing-model-btn");

btnPlan.addEventListener("change", () => {
  pricingCards.forEach((pc, i) => {
    if (planTime.checked) {
      document.querySelectorAll(".pricing-card .price")[
        i
      ].innerHTML = `$${pc.dataset.yearlyPrice}/yr`;
    } else {
      document.querySelectorAll(".pricing-card .price")[
        i
      ].innerHTML = `$${pc.dataset.monthlyPrice}/mo`;
    }
  });

  changeDedicatedOption(planTime.checked);
});

function changeDedicatedOption(checked) {
  const pricingCards = document.querySelectorAll(".pricing-card");
  const decicatedValue =
    pricingCards[1].childNodes[3].childNodes[
      pricingCards[1].childNodes[3].childNodes.length - 2
    ].childNodes[0];
  const decicatedPro =
    pricingCards[2].childNodes[3].childNodes[
      pricingCards[1].childNodes[3].childNodes.length - 2
    ].childNodes[0];

  if (checked) {
    decicatedValue.classList.remove("cross-mark");
    decicatedValue.classList.add("tick-mark");
    decicatedPro.classList.remove("cross-mark");
    decicatedPro.classList.add("tick-mark");
  } else {
    decicatedValue.classList.add("cross-mark");
    decicatedValue.classList.remove("tick-mark");
    decicatedPro.classList.add("cross-mark");
    decicatedPro.classList.remove("tick-mark");
  }
}

const arrowsRight = document.querySelectorAll(".arrow.right");
const arrowsLeft = document.querySelectorAll(".arrow.left");
const pricingCards = document.querySelectorAll(".pricing-card");

if (window.innerWidth < 1200) {
  arrowsRight.forEach((e, i) => {
    e.addEventListener("click", () => {
      pricingCards[i].style.display = "none";
      pricingCards[i + 1].style.display = "unset";
    });
  });
  arrowsLeft.forEach((e, i) => {
    e.addEventListener("click", () => {
      pricingCards[i + 1].style.display = "none";
      pricingCards[i].style.display = "unset";
    });
  });
}

// redirect user for checkout

// note* for this link is just for development not production

let getURL = window.location.search.substr(1);
let getToken = window.location.search.split("=")[1];

document.querySelector(".btn.premium-price").addEventListener("click", () => {
  // do for premium price in here
  if (getURL === "upgrade") {
    window.location.href =
      "https://app.geniusparkle.com/payment?upgrade-plan";
  } else {
    if (getToken) {
      window.location.href = `https://app.geniusparkle.com/payment?plan=premiun-plan&token=${getToken}`;
    } else {
      window.location.href = `https://app.geniusparkle.com/signin-and-signup.html?signup`;
    }
  }
});
document.querySelector(".btn.value-price").addEventListener("click", () => {
  // do for value price in here
  if (getURL === "upgrade") {
    window.location.href =
      "https://app.geniusparkle.com/payment?upgrade-plan";
  } else {
    if (getToken) {
      window.location.href = `https://app.geniusparkle.com/payment?plan=value-plan&token=${getToken}`;
    } else {
      window.location.href = `https://app.geniusparkle.com/signin-and-signup.html?signup`;
    }
  }
});
document.querySelector(".btn.pro-price").addEventListener("click", () => {
  // do for pro price in here
  if (getURL === "upgrade") {
    window.location.href =
      "https://app.geniusparkle.com/payment?upgrade-plan";
  } else {
    if (getToken) {
      window.location.href = `https://app.geniusparkle.com/payment?plan=professional-plan&token=${getToken}`;
    } else {
      window.location.href = `https://app.geniusparkle.com/signin-and-signup.html?signup`;
    }
  }
});

document.querySelector(".btn.free-price").addEventListener("click", () => {
  // do for free price in here
  if (getURL === "upgrade") {
    window.location.href =
      "https://app.geniusparkle.com/payment?upgrade-plan";
  } else {
    if (getToken) {
      window.location.href = `https://app.geniusparkle.com/payment?plan=free-plan&token=${getToken}`;
      // window.location.href = `http://localhost:3000/payment?plan=free-plan&token=${getToken}`;
    } else {
      window.location.href = `https://app.geniusparkle.com/signin-and-signup.html?signup`;
    }
  }
});
// document.querySelector(".btn.custom-price").addEventListener("click", () => {
//   // do for custom price in here
//   if (getURL === "upgrade") {
//     window.location.href =
//       "https://app.geniusparkle.com/payment?upgrade-plan";
//   } else {
//     if (getToken) {
//       window.location.href = `https://app.geniusparkle.com/payment?free-plan&token=${getToken}`;
//     } else {
//       window.location.href = `https://app.geniusparkle.com/signin-and-signup.html?signup`;
//     }
//     window.location.href =
//       "https://app.geniusparkle.com/payment?custom-plan";
//   }
// });
