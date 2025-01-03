// window.onload = function () {
//     // var toc = "";
//     // var headings = document.querySelectorAll("#content h1, #content h2, #content h3, #content h4");

//     // headings.forEach(function (heading) {
//     //     var level = parseInt(heading.tagName.charAt(1));
//     //     // level = (level > 1) ? level - 1 : 1
//     //     // console.log(level)
//     //     var titleText = heading.textContent;
//     //     toc += `<li class='level${level}'><a href="#${heading.id}">${titleText}</a></li>`;
//     //     // heading.innerHTML = `<a name="${anchor}">${titleText}</a>`;
//     // });

//     // document.getElementById("autofill_toc").innerHTML += `<ul>${toc}</ul>`;


//     // wrap_adjust_toc()

//     // addEventListener("resize", (event)=>{ wrap_adjust_toc() });

// };

function toggle_toc() {

    toc_list_elem = document.getElementById('autofill_toc')
    
    if (toc_list_elem.classList.contains("tochidden")) {
        toc_list_elem.classList.remove('tochidden');
        document.getElementById("hide_toc").innerHTML = "hide"
    } else {
        toc_list_elem.classList.add('tochidden');
        document.getElementById("hide_toc").innerHTML = "show"
    }
    
    return false;
};