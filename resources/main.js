---
---

function playAudio() {
  new Audio("https://upload.wikimedia.org/wikipedia/commons/2/20/En-us-torque.ogg").play();
}

window.addEventListener("scroll", function() {
  checkSection()
});

window.addEventListener("load", function() {
  checkSection()
  addIndividualExpands()

  // add _blank to all links
  var links = document.links;
  for (var i = 0; i < links.length; i++) {
       links[i].target = "_blank";
  }

  // indiv projects code
  nprToggle()

});

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

      document.getElementById(section).classList = "title_with_emoji activeSection";

    }

    console.log(section)

    console.log(document.getElementById("header-indicator").offsetTop)
    console.log(document.getElementById("education").offsetTop)
    console.log(window.scrollY)

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
