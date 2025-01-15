mobileMenuDisabled = true // still in development
css_color_stylesheet = false
css_stylesheet_counter = 0
CSS_STYLESHEET_COUNTER_SWITCH = 5
emojis_changed = false

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

window.addEventListener("scroll", function() {
  checkSection()
});

manualChangeImage = () => { 
  // To be defined later after loading...
}

function addEmojiAnimations() {
  emoji_words = document.getElementsByClassName("emoji-word")

  for (let element of emoji_words) {
      element.addEventListener("click", (event) => {
          event.target.classList.add("animation");
          setTimeout(() => {
              event.target.classList.remove("animation");
            }, 2000);
      })
  }
}

window.addEventListener("load", async function() {
  loadTheme();

  // this will overwrite any events...
  await replaceEmojis();

  emojis_changed = true
  
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

  addEmojiAnimations();

});

let portrait_index = -2;
let total_portrait_num = 9;

function changeImage() {

  portrait_elem = document.getElementById('portrait')

  if (portrait_elem===null) {
    return
  }

   var image = new Image();

   if (portrait_index < 0) {
    image.src = "/resources/portraits/portrait-main.jpg";
   } else {
    image.src = "/resources/portraits/portrait-" + (portrait_index+1) + ".jpg";
   }

   image.onload = function () {

    portrait_elem.src = image.src

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

  if (education === null) {
    return
  }

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

  nprtable = document.getElementById("nprtable")

  if (nprtable === null) {
    return
  }

  totalk = nprtable.children[0].children.length

  var intervalId = window.setInterval(function(){
    document.getElementById("nprtable").children[0].children[k].hidden = false
    document.getElementById("nprtable").children[0].children[(5+k-1) % totalk].hidden = true
    k = (k+1) % totalk
  }, 3000);

}

function playAudioGif() {
  new Audio("https://upload.wikimedia.org/wikipedia/commons/4/48/En-us-gif-2.ogg").play();
}



// TEST EMOJI REPLACING

async function replaceEmojis() {

  const regexpEmojiPresentation = /\p{Emoji_Presentation}/gu;
  matches = document.body.innerHTML.match(regexpEmojiPresentation);

  await fetch('/resources/emojis.json.gz')
    .then((response) => {
      return response.arrayBuffer()
    })
    .then((compressed) => {
      E = JSON.parse( pako.ungzip(compressed, { to: 'string' }) )
      D = {}
      E.forEach(x => {
        D[ x["emoji"] ] =  ("https://em-content.zobj.net/source/apple/391/" + x["name"].replaceAll(" ", "-").replaceAll(":", "") + "_" + x["unicode"].replaceAll(" ", "-") + ".png").toLowerCase()
      });

      matches.forEach((emoji) => {
        console.log(emoji);
          document.body.innerHTML = document.body.innerHTML.replace(
            RegExp('(\>[^\>]*)' + emoji + '([^\>=]*\<)', 'g'), 
            '$1<img alt=\"' + emoji + '\" src=\"' + D[emoji] + '\" style=\"height: 1em; margin: 0\" loading="lazy" />$2'
            );
          // console.log([...document.querySelectorAll("*")].filter(a => a.textContent.includes(emoji)));
          // [...document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, span")].filter(a => a.textContent.includes(emoji))
          //   .forEach(a => a.innerHTML = a.innerHTML.replace(RegExp(emoji, 'g'), '$1<img alt=\"' + emoji + '\" src=\"' + D[emoji] + '\" style=\"height: 1em; margin: 0\" loading="lazy" />$2'));

        }
      )

      add_emojis_css(D)

    });

}

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

  var style = document.createElement('style');
  

  emoji_urls = ""
  definitions = emoji_props.map((x) => {
    // sheet.insertRule(".emoji-word { " + x + `: url(${ emoji_url_map[x.replace('--e-', '')] }) !important;` + " }");

    style.innerHTML += ".emoji-word { " + x + `: url(${ emoji_url_map[x.replace('--e-', '')] }) !important;` + " }";
    // preload rule
    emoji_urls += `url(${ emoji_url_map[x.replace('--e-', '')] }), `
    
    preload_img = new Image()
    preload_img.src = emoji_url_map[x.replace('--e-', '')];
    preload_img.onload = () => {};

  })

  document.head.appendChild(style);

  // sheet.insertRule(".emoji-word:hover::before { opacity: 0 !important; }")

}