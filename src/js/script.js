const btn = Array.from(document.querySelectorAll(".btn"));
const btnArrows = Array.from(document.querySelectorAll(".btn-arrow svg"));
const btnSignup = document.querySelector(".btn.btn-signup");
const btnSigin = document.querySelector(".btn.btn-signin");
const nav = document.getElementsByTagName("nav")[0];
const navHam = document.getElementById("nav-menu-btn");
const liveChat = document.getElementById("live-chat");

btnSignup.addEventListener("click", (e) => {
  location.href = "./signin-and-signup.html?signup";
});
btnSigin.addEventListener("click", () => {
  location.href = "./signin-and-signup.html?signin";
});

btn.forEach((btn, i) => {
  btn.addEventListener("mouseenter", () => {
    btnArrows[i].style.animation = "arrowIn .3s";
  });
  btn.addEventListener("mouseleave", () => {
    btnArrows[i].style.animation = "arrowOut .3s";
  });
});

// nav
navHam.addEventListener("click", () => {
  const navChilds = Array.from(navHam.children);
  for (let i = 0; i < 3; i++) {
    navChilds[i].classList.toggle("show");
  }

  if (navChilds[0].classList.contains("show")) {
    nav.style.visibility = "visible";
    nav.style.pointerEvents = "initial";
    nav.style.opacity = 1;
    nav.style.transition = "all 0.5s";
    btnSignup.style.display = "flex";
    btnSignup.style.width = "100%";
    btnSigin.style.display = "flex";
    btnSigin.style.width = "100%";
    nav.appendChild(btnSignup);
    nav.appendChild(btnSigin);
  } else {
    nav.style.visibility = "hidden";
    nav.style.pointerEvents = "none";
    nav.style.opacity = 0;
  }
});

// if (donateFrequency && donateFrequency.checked) {
//   console.log("hao");
// }

// business faq
const faQuestions = document.querySelectorAll(".faq-question");
if (faQuestions) {
  faQuestions.forEach((question, i) => {
    question.addEventListener("click", () => {
      const faqTitles = document.querySelectorAll(".faq-question span");
      const faqDescs = document.querySelectorAll(".faq-question-description");
      faqDescs[i].classList.toggle("show");
      faqTitles[i].classList.toggle("show");
    });
  });
}

function idleTime() {
  let time;
  window.onload = resetTimer;
  // DOM Events
  document.onmousemove = resetTimer;
  document.onkeydown = resetTimer;

  function offline() {
    document.querySelector("link[rel='icon']").href =
      "./images/favicon-gray.svg";
  }

  function resetTimer() {
    clearTimeout(time);
    document.querySelector("link[rel='icon']").href =
      "https://gist.githubusercontent.com/faustabmnyh/070481fe272d83fc3cc0cd704121a794/raw/57206938ceff043b93641ae552f23d3e1bcb950f/favicon.svg";
    time = setTimeout(offline, 1200000);
  }
}

idleTime();

// payment method

const donateLists = document.querySelectorAll(".donate-list");
const paymentMethod = document.querySelector(".payment-method");
const paymentMethodClose = document.querySelector(".payment-method-close");

donateLists.forEach((list) => {
  list.addEventListener("click", () => {
    donateLists.forEach((donateList) => {
      if (donateList.classList.contains("active")) {
        donateList.classList.remove("active");
      }
    });
    list.classList.add("active");
  });
  document.querySelector(".donate-now-button").addEventListener("click", () => {
    if (list.classList.contains("active")) {
      paymentMethod.classList.add("show");

      const script = document.createElement("script");
      script.src = "//js.hsforms.net/forms/shell.js";
      document.body.appendChild(script);

      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            region: "na1",
            portalId: "20480110",
            formId: "1f3d7986-f567-4b59-9247-422dc5c2aacb",
            target: ".payment-method-body",
          });
        }
      };
    }
  });
});

paymentMethodClose.addEventListener("click", () => {
  paymentMethod.classList.remove("show");
});

// const paymentMethodPayments = document.querySelectorAll(
//   ".payment-method-body-payment"
// );

// const btnPaymentContinue = document.getElementById("payment-btn-continue");

// paymentMethodPayments.forEach((payment) => {
//   payment.addEventListener("click", function () {
//     paymentMethodPayments.forEach((allPayment) => {
//       if (allPayment.classList.contains("active")) {
//         allPayment.classList.remove("active");
//       }
//       this.classList.add("active");
//     });
//   });

//   btnPaymentContinue.addEventListener("click", () => {
//     if (payment.classList.contains("active")) {
//       const paymentMethodHeaderText = document.querySelector(
//         ".payment-method-header h4"
//       );
//       const paymentMethodInput = document.querySelector(
//         ".payment-method-input"
//       );
//       const paymentMethodOption = document.querySelector(
//         ".payment-method-input-option"
//       );
//       paymentMethodInput.style.display = "unset";
//       paymentMethodOption.style.display = "none";
//       if (payment.id === "bkash-payment") {
//         paymentMethodHeaderText.innerHTML =
//           "Bkash Send Money 01631522059, 01812657580";
//       }
//       if (payment.id === "nagad-payment") {
//         paymentMethodHeaderText.innerHTML = "Nagad Send Money No: 01631522059";
//       }
//     }
//   });
// });
