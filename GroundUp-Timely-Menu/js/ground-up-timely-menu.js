//get the menu div
const currentMenuDiv = document.getElementById('current-menu');
//make an a-tag to go in the div
const menuLink = document.createElement('a');
//assign href, link text and class
menuLink.className = "button";
//output the a-tag to the div
currentMenuDiv.appendChild(menuLink);

//instantiate the date class
const dt = new Date();
let hr = dt.getHours();
let min = dt.getMinutes();

//declare vars to hold href and text, the values of which whill be set dynamically in an if-else
let menuHref = "";
let menuText = "";

//hr = 19
//set the href and text based on current hour
//at 10:30 switch to lunch menu
if(hr < 11){
    if(hr == 10){
        if(min < 30){//check for min
            menuHref = "breakfast.html";
            menuText = "Breakfast Menu";
        } else { //it's between 10:30 and 10:59
            menuHref = "lunch.html";
            menuText = "Lunch Menu";
        }
    } else {//hr is less than 11 and not 10, so must be 9 or less
        menuHref = "breakfast.html";
        menuText = "Breakfast Menu";
    }
} else if(hr<15){
    menuHref = "lunch.html";
    menuText = "Lunch Menu";
} else {
    menuHref = "dinner.html";
    menuText = "Dinner Menu";
}

//assign the variables to href and text
menuLink.href = menuHref;
menuLink.textContent = menuText;
