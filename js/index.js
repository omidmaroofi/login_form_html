// Get the body element
const body = document.getElementById("mybody");

// Create the forms section element
const formsSection = document.createElement("section");
formsSection.classList.add("forms-section");

// Create the section title element
const sectionTitle = document.createElement("h1");
sectionTitle.classList.add("section-title");
sectionTitle.textContent = "Login Forms";

// Create the forms container element
const formsContainer = document.createElement("div");
formsContainer.classList.add("forms");

function loginForm() {
  // Create the login form wrapper element
  const loginFormWrapper = document.createElement("div");
  loginFormWrapper.classList.add("form-wrapper", "is-active");

  // Create the login switcher button
  const loginSwitcher = document.createElement("button");
  loginSwitcher.type = "button";
  loginSwitcher.classList.add("switcher", "switcher-login");
  loginSwitcher.textContent = "Login";
  // create the span element for the underline to login
  const underline_login = document.createElement("span");
  underline_login.classList.add("underline");
  // Append the span element to the button
  loginSwitcher.appendChild(underline_login);

  // Create the login form element
  const loginForm = document.createElement("form");
  loginForm.classList.add("form", "form-login");

  // Create the login form fieldset
  const loginFieldset = document.createElement("fieldset");
  const loginLegend = document.createElement("legend");
  loginLegend.textContent = "Please, enter your email and password for login.";
  loginFieldset.appendChild(loginLegend);

  // Create the email input field
  const loginEmailInputBlock = document.createElement("div");
  loginEmailInputBlock.classList.add("input-block");
  const loginEmailLabel = document.createElement("label");
  loginEmailLabel.setAttribute("for", "login-email");
  loginEmailLabel.textContent = "E-mail";
  const loginEmailInput = document.createElement("input");
  loginEmailInput.id = "login-email";
  loginEmailInput.type = "email";
  loginEmailInput.required = true;
  loginEmailInputBlock.appendChild(loginEmailLabel);
  loginEmailInputBlock.appendChild(loginEmailInput);

  // Create the password input field
  const loginPasswordInputBlock = document.createElement("div");
  loginPasswordInputBlock.classList.add("input-block");
  const loginPasswordLabel = document.createElement("label");
  loginPasswordLabel.setAttribute("for", "login-password");
  loginPasswordLabel.textContent = "Password";
  const loginPasswordInput = document.createElement("input");
  loginPasswordInput.id = "login-password";
  loginPasswordInput.type = "password";
  loginPasswordInput.required = true;
  loginPasswordInputBlock.appendChild(loginPasswordLabel);
  loginPasswordInputBlock.appendChild(loginPasswordInput);

  // Create the login button
  const loginButton = document.createElement("button");
  loginButton.type = "submit";
  loginButton.classList.add("btn-login");
  loginButton.textContent = "Login";

  // Append the email input block, password input block, to the login form
  loginFieldset.appendChild(loginEmailInputBlock);
  loginFieldset.appendChild(loginPasswordInputBlock);

  // Append the fieldset and login button to the login form
  loginForm.appendChild(loginFieldset);
  loginForm.appendChild(loginButton);

  // Append the login switcher button and login form to the login form wrapper
  loginFormWrapper.appendChild(loginSwitcher);
  loginFormWrapper.appendChild(loginForm);

  // Append the login form wrapper to the forms container
  formsContainer.appendChild(loginFormWrapper);
}

