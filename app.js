const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleLoginButtonClick() {
  const username = loginInput.value;
  console.log("hello", username);
}

// loginButton.addEventListener("click", handleLoginButtonClick);