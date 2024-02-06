// Get the body element
const body = document.getElementById("mobileBody");

// Create the forms section element
const formsSection = document.createElement("section");
formsSection.classList.add("forms-section");

// Create the forms container element
const formsContainer = document.createElement("div");
formsContainer.classList.add("forms");

function MobileForm() {
  // Create the Mobile form wrapper element
  const MobileFormWrapper = document.createElement("div");
  MobileFormWrapper.classList.add("form-wrapper", "is-active");

  // Create the Mobile switcher button
  const MobileSwitcher = document.createElement("button");
  MobileSwitcher.type = "button";
  MobileSwitcher.classList.add("switcher", "switcher-login");
  MobileSwitcher.textContent = "Mobile Code Form";
  // create the span element for the underline to Mobile
  const underline_Mobile = document.createElement("span");
  underline_Mobile.classList.add("underline");
  // Append the span element to the button
  MobileSwitcher.appendChild(underline_Mobile);

  // Create the Mobile form element
  const MobileForm = document.createElement("form");
  MobileForm.classList.add("form", "form-login");

  // Create the Mobile form fieldset
  const MobileFieldset = document.createElement("fieldset");
  const MobileLegend = document.createElement("legend");
  MobileLegend.textContent = "Please, enter Code.";
  MobileFieldset.appendChild(MobileLegend);

  // Create the password input field
  const MobileNomberInputBlock = document.createElement("div");
  MobileNomberInputBlock.classList.add("input-block");
  const MobileNomberLabel = document.createElement("label");
  MobileNomberLabel.setAttribute("for", "Mobile-No");
  MobileNomberLabel.textContent = "Code";
  const MobileNomberInput = document.createElement("input");
  MobileNomberInput.id = "Mobile-No";
  MobileNomberInput.type = "number";
  MobileNomberInput.required = true;
  MobileNomberInputBlock.appendChild(MobileNomberLabel);
  MobileNomberInputBlock.appendChild(MobileNomberInput);

  // Create the Mobile button
  const MobileButton = document.createElement("button");
  MobileButton.type = "submit";
  MobileButton.classList.add("btn-login");
  MobileButton.textContent = "Login";

  // Append the email input block, password input block, to the Mobile form
  MobileFieldset.appendChild(MobileNomberInputBlock);

  // Append the fieldset and Mobile button to the Mobile form
  MobileForm.appendChild(MobileFieldset);
  MobileForm.appendChild(MobileButton);

  // Append the Mobile switcher button and Mobile form to the Mobile form wrapper
  MobileFormWrapper.appendChild(MobileSwitcher);
  MobileFormWrapper.appendChild(MobileForm);

  // Append the Mobile form wrapper to the forms container
  formsContainer.appendChild(MobileFormWrapper);
}

MobileForm();

// Append the forms container to the forms section
formsSection.appendChild(formsContainer);

// Append the forms section to the body
body.appendChild(formsSection);
