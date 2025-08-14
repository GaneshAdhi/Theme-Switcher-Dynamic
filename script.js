let bgContainer = document.getElementById("bgContainer");

let themeUserInputEl = document.getElementById("themeUserInput");

let headEl = document.getElementById("heading");

let imgLightEl = 'url("https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png")';

let imgDarkEl = 'url("https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png")';


function changeTheme(event) {
    if (event.key === "Enter") {
        let inputVal = themeUserInputEl.value;

        if (inputVal === "Dark") {
            bgContainer.style.backgroundImage = imgDarkEl;
            headEl.style.color = "white";
        } else if (inputVal === "Light") {
            bgContainer.style.backgroundImage = imgLightEl;
            headEl.style.color = "#014d40";
        } else {
            alert("enter the valid theme");
        }
    }
}





themeUserInputEl.addEventListener("keydown", changeTheme);
