const resetButton = document.getElementById("btn-reset");
const resetPasswordBtn = document.getElementById("reset-password");
const container = document.getElementById("container");
const formContainer = document.querySelectorAll(".form-container");
const signUpContainer = formContainer[0];
const signInContainer = formContainer[1];
const emailContainer = formContainer[4];
const resetPasswordEmailContainer = formContainer[2];
const overlayContainer = document.querySelector(".overlay-container");
const overlayPanel = document.querySelector(".overlay-panel");
const overlay = document.querySelector(".overlay");
const showPasswords = document.querySelectorAll(".show-password");
const hidePasswords = document.querySelectorAll(".hide-password");
const getBody = document.getElementsByTagName("body");
// const loading = document.querySelectorAll(".loading");

// loading
const loading = document.querySelector(".loading-container");
const loadingProgressBar = document.querySelector(".loading-progress-bar");
const loadingTextPercent = document.querySelector(".loading-percent");

console.log(formContainer);

/**
 * list of formContainer
 * 0: signup
 * 1: signin
 * 2: reset-password-container-email or reset email input
 * 3: reset password
 * 4: email container
 */

// baseURL for backend
// const baseURL = "https://genius-park-stag.herokuapp.com";
const baseURL = "https://backendsparkle.herokuapp.com";

const signUpButton = document.getElementById("signUp");
signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
  resetPasswordEmailContainer.classList.remove("show");
  emailContainer.classList.remove("reset");
  emailContainer.classList.remove("reset-password");
  showAgain();
});

const signInButton = document.getElementById("signIn");
signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
  emailContainer.classList.remove("show");
  showAgain();
});

// mobile transition
const signUpButtonMobile = document.getElementById("signUp-mobile");
signUpButtonMobile.addEventListener("click", (e) => {
  e.preventDefault();
  containerTransition(signUpContainer, signInContainer, "signup");
});

const signInButtonMobile = document.getElementById("signIn-mobile");
signInButtonMobile.addEventListener("click", (e) => {
  e.preventDefault();
  containerTransition(signInContainer, signUpContainer, "signin");
});

function containerTransition(containerIn, containerOut, type) {
  containerIn.style.top = type === "signin" ? "-50%" : "50%";
  containerIn.style.transform =
    type === "signin" ? "translateY(50%)" : "translateY(-50%)";
  containerOut.style.top = type === "signin" ? "-100%" : "100%";
}

// login
const signInButtonMain = document.getElementById("sign-in-btn");
let signInEmail, signInPassword;
signInButtonMain.addEventListener("click", async function (e) {
  e.preventDefault();
  signInEmail = document.getElementById("sign-in-email").value;
  signInPassword = document.getElementById("sign-in-password").value;
  // const signInEmailInputContainer = document.getElementById(
  //   "sign-in-input-email"
  // );
  // const signInEmailInputTextErr = document.getElementById(
  //   "sign-in-email-error"
  // );
  // const signInPasswordInputContainer = document.getElementById(
  //   "sign-in-input-password"
  // );
  // const signInPasswordInputTextErr = document.getElementById(
  //   "sign-in-password-error"
  // );
  // const { valid, errors } = validateLoginInput(signInEmail, signInPassword);
  try {
    // loading.classList.add("show");
    // progressBar();
    this.innerHTML = `
      <div class="loading-text">
      Loading
      <span class="loading-dot"></span>
      <span class="loading-dot"></span>
      <span class="loading-dot"></span>
    </div>`;
    this.style.cursor = "default";
    // loading[0].classList.add("show");
    console.log(signInEmail, signInPassword);
    const { data } = await axios.post(`${baseURL}/api/auth/login`, {
      username: signInEmail,
      password: signInPassword,
    });
    console.log("result>>>", data);
    localStorage.setItem("user", JSON.stringify(data));
    location.href = "https://is.geniusparkle.com/";
    localStorage.setItem("user", JSON.stringify(data));
    // } else {
    //   if (errors.email) {
    //     signInEmailInputContainer.classList.add("error");
    //     signInEmailInputTextErr.innerHTML = errors.email;
    //   } else {
    //     signInEmailInputContainer.classList.remove("error");
    //     signInEmailInputTextErr.innerHTML = "";
    //   }
    //   if (errors.password) {
    //     signInPasswordInputContainer.classList.add("error");
    //     signInPasswordInputTextErr.innerHTML = errors.password;
    //   } else {
    //     signInPasswordInputContainer.classList.remove("error");
    //     signInPasswordInputTextErr.innerHTML = "";
    //   }
    // }
  } catch (err) {
    console.log(err.response.data);
    loadingCompleted();
    // let errMessageFromServer = err.response.data.msg;
    // if (errMessageFromServer.split(" ")[1] === "email!") {
    //   signInPasswordInputContainer.classList.remove("error");
    //   signInEmailInputContainer.classList.add("error");
    //   signInPasswordInputTextErr.innerHTML = "";
    //   signInEmailInputTextErr.innerHTML = errMessageFromServer;
    // } else {
    //   signInEmailInputContainer.classList.remove("error");
    //   signInPasswordInputContainer.classList.add("error");
    //   signInEmailInputTextErr.innerHTML = "";
    //   signInPasswordInputTextErr.innerHTML = errMessageFromServer;
    // }
    return err;
  }
});

