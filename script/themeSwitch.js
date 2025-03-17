/*I find out after coding that CSS variables (CSS Custom) are not compatible with Internet Explorer!!!*/

/*The following code checks the local storage on the console log for the theme that the user has selected previously. If the user has selected a theme, the theme is applied to the page. If there is nothing in local storage, secondary check is to see in the PC settings if the user prefers dark mode or light. If the user has not selected a theme, the default theme is applied.*/
// var dragTheme = window.localStorage.getItem("dark"); //get the privious seted value
// var themeCheckBox = document.getElementById("themeCheck"); // get the checkbox element
// themeCheckBox.checked = (dragTheme == "true")? true : false; // set checkbox conditionally base on privious set value if not set then default false

    // let localS = localStorage.getItem('theme');
    // let themeToSet = localS;

    // if(!localS){ /*the !localS is the checker for if there is no preference preexisting on the local storage*/
    //     themeToSet = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'pastel' /*Prefer color scheme does not work on Internet Explorer*/
    // /* I did not do the else statement because I think it is not needed. The default theme is already set in the html tag.*/
    // /*|the above code|I want the local storage theme to have preference, but if there is nothing set, I want the code to check the PC settings if the user does have a Dark or Light mode set. I want secondary theme option to come from here.*/
    // }
    // document.documentElement.setAttribute('data-theme', 'themeToSet') /*setAtributes actually applies theme*/

    function myFunction() { // triger when change value of checkbox
        if(themeCheckBox.checked) {
           document.documentElement.setAttribute('data-theme', 'dark');
           window.localStorage.setItem('dark', true);
        }else {
           document.documentElement.setAttribute('data-theme', 'pastel');
           window.localStorage.setItem('dark', false);
        }
     }
    
/*Notes for me to review later*/







// /*Notes for me to review later*/
// if(!localS){
// themeToSet = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "pastel"; /*Prefer color scheme does not work on Internet Explorer*/
// /* I removed the else statement because it was not needed. The default theme is already set in the html tag.*/
// }
// /*I want the local storage theme to have preference, but if there is nothing set, I want the code to check the PC settings if the user does have a Dark or Light mode set. I want secondary theme option to come from here.*/


// const switchTheme = () => {
// //fetching root elements and data-theme from css

//     const rootElm = document.documentElement;
//     let dataTheme = rootElm.getAttribute('data-theme');

//     const newTheme = (dataTheme === 'pastel') ? 'dark' : 'pastel'; /*usage of ? and : here- the ? means if the fist condition after the ? is true, activate, if not, activate ssecond condition.*/

// /*set atribute to newTheme (atribute=value pairs)*/
//     rootElm.setAttribute('data-theme', newTheme);

// /*I want the browser to remember the theme when the page is reloaded. Ill use the local storage for this.*/
//     localStorage.setItem('theme', newTheme);
// }

// document.querySelector('.themeSwitch').addEventListener('click', switchTheme); //eventlistener to see if click is active on specific button.


