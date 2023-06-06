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
          if (navList[j].querySelector('a').classList.contains('active'))
          {
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
    for (let i = 0; i < totalSection; i++){
        allSection[i].classList.remove('back_section')
    }
}

function addBackSection(num) {
    allSection[num].classList.add('back_section')
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++){
        allSection[i].classList.remove('active')
    }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function ubdateNave(element) {
    for (let i = 0; i < totalNavList; i++){
        navList[i].querySelector('a').classList.remove('active');
        const target = element.getAttribute('href').split('#')[1];
        if (target === navList[i].querySelector('a').getAttribute('href').split('#')[1]) {
           navList[i].querySelector('a').classList.add('active') 
        }
    }
}

document.querySelector('.hire_me').addEventListener("click", function () {
    const sectionIndex = this.getAttribute('data-section-index');
    console.log(sectionIndex)
    showSection(this);
    ubdateNave(this);
    removeBackSection();
    addBackSection(sectionIndex)
})

const navToglerBtn = document.querySelector('.navv_toggler'),
    aside = document.querySelector('.aside');
navToglerBtn.addEventListener("click", () => {
        asideSectionTogglerBtn()
})
function asideSectionTogglerBtn() {
    aside.classList.toggle('open')
    navToglerBtn.classList.toggle('open')
    for (let i = 0; i < totalSection; i++){
        allSection[i].classList.toggle('open')
    }
}
