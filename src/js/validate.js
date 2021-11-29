// check register validation
function validateRegisterInput(name, email, password) {
  const errors = {};
  // name
  if (name.trim() === "") {
    errors.name = "Name must not be empty";
  }
  // email
  // if (email.trim() === "") {
  //   errors.email = "Email must not be empty";
  // }
  // } else {
  //   const regEx =
  //     /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
  //   if (!email.match(regEx)) {
  //     errors.email = "Email must be valid email addressed";
  //   }
  // }

  // password
  if (password === "") {
    errors.password = "Password must not be empty";
  }
  // else {
  //   const pasRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  //   if (!password.match(pasRegEx)) {
  //     errors.password =
  //       "Password must be contain at least 1 number, 1 uppercase, 1 lowercase, and 8 characters.";
  //   }
  // }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
}

// validate password
function validatePassword(password, type, key) {
  let passwordInputContainer;
  if (type === "signup") {
    passwordInputContainer = document.getElementById("sign-up-input-password");
  } else {
    passwordInputContainer = document.getElementById("reset-password-input");
  }

  let count = 0;

  // is contain lowercase
  if (/[a-z]/.test(password)) {
    count++;
  }
  if (/[a-z]{4}/.test(password)) {
    count--;
  }

  // is length more than equal 4
  if (password.length >= 4) {
    count++;
  }
  // is length more than equal 8
  if (password.length >= 8) {
    count++;
  }
  // is contain uppercase
  if (/[A-Z]{3}/.test(password)) {
    count--;
  }
  if (/[A-Z]/.test(password)) {
    count++;
  }
  // is contain number
  if (/[0-9]/.test(password)) {
    count++;
  }

  // is length more than equal 15
  if (password.length > 12) {
    count++;
  }

  // chech if have special char
  if (/(?=.*[!#$%&? "]){2}/.test(password)) {
    count++;
  }
  if (/(?=.*[!#$%&? "])/.test(password)) {
    count++;
  }

  if (key === "Backspace" || key === "Delete") {
    if (!/[a-z]/.test(password)) {
      count--;
    }

    if (password.length < 4) {
      count--;
    }
    if (password.length < 8) {
      count--;
    }

    if (!/[a-z]{4}/.test(password)) {
      count++;
    }

    if (!/[A-Z]{3}/.test(password)) {
      count++;
    }

    if (!/(?=.*[!#$%&? "]){2}/.test(password)) {
      count--;
    }

    if (!/[A-Z]/.test(password)) {
      count--;
    }
    if (!/[0-9]/.test(password)) {
      count--;
    }

    if (password.length < 15) {
      count--;
    }

    if (!/(?=.*[!#$%&? "])/.test(password)) {
      count--;
    }
  }

  if (count <= 1) {
    passwordInputContainer.classList.add("weak");
    passwordInputContainer.classList.remove("weakTwo");
    passwordInputContainer.classList.remove("weakThree");
    passwordInputContainer.classList.remove("medium");
    passwordInputContainer.classList.remove("mediumTwo");
    passwordInputContainer.classList.remove("strong");
    passwordInputContainer.classList.remove("perfect");
  }
  if (count > 1) {
    passwordInputContainer.classList.add("weakTwo");
    passwordInputContainer.classList.remove("weakThree");
    passwordInputContainer.classList.remove("medium");
    passwordInputContainer.classList.remove("mediumTwo");
    passwordInputContainer.classList.remove("strong");
    passwordInputContainer.classList.remove("perfect");
  }
  if (count >= 3) {
    passwordInputContainer.classList.add("weakThree");
    passwordInputContainer.classList.remove("medium");
    passwordInputContainer.classList.remove("mediumTwo");
    passwordInputContainer.classList.remove("strong");
    passwordInputContainer.classList.remove("perfect");
  }
  if (count >= 4) {
    passwordInputContainer.classList.add("medium");
    passwordInputContainer.classList.remove("mediumTwo");
    passwordInputContainer.classList.remove("strong");
    passwordInputContainer.classList.remove("perfect");
  }
  if (count >= 5) {
    passwordInputContainer.classList.add("mediumTwo");
    passwordInputContainer.classList.remove("perfect");
    passwordInputContainer.classList.remove("strong");
  }
  if (count >= 6) {
    passwordInputContainer.classList.add("strong");
    passwordInputContainer.classList.remove("perfect");
  }
  if (count >= 7) {
    passwordInputContainer.classList.add("perfect");
  }
  // if no have input
  if (password === "") {
    passwordInputContainer.classList.remove("weak");
    passwordInputContainer.classList.remove("weakTwo");
    passwordInputContainer.classList.remove("medium");
    passwordInputContainer.classList.remove("mediumTwo");
    passwordInputContainer.classList.remove("strong");
  }

  if (key === "Backspace" || key === "Delete") {
    count -= 4;
  }

  console.log(count);

  return {
    value: password,
    // valid: count >= 4,
  };
}

function validateLoginInput(email, password) {
  const errors = {};
  if (email.trim() === "") {
    errors.email = "Email must not be empty";
  } else {
    const regEx =
      /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = "Email must be valid email addressed";
    }
  }
  if (password.trim() === "") {
    errors.password = "Password must not be empty";
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
}
