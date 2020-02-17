// List
const collection = {
  experience: [
    {
      company: "TC gaming inc.",
      employed: "2018/09～2019/12",
      job: "Payment Product Manage",
      duty: [
        "Payment Product integration",
        "Requirements document manage",
        "research and collection information with industry",
        "make work flow"
      ]
    }
  ],
  icons: [
    {
      name: "git",
      link: "https://github.com/aikwdc00",
      className: "fab",
      font: "fa-github"
    },
    {
      name: "medium",
      link: "https://medium.com/@fredli_85391",
      className: "fab fa-medium"
    },
    {
      name: "mail",
      link: "mailto:aikwdc00@hotmail.com",
      className: "fas fa-envelope-square"
    },
    {
      name: "telegram",
      link: "https://t.me/fredli000",
      className: "fab fa-telegram-plane"
    },
    {
      name: "Line",
      link: "https://line.me/ti/p/l2uqZVlnLq",
      className: "fab fa-line"
    }
  ],
  projects: [
    {
      name: "Movie List",
      image:
        "image/project/movies/movie.JPG",
      intro: "List systematization and search",
      describe: "",
      link: "https://aikwdc00.github.io/Movie-List/",
      git: "https://github.com/aikwdc00/Movie-List",
      gitfont: "fab fa-github"
    },
    {
      name: "who is lucky",
      image:
        "image/project/lottory/lottory.JPG",
      intro: "Can draw who is winner",
      describe: "",
      link: "https://aikwdc00.github.io/Lottery/",
      git: "https://github.com/aikwdc00/Lottery",
      gitfont: "fab fa-github"
    },
    {
      name: "yellow cat",
      image:
        "image/project/yellowCat/yellowCat.JPG",
      intro: "yellow studio with cat with web design",
      describe: "",
      link: "https://aikwdc00.github.io/yellow-cat/",
      git: "https://github.com/aikwdc00/yellow-cat",
      gitfont: "fab fa-github"
    }
  ]
};
// declare
const navbartop = document.querySelector(".navbar-top");
const explore = document.querySelector(".explore");
const button = document.querySelector("button.navbar-toggler.navbar-dark");
const infoPanel = document.querySelector(".infoPanel");
const IconPanel = document.querySelectorAll(".Icon-panel");
const ProjectPanel = document.querySelector(".ProjectPanel");
const logoBrand = document.querySelector(".brand-logo");
const experiencePanel = document.querySelector(".experiencePanel");

// scroll Event Listener
window.addEventListener("scroll", function(e) {
  // scroll控制explore
  if (window.scrollY <= 0) {
    explore.classList.add("at_top");
    logoBrand.src =
      "https://raw.githubusercontent.com/aikwdc00/First-Resume/master/image/logo/logo-black.png";
  } else {
    explore.classList.remove("at_top");
    logoBrand.src =
      "https://raw.githubusercontent.com/aikwdc00/First-Resume/master/image/logo/logo-white.png";
  }
  // scroll控制導覽列
  if (window.scrollY > 0) {
    navbartop.classList.remove("navbar-top");
    button.classList.remove("navbar-dark");
  } else {
    navbartop.classList.add("navbar-top");
    button.classList.add("navbar-dark");
  }
});

// show info and footer icon
function showInfoIcon() {
  let cell = "";
  collection.icons.forEach(item => {
    cell += `
            <li class='list-group-item'>
                <a href=${item.link} target='_blank'>
                    <i class='${item.className} ${item.font}'></i>
                </a>
            </li>
        `;
  });
  infoPanel.innerHTML = cell;
}

function showFooterIcon() {
  let cell = "";
  collection.icons.forEach(item => {
    cell += `
            <li class="nav-item mr-3">
                <a href=${item.link} target="_blank">
                    <i class="${item.className} ${item.font}"></i>
                </a>
            </li>
        `;
  });
  for (let i = 0; i < IconPanel.length; i++) {
    IconPanel[i].innerHTML = cell;
  }
}
// about
function experience() {
  let cell = "";
  collection.experience.forEach(item => {
    cell += `
          <h4 class="pl-3">${item.company} <span class="experienceDate">${
      item.employed
    }</span></h4>
          <h5 class="pl-3">${item.job}</h5>
          <ul class="pl-3 m-0 pb-3">
            ${dutys(item.duty)}
          </ul>`;
    experiencePanel.innerHTML = cell;
  });
}

function dutys(item) {
  let cell = "";
  item.map(duty => (cell += `<li>${duty}</li>`));
  return cell;
}

// projects
function projectList() {
  let cell = "";
  collection.projects.forEach(item => {
    cell += `
                <div class="row py-3 ">
                    <div class="col-sm-5 p-3">
                        <a href="${item.link}" target="blank"><img src="${item.image}" alt="" class="w-100"></a>
                    </div>
                    <div class="col-sm-7 p-3">
                        <div class="title mx-auto">
                            <h4 class="pro-title text-center mx-auto p-2 mb-2 bg-info text-white rounded">${item.name}</h4>
                        </div>
                        <h5 class="text-center mx-auto">${item.intro}</h5>
                        <p><a href="${item.git}" target="blank" class=""><i class="${item.gitfont} text-dark"></i></a></p>
                        
                    </div>
                </div>
        `;
  });
  ProjectPanel.innerHTML = cell;
}

//  do function
experience();
showInfoIcon();
showFooterIcon();
projectList();
