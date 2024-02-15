// Add event listeners to buttons
for (var i = 0; i < document.querySelectorAll("button").length; i++) {
   document.querySelectorAll("button")[i].addEventListener("click", function () {
       var buttondf = this.innerHTML;
       makeSound(buttondf);
       buttonAnimation(buttondf);
   });
}

// Add event listener for keypress
document.addEventListener("keypress", function (event) {
   makeSound(event.key);
   animationbutton(event.key);
});

// Function to play sound based on key/button pressed
function makeSound(key) {
   switch (key) {
       case "w":
           var audio = new Audio("tom-1.mp3");
           audio.play();
           break;
       case "a":
           var audio = new Audio("tom-2.mp3");
           audio.play();
           break;
       case "s":
           var audio = new Audio("tom-3.mp3");
           audio.play();
           break;
       case "d":
           var audio = new Audio("tom-4.mp3");
           audio.play();
           break;
       case "j":
           var audio = new Audio("snare.mp3");
           audio.play();
           break;
       case "k":
           var audio = new Audio("crash.mp3");
           audio.play();
           break;
       case "l":
           var audio = new Audio("kick-bass.mp3");
           audio.play();
           break;
       default:
           console.log("Unknown button or key pressed");
   }
}
function animationbutton()
{
   var activebutton=document.querySelector("."+currentkey);
   activebutton.classList.add("pressed");
   setTimeout (function(){
      activebutton.classList.remove("pressed");},100);

   }
   
   