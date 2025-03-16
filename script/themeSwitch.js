// document.addEventListener('DOMContentLoaded', function() {
//     const themeSwitch = document.querySelector('.themeSwitch');
//     const root = document.documentElement;

//     themeSwitch.addEventListener('click', function() {
//         if (root.style.getPropertyValue('--bg-color') === 'black') {
//             root.style.setProperty('--bg-color', 'white');
//             root.style.setProperty('--text-color', 'black');
//         } else {
//             root.style.setProperty('--bg-color', 'black');
//             root.style.setProperty('--text-color', 'white');
//         }
//     });
// });
// This was what ai gave me when i asked for a solution to my themeswich. I just wanted some guidence.


/*I find out after coding that CSS variables (CSS Custom) are not compatible with Internet Explorer!!!*/
// My turn to try and make it work.
/*The following code checkes the local storage for the theme that the user has selected. If the user has selected a theme, the theme is applied to the page. If there is nothing in local storage, secondary check is to see in the PC settings if the user prefers dark mode or light. If the user has not selected a theme, the default theme is applied.*/
let localS= localStorage.getItem("theme");
let themeToSet = localS;
/* This commented code is to just set the theme according to local storage memory and not for computer settings check as the prefers-color-scheme is not compatible with Internet Explorer
if(localS = dark) {
document.documentElement.setAtributes("data-theme, "dark)
}*/

if(!localS){
themeToSet = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "pastel"; /*Prefer color scheme does not work on Internet Explorer*/
/* I removed the else statement because it was not needed. The default theme is already set in the html tag.*/
}
/*I want the local storage theme to have preference, but if there is nothing set, I want the code to check the PC settings if the user does have a Dark or Light mode set. I want secondary theme option to come from here.*/


const switchTheme = () => {
//fetching root elements and data-theme from css

    const rootElm = document.documentElement;
    let dataTheme = rootElm.getAttribute('data-theme');

    const newTheme = (dataTheme === 'pastel') ? 'dark' : 'pastel'; /*usage of ? and : here- the ? means if the fist condition after the ? is true, activate, if not, activate ssecond condition.*/ 

/*set atribute to newTheme (atribute=value pairs)*/ 
    rootElm.setAttribute('data-theme', newTheme);

/*I want the browser to remember the theme when the page is reloaded. Ill use the local storage for this.*/
    localStorage.setItem('theme', newTheme);
}

document.querySelector('.themeSwitch').addEventListener('click', switchTheme); //eventlistener to see if click is active on specific button.