function singupForm() {
  // Create the signup form wrapper element
  const signupFormWrapper = document.createElement("div");
  signupFormWrapper.classList.add("form-wrapper");

  // Create the signup switcher button
  const signupSwitcher = document.createElement("button");
  signupSwitcher.classList.add("switcher", "switcher-signup");
  signupSwitcher.textContent = "Sign Up";

  // create the span element for the underline singup
  const underline_signup = document.createElement("span");
  underline_signup.classList.add("underline");
  // Append the span element to the button
  signupSwitcher.appendChild(underline_signup);

  // Create the signup form element
  const signupForm = document.createElement("form");
  signupForm.classList.add("form", "form-signup");

  // Create the signup form fieldset
  const signupFieldset = document.createElement("fieldset");
  const signupLegend = document.createElement("legend");
  signupLegend.textContent =
    "Please, enter your email, password and password confirmation for sign up.";
  signupFieldset.appendChild(signupLegend);

  // Create the email input field
  const signupEmailInputBlock = document.createElement("div");
  signupEmailInputBlock.classList.add("input-block");
  const signupEmailLabel = document.createElement("label");
  signupEmailLabel.setAttribute("for", "signup-email");
  signupEmailLabel.textContent = "E-mail";
  const signupEmailInput = document.createElement("input");
  signupEmailInput.id = "signup-email";
  signupEmailInput.type = "email";
  signupEmailInput.required = true;
  signupEmailInputBlock.appendChild(signupEmailLabel);
  signupEmailInputBlock.appendChild(signupEmailInput);

  // Create the password input field
  const signupPasswordInputBlock = document.createElement("div");
  signupPasswordInputBlock.classList.add("input-block");
  const signupPasswordLabel = document.createElement("label");
  signupPasswordLabel.setAttribute("for", "signup-password");
  signupPasswordLabel.textContent = "Password";
  const signupPasswordInput = document.createElement("input");
  signupPasswordInput.id = "signup-password";
  signupPasswordInput.type = "password";
  signupPasswordInput.required = true;
  signupPasswordInputBlock.appendChild(signupPasswordLabel);
  signupPasswordInputBlock.appendChild(signupPasswordInput);

  // Create the password confirmation input field
  const signupPasswordConfirmInputBlock = document.createElement("div");
  signupPasswordConfirmInputBlock.classList.add("input-block");
  const signupPasswordConfirmLabel = document.createElement("label");
  signupPasswordConfirmLabel.setAttribute("for", "signup-password-confirm");
  signupPasswordConfirmLabel.textContent = "Confirm password";
  const signupPasswordConfirmInput = document.createElement("input");
  signupPasswordConfirmInput.id = "signup-password-confirm";
  signupPasswordConfirmInput.type = "password";
  signupPasswordConfirmInput.required = true;
  signupPasswordConfirmInputBlock.appendChild(signupPasswordConfirmLabel);
  signupPasswordConfirmInputBlock.appendChild(signupPasswordConfirmInput);

  // Create the signup button
  const signupButton = document.createElement("button");
  signupButton.type = "submit";
  signupButton.classList.add("btn-signup");
  signupButton.textContent = "Continue";

  // Append the email input block, password input block, password confirmation input block, to the signup form
  signupFieldset.appendChild(signupEmailInputBlock);
  signupFieldset.appendChild(signupPasswordInputBlock);
  signupFieldset.appendChild(signupPasswordConfirmInputBlock);

  // Append the fieldset and signup button to the signup form
  signupForm.appendChild(signupFieldset);
  signupForm.appendChild(signupButton);

  // Append the signup switcher button and signup form to the signup form wrapper
  signupFormWrapper.appendChild(signupSwitcher);
  signupFormWrapper.appendChild(signupForm);

  // Append the signup form wrapper to the forms container
  formsContainer.appendChild(signupFormWrapper);
}

loginForm();
singupForm();

// Append the section title to the forms container
formsSection.appendChild(sectionTitle);

// Append the forms container to the forms section
formsSection.appendChild(formsContainer);

// Append the forms section to the body
body.appendChild(formsSection);

//   switch loginForm to singupForm
const switchers = [...document.querySelectorAll(".switcher")];

switchers.forEach((item) => {
  item.addEventListener("click", function () {
    switchers.forEach((item) =>
      item.parentElement.classList.remove("is-active")
    );
    this.parentElement.classList.add("is-active");
  });
});
