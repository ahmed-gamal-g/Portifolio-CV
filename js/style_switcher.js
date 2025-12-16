// ===================== toggle style switcher ===================
const styleSwitcherToggle = document.querySelector(".style_switcher_toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style_switcher").classList.toggle("open");
});

const styleSwitcher = document.querySelector(".style_switcher");

// hide style switcher on scroll
// (close the panel if it is open)

function closeStyleSwitcherOnScroll() {
  if (styleSwitcher.classList.contains("open")) {
    styleSwitcher.classList.remove("open");
  }
}

// scroll of whole window
window.addEventListener("scroll", closeStyleSwitcherOnScroll);
// scroll inside any scrollable container (like .section)
document.addEventListener("scroll", closeStyleSwitcherOnScroll, true);

// hide style switcher when clicking anywhere outside it
document.addEventListener("click", (e) => {
  const clickedInsideSwitcher = styleSwitcher.contains(e.target);
  const clickedOnToggle = styleSwitcherToggle.contains(e.target);

  // if panel is open and click is outside both the box and the gear icon -> close it
  if (styleSwitcher.classList.contains("open") && !clickedInsideSwitcher && !clickedOnToggle) {
    styleSwitcher.classList.remove("open");
  }
});

// ===================== theme colors ===================

const alternateStyle = document.querySelectorAll('.alternate_style')
function setActiveStyle(color) {
    alternateStyle.forEach((style) => {
        if (color === style.getAttribute('title')) {
            style.removeAttribute('disabled')
        }
        else {
            style.setAttribute('disabled' , 'true')
        }
    })
}

// ===================== theme light and dark mode ===================
const dayNight = document.querySelector('.day_night')
dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('fa-sun')
    dayNight.querySelector('i').classList.toggle('fa-moon')
    document.body.classList.toggle('dark')
})


window.addEventListener('load', () => {
    if (document.body.classList.contains('dark')) {
        dayNight.querySelector('i').classList.add('fa-moon')
    }
    else {
        dayNight.querySelector('i').classList.add('fa-sun')
    }
})