// register
// const birthDate = document.getElementById("birth-date");
const signUpButtonMain = document.getElementById("sign-up-btn");
const signUpContinueBtn = document.getElementById("sign-up-next-btn");
const indentifyUser = document.getElementById("gender");
const birthMonth = document.getElementById("birth-month");
const birthYear = document.getElementById("birth-year");
const birthDay = document.getElementById("birth-day");
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let signUpName, signUpEmail;
const passwordInput = document.getElementById("sign-up-password");
// for error password
// passwordInput.addEventListener("focus", () => {
//   document
//     .getElementById("password-show-error-signup")
//     .classList.add("show");
// });

let signUpPassword;
// check live password
passwordInput.addEventListener("keyup", (e) => {
  if (e.target.value.length <= 20) {
    signUpPassword = validatePassword(e.target.value, "signup", e.key);
  } else {
    document.getElementById("password-show-error-signup").classList.add("show");
    e.target.value = signUpPassword.value;
  }
});

/**
 * NOTE FOR PASSWORD
 * -- for showing the checklish
 * if you want to show checklis for the requirement password
 * you can do with get this id "password-input-checked-tick"
 * after that you can give the class show to show it.
 * -- for hide the cross
 * after showing the checklish if you want to delete the
 * cross you can do with get this id "password-input-checked-cross"
 * and add class hide for hide this
 *  */

signUpButtonMain.addEventListener("click", async function (e) {
  e.preventDefault();
  signUpName = document.getElementById("sign-up-name").value;
  signUpEmail = document.getElementById("sign-up-email").value;
  const signUpPasswordValue = document.getElementById("sign-up-password").value;
  // signUpPassword = document.getElementById("sign-up-password").value;
  const { valid, errors } = validateRegisterInput(
    signUpName,
    signUpEmail,
    signUpPasswordValue
  );

  try {
    // loading.classList.add("show");
    // progressBar(0);
    this.innerHTML = `
      <div class="loading-text">
      Loading
      <span class="loading-dot"></span>
      <span class="loading-dot"></span>
      <span class="loading-dot"></span>
    </div>`;
    this.style.cursor = "default";
    // move to next input for input gender and birth day
    const { data } = await axios.post(`${baseURL}/api/auth/signup`, {
      name: signUpName,
      username: signUpEmail,
      password: signUpPasswordValue,
    });
    console.log(data);
    location.href = "/src/signin-and-signup.html?signin";
    if (data.ok) {
      // loadingCompleted();

      console.log("the data", data);
      emailContainer.classList.add("show");
    }
    // document.querySelector(".sign-up-next-container").classList.add("show");
    // } else {
    //   // showing the error
    //   if (errors.name) {
    //     document.getElementById("sign-up-input-name").classList.add("error");
    //     document.getElementById("sign-up-name-error").innerHTML = errors.name;
    //   } else {
    //     document.getElementById("sign-up-input-name").classList.remove("error");
    //     document.getElementById("sign-up-name-error").innerHTML = "";
    //   }
    //   if (errors.email) {
    //     document.getElementById("sign-up-input-email").classList.add("error");
    //     document.getElementById("sign-up-email-error").innerHTML = errors.email;
    //   } else {
    //     document
    //       .getElementById("sign-up-input-email")
    //       .classList.remove("error");
    //     document.getElementById("sign-up-email-error").innerHTML = "";
    //   }
    //   if (errors.password) {
    //     document
    //       .getElementById("sign-up-input-password")
    //       .classList.add("error");
    //     document.getElementById("sign-up-password-error").innerHTML =
    //       errors.password;
    //   } else {
    //     document
    //       .getElementById("sign-up-input-password")
    //       .classList.remove("error");
    //     document.getElementById("sign-up-password-error").innerHTML = "";
    //   }
    // }
  } catch (err) {
    console.log(err.response.data);
    loadingCompleted();
    if (err.response.data.error) {
      document.getElementById("sign-up-input-email").classList.add("error");
      document.getElementById("sign-up-email-error").innerHTML =
        err.response.data.error;
      document
        .querySelector(".sign-up-next-container")
        .classList.remove("show");
    }
    document.getElementById("sign-up-input-password").classList.remove("error");
    document.getElementById("sign-up-password-error").innerHTML = "";
    document.getElementById("sign-up-input-name").classList.remove("error");
    document.getElementById("sign-up-name-error").innerHTML = "";
    return err;
  }
});
// reset password

