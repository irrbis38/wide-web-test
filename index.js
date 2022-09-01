//scroll
const allIntroLinks = document.querySelectorAll(".intro__linkItem");

const onScrollPage = (targetElement) => {
  const elementPosition = targetElement.getBoundingClientRect().top;
  window.scrollBy({
    top: elementPosition,
    behavior: "smooth",
  });
};

allIntroLinks.forEach((item) =>
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.getElementById(
      `${item.getAttribute("href").slice(1)}`
    );
    onScrollPage(target);
  })
);

const headerLogo = document.querySelector("#intro-logo");
const footerLogo = document.querySelector("#footer-logo");
const intro = document.querySelector("#intro");

headerLogo.addEventListener("click", (e) => e.preventDefault());

footerLogo.addEventListener("click", (e) => {
  e.preventDefault();
  onScrollPage(intro);
});

//check checkbox by text input

const whatCheckbox = document.querySelector("#checkbox-what");
const whatInput = document.querySelector("#input-what");
const whereCheckbox = document.querySelector("#checkbox-where");
const whereInput = document.querySelector("#input-where");

const changeChecked = (event, checkboxName) => {
  if (event.target.value.length > 0) {
    checkboxName.checked = true;
  } else {
    checkboxName.checked = false;
  }
};

whatInput.addEventListener("input", (e) => {
  changeChecked(e, whatCheckbox);
});

whereInput.addEventListener("input", (e) => {
  changeChecked(e, whereCheckbox);
});

// hide video overlay

const videoOverlay = document.querySelector(".video__overlay");

videoOverlay.addEventListener("click", () => {
  videoOverlay.classList.add("hidden");
});
