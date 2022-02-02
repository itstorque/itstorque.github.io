function playAudio() {
  new Audio("https://upload.wikimedia.org/wikipedia/commons/2/20/En-us-torque.ogg").play();
}

window.addEventListener("scroll", function() {
  checkSection()
});

window.addEventListener("load", function() {
  checkSection()
});

function checkSection() {
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
