function setThemeCookie(current_theme) {
	const cookieName = "site_theme";
	const default_expiration = 3600000*24*350 // 350 days
	var today = new Date();
	var expire = new Date();

	expire.setTime(today.getTime() + default_expiration);
	document.cookie = cookieName+"="+current_theme
		+ ";expires="+expire.toGMTString()+";path=/;";
}
	
function readThemeCookie() {
	const cookieName = "site_theme";
	
	var theCookie=""+document.cookie;
	
	var ind=theCookie.indexOf(cookieName+"=");
	
	if (ind==-1) return swap_theme();
	
	var ind1=theCookie.indexOf(";", ind);
	
	if (ind1==-1) ind1=theCookie.length;
	
	return theCookie.substring(ind+cookieName.length+1,ind1);
	
}
	
function loadTheme() {
	return set_theme(readThemeCookie(), skip_anim=true)
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
	
	set_theme(theme);
	
	if (css_stylesheet_counter > CSS_STYLESHEET_COUNTER_SWITCH) {
		colors_dev_mode(theme);
	}
	
	return theme

}
	
theme_swap_anim_process = false
function set_theme(theme, skip_anim=false) {
	
	console.log("Changing theme to " + theme)
	setThemeCookie(theme)
	
	// document.body.classList.add(theme);
	document.documentElement.dataset.theme = theme;
	// document.querySelector('meta[name="theme-color"]')
	// 		.setAttribute('content', getComputedStyle(document.body).getPropertyValue('--c-color-status-bar')); //#F2F0ED
	
	var style = getComputedStyle(document.body)
	code_theme = style.getPropertyValue('--code-theme')
	
	light_code_theme = document.getElementById("code_rouge_styling_light")
	dark_code_theme = document.getElementById("code_rouge_styling_dark")
	if (light_code_theme) {
		light_code_theme.disabled = !(code_theme == "light")
	}
	if (dark_code_theme) {
		dark_code_theme.disabled = !(code_theme == "dark")
	}
	
	
	if (!skip_anim) {
		theme_swap_button = document.getElementById("next_theme");
		theme_swap_indicator = document.getElementById("theme_swap_indicator");
	
		theme_swap_button.classList.add("animation");
		theme_swap_indicator.classList.add("animation");
		
		if (theme_swap_anim_process) {
			clearTimeout(theme_swap_anim_process)
		}
		theme_swap_anim_process = setTimeout(() => {
			theme_swap_button.classList.remove("animation");
			theme_swap_indicator.classList.remove("animation");
		}, 500);
	}
	
}
	
function manual_set_theme(theme) {
	var themes = get_themes();
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
		//	 if (themes.includes(existingClass)) {
		//	 document.body.classList.remove(existingClass);
		//	 }
		// });
		Array.prototype.some.call(document.styleSheets, function(a) {
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

	themes = Array.prototype.map.call(css_color_stylesheet.cssRules, function(a) {
		return a.selectorText.split("data-theme=\"")[1].split("\"")[0]
	})

	return themes.filter((value, index, array) => array.indexOf(value) === index);

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

