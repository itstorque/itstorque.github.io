mobileMenuDisabled = true // still in development
css_color_stylesheet = false
css_stylesheet_counter = 0
CSS_STYLESHEET_COUNTER_SWITCH = 5

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

window.addEventListener("scroll", function() {
  checkSection()
});

manualChangeImage = () => { 
  // To be defined later after loading...
}

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
  changeImageProcess = setInterval(changeImage, 4000)

  manualChangeImage = () => {

    changeImage();
    clearInterval(changeImageProcess);
    changeImageProcess = setInterval(changeImage, 4000);
  }

});

let portrait_index = -2;
let total_portrait_num = 9;

function changeImage() {

   var image = new Image();
   image.src = "resources/portraits/portrait-" + (portrait_index+1) + ".jpg";

   if (portrait_index < 0) {
    image.src = "resources/portraits/portrait-main.jpg";
   }

   image.onload = function () {

        document.getElementById('portrait').src = image.src

    };

    (portrait_index > total_portrait_num-2) ? (portrait_index = -2) : (portrait_index++);

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

function swap_theme() {

  css_stylesheet_counter += 1
  
  var themes = get_themes(); // ["default", "purple", "dawn"];
  var current_theme = "default";

  document.body.classList.forEach((existingClass) => {
    if (themes.includes(existingClass)) {
      document.body.classList.remove(existingClass);
      current_theme = existingClass
    }
  });

  const current_theme_index = themes.indexOf(current_theme);

  themes.splice(current_theme_index, 1)

  var theme = themes[Math.floor(Math.random()*themes.length)];
  
  set_theme(theme)

  if (css_stylesheet_counter > CSS_STYLESHEET_COUNTER_SWITCH) {
    colors_dev_mode(theme)
  }

}

function set_theme(theme) {

  console.log("Changing theme to " + theme)
  setThemeCookie(theme)

  document.body.classList.add(theme);

  theme_swap_button = document.getElementById("next_theme");
  theme_swap_indicator = document.getElementById("theme_swap_indicator");

  theme_swap_button.classList.add("animation");
  theme_swap_indicator.classList.add("animation");
  setTimeout(() => {
    theme_swap_button.classList.remove("animation");
    theme_swap_indicator.classList.remove("animation");
  }, 1000);

}

function manual_set_theme(theme) {
  var themes = get_themes(); // ["default", "purple", "dawn"];
  var current_theme = "default";

  document.body.classList.forEach((existingClass) => {
    if (themes.includes(existingClass)) {
      document.body.classList.remove(existingClass);
      current_theme = existingClass
    }
  });

  set_theme(theme);
  colors_dev_mode(theme);
}

function get_themes() {
  if (css_color_stylesheet == false) {
    // document.body.classList.forEach((existingClass) => {
    //   if (themes.includes(existingClass)) {
    //     document.body.classList.remove(existingClass);
    //   }
    // });
    Array.prototype.some.call(document.styleSheets, function(a){
      filename = a.href.split('/').pop()
      if (filename == "colors.css") {
        css_color_stylesheet = a
        return true;
      }
    })
  } 

  if (css_color_stylesheet == false) {
    return []
  }

  return Array.prototype.map.call(css_color_stylesheet.cssRules, function(a) {
    return a.selectorText.split(".").pop()
  })

}

function colors_dev_mode(current_theme) {
  
  themes = get_themes()

  themes_dev_div = document.getElementById("themes_dev_div")

  innerHTML = "<h3>🪄 Available Themes:</h3> <ul>"

  themes.forEach((theme_name) => {

    tag = current_theme == theme_name ? " (current)" : ""

    innerHTML +=
    "<li><a onclick='manual_set_theme(\"" + theme_name + "\")'>" + theme_name + tag + "</a></li>";

  })

  innerHTML += "</ul><br/>"

  if (themes_dev_div.innerHTML.trim() == "") {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
  
  themes_dev_div.innerHTML = innerHTML

}



// TEST EMOJI REPLACING

function replaceEmojis() {

  const regexpEmojiPresentation = /\p{Emoji_Presentation}/gu;
  matches = document.body.innerHTML.match(regexpEmojiPresentation);



  fetch('/resources/emojis.json')
    .then((response) => response.json())
    .then((json) => {
      E = json
      console.log(json)
      D = {}
      E.forEach(x => {
        console.log(x["name"])
        D[ x["emoji"] ] =  ("https://em-content.zobj.net/source/apple/391/" + x["name"].replaceAll(" ", "-").replaceAll(":", "") + "_" + x["unicode"].replaceAll(" ", "-") + ".png").toLowerCase()
      });
      console.log(D)

      matches.forEach((emoji) => {
          console.log(emoji);
          document.body.innerHTML = document.body.innerHTML.replace(
            RegExp('(\>[^\>]*)' + emoji + '([^\>=]*\<)', 'g'), 
            '$1<img alt=\"' + emoji + '\" src=\"' + D[emoji] + '\" style=\"height: 1em; margin: 0\" loading="lazy" />$2'
            );
        }
      )

      // for (const [key, value] of Object.entries(D)) {
      //   if (key in document.body.innerHTML) {
      //     console.log(key)
      //   }
      //   document.body.innerHTML = document.body.innerHTML.replace(key, '<img alt="' + key + '" src="' + value + '" style="height: 1.1em" />');
      // }

      add_emojis_css(D)

    });

  console.log("hello")

    

  // document.body.innerHTML = document.body.innerHTML.replace('🎲', '<img alt="🎲" src="https://em-content.zobj.net/thumbs/60/apple/391/grinning-face_1f600.webp" style="height: 1.1em" />');
}

window.addEventListener("load", () => { replaceEmojis(); loadTheme(); });

function add_emojis_css(emoji_url_map) {

  emoji_props = Array.from(document.styleSheets)
  .filter(
    sheet =>
      sheet.href === null || sheet.href.startsWith(window.location.origin)
  )
  .reduce(
    (acc, sheet) =>
      (acc = [
        ...acc,
        ...Array.from(sheet.cssRules).reduce(
          (def, rule) =>
            (def =
              rule.selectorText === ".emoji-word"
                ? [
                    ...def,
                    ...Array.from(rule.style).filter(name =>
                      name.startsWith("--e-")
                    )
                  ]
                : def),
          []
        )
      ]),
    []
  );

  console.log(emoji_props)

  sheet = document.styleSheets[0]
  definitions = emoji_props.map((x) => sheet.insertRule(".emoji-word { " + x + `: url(${ emoji_url_map[x.replace('--e-', '')] }) !important;` + " }"))

  // sheet.insertRule(".emoji-word:hover::before { opacity: 0 !important; }")

}

function setThemeCookie(current_theme) {
  const cookieName = "site_theme";
  const default_expiration = 3600000*24*350 // 350 days
  var today = new Date();
  var expire = new Date();

  expire.setTime(today.getTime() + default_expiration);
  document.cookie = cookieName+"="+current_theme
      + ";expires="+expire.toGMTString();
}

function readThemeCookie() {
  const cookieName = "site_theme";

  var theCookie=""+document.cookie;

  var ind=theCookie.indexOf(cookieName+"=");

  if (ind==-1) return "default";

  var ind1=theCookie.indexOf(";", ind);

  if (ind1==-1) ind1=theCookie.length;

  return theCookie.substring(ind+cookieName.length+1,ind1);

}

function loadTheme() {
  return set_theme(readThemeCookie())
}