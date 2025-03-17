
/*I want the local storage theme to have preference, but if there is nothing set, I want the code to check the PC settings if the user does have a Dark or Light mode set. I want secondary theme option to come from here.*/
const rootElm = document.documentElement;
rootElm.setAttribute('data-theme',  localStorage.getItem('theme'));

const switchTheme = () => {
//fetching root elements and data-theme from css

    const rootElm = document.documentElement; /*rootElm is documentElement*/
    let dataTheme = rootElm.getAttribute('data-theme');

    const newTheme = (dataTheme === 'pastel') ? 'dark' : 'pastel'; /*usage of ? and : here- the ? means if the fist condition after the ? is true, activate, if not, activate ssecond condition.*/

/*set atribute to newTheme (atribute=value pairs)*/
    rootElm.setAttribute('data-theme', newTheme);

/*I want the browser to remember the theme when the page is reloaded. Ill use the local storage for this.*/
    localStorage.setItem('theme', newTheme);
}

document.querySelector('.themeSwitch').addEventListener('click', switchTheme); //eventlistener to see if click is active on specific button.


