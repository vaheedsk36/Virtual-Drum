
var numberOfDrumButtons=document.querySelectorAll(".drum").length;

function audioFile(fileName){
    var audio = new Audio(fileName);
            audio.play();
}

// Detecting keypress
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    activeButton(event.key);
});

// Detecting button press
for(var i=0;i<=numberOfDrumButtons;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function ()    //anonymous function
    {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        activeButton(buttonInnerHTML);
    });
}

// Function to evaluate which key is pressed from both keyboard and and mouse
function makeSound(key){
    switch (key) {
        case "w":
            audioFile("sounds/crash.mp3");
            break;
        case "a":
            audioFile("sounds/kick-bass.mp3");
            break;
        case "s":
            audioFile("sounds/snare.mp3");
            break;  
        case "d":
            audioFile("sounds/tom-1.mp3");
            break;
        case "j":
            audioFile("sounds/tom-2.mp3");
            break;
        case "k":
            audioFile("sounds/tom-3.mp3");
            break;
        case "l":
            audioFile("sounds/tom-4.mp3");
            break;  

    
        default: console.log(buttonInnerHTML)
            break;
    }
}

// This function will help in highlighting the active buttons and add a delay for deselecting the active buttons.
//setTimeout => exceutes the function inside it after the delay specified

function activeButton(activeKey){
    var activeButon = document.querySelector("."+activeKey);
    activeButon.classList.add("pressed");
    setTimeout(function(){
        activeButon.classList.remove("pressed");
    },100);

}





