let eyeicon = document.querySelector("#eyeicons");
let password = document.querySelector("#password");

eyeicon.onclick = function () {
  if (password.type === "password") {
    password.type = "text";
    eyeicon.src = "images/eye-icons/eye-open.png";
  } else {
    password.type = "password";
    eyeicon.src = "images/eye-icons/eye-close.png";
  }
};