/**
 * NOTE
 * for get the reset input box you just have to
 * get this class "reset-password-container" and then add class show for it
 */

resetPasswordBtn.addEventListener("click", () => {
  resetPasswordEmailContainer.classList.add("show");

  emailContainer.classList.add("reset-password");
});

// reset input password
const resetPasswordInput = document.getElementById("reset-input-password");
let resetPassword;

resetPasswordInput.addEventListener("keyup", (e) => {
  if (e.target.value.length <= 20) {
    resetPassword = validatePassword(e.target.value, "reset", e.key);
  } else {
    document.getElementById("password-show-error-reset").classList.add("show");
    e.target.value = resetPassword.value;
  }
});

// reset send email first
resetButton.addEventListener("click", async function () {
  const resetEmailInput =
    resetButton.previousElementSibling.previousElementSibling.childNodes[3]
      .value;
  const resetInputContainer = resetPasswordEmailContainer.childNodes[3];
  const resetTextError = resetPasswordEmailContainer.childNodes[5];

  // check if user input empty input or wrong email
  if (resetEmailInput.trim() === "") {
    resetInputContainer.classList.add("error");
    resetTextError.innerHTML = "Email should not to be empty";
    return false;
  } else {
    const regEx =
      /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!resetEmailInput.match(regEx)) {
      resetInputContainer.classList.add("error");
      resetTextError.innerHTML = "Email must be valid email addressed";
      return false;
    }
  }

  try {
    // loading.classList.add("show");
    // progressBar(0);
    this.innerHTML = `
    <div class="loading-text">
    Loading
    <span class="loading-dot"></span>
    <span class="loading-dot"></span>
    <span class="loading-dot"></span>
  </div>`;
    this.style.cursor = "default";
    const res = await axios.post(`${baseURL}/api/mail/resetPass`, {
      email: resetEmailInput,
    });
    if (res.data.ok) {
      emailContainer.classList.add("reset");
      // loadingCompleted();
    }
    console.log(res);
  } catch (err) {
    loadingCompleted();
    // get span input text error to show error text for input reset email error
    resetInputContainer.classList.add("error");
    resetTextError.innerHTML = err.response.data.error;
    return err;
  }
});

////////////

addEventListener("load", () => {
  if (location.search.substr(1) === "signup") {
    // console.log("hai");
    if (window.innerWidth > 768) {
      overlayPanel.style.transition = "none";
      overlay.style.transition = "none";
      formContainer[0].style.transition = "none";
      overlayContainer.style.transition = "none";
      container.classList.add("right-panel-active");
    } else {
      containerTransition(signUpContainer, signInContainer, "signup");
    }
  }
  setTimeout(() => {
    container.style.display = "initial";
  }, 100);
});

function showAgain() {
  formContainer[0].style.transition = "all 0.6s ease-in-out";
  overlay.style.transition = "transform  0.6s ease-in-out";
  overlayContainer.style.transition = "transform  0.6s ease-in-out";
  overlayPanel.style.transition = "transform  0.6s ease-in-out";
}

// show password
const inputPassword = document.querySelectorAll("input[type=password]");
showPasswords.forEach((showPassword, i) => {
  showPassword.addEventListener("click", () => {
    showPassword.classList.remove("hide");
    hidePasswords[i].classList.add("show");
    inputPassword[i].type = "text";
  });
});

hidePasswords.forEach((hidePassword, i) => {
  hidePassword.addEventListener("click", () => {
    hidePassword.classList.remove("show");
    showPasswords[i].classList.add("hide");
    inputPassword[i].type = "password";
  });
});

// get age
// function getAge(date) {
//   const today = new Date();
//   const birthDate = new Date(date);
//   let age = today.getFullYear() - birthDate.getFullYear();
//   const month = today.getMonth() - birthDate.getMonth();
//   if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
//     age--;
//   }
//   return age;
// }

// loading
let id;
let width = 0;
function progressBar() {
  resetProgressBar();
  id = setInterval(frame, 100);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      loadingTextPercent.innerHTML = `${width}%`;
      loadingProgressBar.style.width = `${width}%`;
    }
  }
}

function resetProgressBar() {
  width = 0;
  loadingTextPercent.innerHTML = `${width}%`;
  loadingProgressBar.style.width = `${width}%`;
}

function loadingCompleted() {
  console.log("loading completed");
  // clearInterval(id);
  // loadingTextPercent.innerHTML = "100%";
  // loadingProgressBar.style.width = "100%";
  // setTimeout(() => {
  //   loading.classList.remove("show");
  // }, 500);
}
