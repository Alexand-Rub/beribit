document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.mode').forEach((item) =>
        item.addEventListener('click', () => {
            var body = document.querySelector("body");
            body.classList.toggle('dark');
        })
    );
});

var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let lightTheme = "styles/light.css";
    let darkTheme = "styles/dark.css";

    var currTheme = link.getAttribute("href");
    var theme = "";

    if(currTheme == lightTheme)
    {
   	 currTheme = darkTheme;
   	 theme = "dark";
    }
    else
    {    
   	 currTheme = lightTheme;
   	 theme = "light";
    }

    link.setAttribute("href", currTheme);

    Save(theme);
}