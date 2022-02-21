---
---

mobileMenuDisabled = true // still in development

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

window.addEventListener("scroll", function() {
  checkSection()
});

window.addEventListener("load", function() {
  checkSection()
  addIndividualExpands()

  addMobileMenus()

  // add _blank to all links
  var links = document.links;
  for (var i = 0; i < links.length; i++) {
    if (links[i].hostname != window.location.hostname && links[i].pathname != window.location.pathname) {
       links[i].target = "_blank";
     }
  }

  // indiv projects code
  nprToggle()

  changeImage()
  setInterval(changeImage, 4000)

});

let portrait_index = 0;
let total_portrait_num = 9;

function changeImage() {

   var image = new Image();
   image.src = "resources/portraits/portrait-" + (portrait_index+1) + ".jpg";

   image.onload = function () {

        document.getElementById('portrait').src = image.src

    };

    portrait_index > total_portrait_num-2 ? portrait_index = 0 : portrait_index++;

}

function playAudio() {
  new Audio("https://upload.wikimedia.org/wikipedia/commons/2/20/En-us-torque.ogg").play();
}

function addMobileMenus() {

  if (mobileMenuDisabled) { return }

  for (emoji of [...document.getElementsByClassName("title_with_emoji"),
                    document.getElementById("hello-emoji")             ]) {

    emoji.addEventListener('click', function (e) {

      document.getElementById('mobilenav').classList.toggle("active");

    });

  }

}

function addIndividualExpands() {

  k = 0

  for (section of document.getElementsByClassName("individual-expands")) {

    for (sectionItem of section.children) {

      if (sectionItem.tagName == "H4") {

        k++

        sectionItem.innerHTML = sectionItem.innerHTML + '<div class="openTab"' + k + ' onclick="toggleIndivExpand(this, ' + k + ')"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg></div>'

      } else {

        sectionItem.innerHTML = "<div class='expandable hidden dataID" + k + "'>" + sectionItem.innerHTML + "</div>"

        sectionItem.classList.add('loaded')

      }

    }

  }

}

function toggleIndivExpand(controller, indivIndex) {

  controller.classList.toggle("opened");

  if (controller.classList.contains("opened")) {

    setTimeout(() => { controller.scrollIntoView({block: "start", inline: "nearest", behavior: 'smooth'}); }, 300);

  }

  for (dataItem of document.getElementsByClassName("dataID"+indivIndex)) {

    dataItem.classList.toggle("hidden");

  }

}

function checkSection() {
  var education = document.getElementById("education");
  var teaching = document.getElementById("teaching");
  var projects = document.getElementById("projects");
  var research = document.getElementById("research");

  var header = document.getElementById("header-indicator");

  deltaStrictSoft = 100

  if (window.scrollY > (projects.offsetTop) - deltaStrictSoft) {
    setSection("projects");
  } else if (window.scrollY > (research.offsetTop) - deltaStrictSoft) {
    setSection("research");
  } else if (window.scrollY > (teaching.offsetTop) - deltaStrictSoft) {
    setSection("teaching");
  } else if (window.scrollY > (education.offsetTop) - deltaStrictSoft) {
    setSection("education");
  } else {
    setSection("hello");
  }

  if (mobileMenuDisabled) { return }

  deltaStrict = 10

  if (window.scrollY > (projects.offsetTop) - deltaStrict) {
    setSectionStrict("projects");
  } else if (window.scrollY > (research.offsetTop) - deltaStrict) {
    setSectionStrict("research");
  } else if (window.scrollY > (teaching.offsetTop) - deltaStrict) {
    setSectionStrict("teaching");
  } else if (window.scrollY > (education.offsetTop) - deltaStrict) {
    setSectionStrict("education");
  } else if (window.scrollY > (header.offsetTop + 10)){
    setSectionStrict("hello");
  } else {
    setSectionStrict("");
  }

}

function checkSectionStrict() {
  var education = document.getElementById("education");
  var teaching = document.getElementById("teaching");
  var projects = document.getElementById("projects");
  var research = document.getElementById("research");

  if (window.scrollY > (projects.offsetTop) - 100) {
    setSection("projects");
  } else if (window.scrollY > (research.offsetTop) - 100) {
    setSection("research");
  } else if (window.scrollY > (teaching.offsetTop) - 100) {
    setSection("teaching");
  } else if (window.scrollY > (education.offsetTop) - 100) {
    setSection("education");
  } else {
    setSection("hello");
  }

}

function setSection(section) {

  for (sectionButton of document.getElementById("sidenav").children) {

    sectionButton.classList = "";

  }

  document.getElementById("nav-" + section).classList = "selected";

}

function setSectionStrict(section) {

  for (sectionTitle of document.getElementsByClassName("title_with_emoji")) {

    sectionTitle.classList = "title_with_emoji";

  }

  if (section=="hello") {

    document.getElementById("hello-emoji").classList = "emoji-block activeSection";

  } else {

    document.getElementById("hello-emoji").classList = "emoji-block";

    if (section != "") {

      document.getElementById(section).classList = "title_with_emoji activeSection";

    }

  }

}

function toggleClassList() {
  document.getElementById("class_list").classList.toggle("unhide");

  class_list_button = document.getElementById("toggle_class_list")

  if (document.getElementById("class_list").classList.contains("unhide")) {
    class_list_button.innerHTML = "🤓 HIDE CLASSES"
  } else {
    class_list_button.innerHTML = "SHOW ALL CLASSES"
  }

  class_list_button.classList.toggle("changing");
  class_list_button.classList.toggle("changing2");

}

function toggleSection(controller, section) {

  if (controller.innerHTML == "EXPAND") {

    controller.innerHTML = "COLLAPSE";

  } else {

    controller.innerHTML = "EXPAND";

  }

  for (item of document.getElementsByClassName(section)) {

    item.classList.toggle("unhide");

  }

}

function nprToggle() {

  k = 1

  totalk = document.getElementById("nprtable").children[0].children.length

  var intervalId = window.setInterval(function(){
    document.getElementById("nprtable").children[0].children[k].hidden = false
    document.getElementById("nprtable").children[0].children[(5+k-1) % totalk].hidden = true
    k = (k+1) % totalk
  }, 3000);

}

function playAudioGif() {
  new Audio("https://upload.wikimedia.org/wikipedia/commons/4/48/En-us-gif-2.ogg").play();
}
