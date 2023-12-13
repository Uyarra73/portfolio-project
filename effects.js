let sideMenu = document.getElementById("side-menu");

function openMenu(){
    sideMenu.style.right = "0";
}

function closeMenu(){
    sideMenu.style.right = "-200px"
}

const submitButton = document.getElementById("submit-btn")
const formReset = document.getElementById("myForm")


//submitButton.addEventListener("click", function(){
 //   formReset.reset()
//})