let info = {
  userAgent: navigator.userAgent,
  screenHeight: window.screen.height,
  screenWidth: window.screen.width,
  devicePixelRatio: window.devicePixelRatio,
  platform: navigator.platform,
  language: navigator.language,
  memory: navigator.deviceMemory,
};

// Get the body element
const body = document.getElementById("app_body");

// Create the forms section element
const formsSection = document.createElement("section");
formsSection.classList.add("forms-section");

// Create the forms container element
const formsContainer = document.createElement("div");
formsContainer.classList.add("forms");

function user_infoData() {
  // Create the Mobile form wrapper element
  const MobileFormWrapper = document.createElement("div");
  MobileFormWrapper.classList.add("form-wrapper", "is-active");

  // Create the Mobile switcher button
  const MobileSwitcher = document.createElement("button");
  MobileSwitcher.type = "button";
  MobileSwitcher.classList.add("switcher", "switcher-login");
  MobileSwitcher.textContent = "user divice information";

  // Create break function
  function br() {
    const br = document.createElement("br");
    MobileFormWrapper.appendChild(br);
  }

  // user Agent
  const user_agent_label = document.createElement("label");
  user_agent_label.classList.add("switcher");
  user_agent_label.textContent = "User Agent: " + info.userAgent;
  // Screen Widt
  const screen_width = document.createElement("label");
  screen_width.classList.add("switcher");
  screen_width.textContent = "screen_width: " + info.screenWidth;
  // screen Height
  const screen_height = document.createElement("label");
  screen_height.classList.add("switcher");
  screen_height.textContent = "Screen Height: " + info.screenHeight;
  // Device Pixel Ratio
  const device_PixelRatio = document.createElement("label");
  device_PixelRatio.classList.add("switcher");
  device_PixelRatio.textContent =
    "Device Pixel Ratio: " + info.devicePixelRatiot;
  // Platform
  const Plat_form = document.createElement("label");
  Plat_form.classList.add("switcher");
  Plat_form.textContent = "Platform: " + info.platform;
  // Language
  const _language = document.createElement("label");
  _language.classList.add("switcher");
  _language.textContent = "Language: " + info.language;
  // device memory
  const device_Memory = document.createElement("label");
  device_Memory.classList.add("switcher");
  device_Memory.textContent = "device memory: " + info.memory;

  // append user data to label elemens
  MobileFormWrapper.appendChild(MobileSwitcher);
  br();
  MobileFormWrapper.appendChild(user_agent_label);
  br();
  MobileFormWrapper.appendChild(screen_width);
  br();
  MobileFormWrapper.appendChild(screen_height);
  br();
  MobileFormWrapper.appendChild(device_PixelRatio);
  br();
  MobileFormWrapper.appendChild(Plat_form);
  br();
  MobileFormWrapper.appendChild(_language);
  br();
  MobileFormWrapper.appendChild(device_Memory);
  br();

  // create the span element for the underline to Mobile
  const underline_Mobile = document.createElement("span");
  underline_Mobile.classList.add("underline");
  // Append the span element to the button
  MobileSwitcher.appendChild(underline_Mobile);
  // Append the Mobile form wrapper to the forms container
  formsContainer.appendChild(MobileFormWrapper);
}

user_infoData();

// Append the forms container to the forms section
formsSection.appendChild(formsContainer);

// Append the forms section to the body
body.appendChild(formsSection);
