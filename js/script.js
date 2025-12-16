// =================== typing animation ======================

let typed = new Typed(".typing", {
  strings: ["Web Developer", "Front-End Developer", "Web Developer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

let typedd = new Typed(".name", {
  strings: ["Ahmed Gamal"],
  typeSpeed: 200,
  BackSpeed: 200,
  loop: true,
});

// =================== Aside ======================
const navv = document.querySelector(".navv"),
  navList = navv.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
        //   allSection[j].classList.add('back_section')
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back_section");
  }
}

function addBackSection(num) {
  allSection[num].classList.add("back_section");
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function ubdateNave(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".hire_me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  console.log(sectionIndex);
  showSection(this);
  ubdateNave(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

const navToglerBtn = document.querySelector(".navv_toggler"),
  aside = document.querySelector(".aside");
navToglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navToglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

// start our-skills
let ourSkills = document.getElementById("skills");
let progressSkills = document.querySelectorAll(".progress .progress_in");
let home = document.querySelector(".home-btn");
let about = document.querySelector(".about");
let portfolio = document.querySelector(".portfolio");
let contact = document.querySelector(".contact");

window.addEventListener("click", function (e) {
  if (e.target === about) {
    console.log("about clicked");
    progressSkills.forEach((skill) => {
      skill.style.width = skill.dataset.width;
    });
  } else if (e.target === home) {
    progressSkills.forEach((skill) => {
      skill.style.width = "0%";
    });
  } else if (e.target === portfolio) {
    progressSkills.forEach((skill) => {
      skill.style.width = "0%";
    });
  } else if (e.target === contact) {
    progressSkills.forEach((skill) => {
      skill.style.width = "0%";
    });
  }
});
// end our-skills

// =================== CV Download Handler ======================
// document.addEventListener('DOMContentLoaded', function() {
//   const downloadCvBtn = document.getElementById('downloadCvBtn');
//   if (downloadCvBtn) {
//     downloadCvBtn.addEventListener('click', function(e) {
//       // Try to force download - if the browser doesn't support download attribute
//       // This ensures the file downloads instead of opening
//       const fileName = this.getAttribute('download');
//       if (!fileName) {
//         this.setAttribute('download', 'Ahmed-Gamal-CV.pdf');
//       }
//     });
//   }
// });