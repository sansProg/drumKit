var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// "queryselector all" returns an array of all the selectors having the class .drum 

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    // Here, this refers to the button having class of .drum

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
//   addeventlistener adds an event listener which, here, performs the anonymous function specified as 2nd parameter when the event specified in 1st parameter occurs
}

document.addEventListener("keypress", function (evt) {
  makeSound(evt.key);

  buttonAnimation(evt.key);
});
// Here , when keypress happens on keyboard , the 2nd parameter or anonymous function is called whose parameter evt will be passed an object containing many properties about the key pressed and this object is passed in by "keypress". event.key gets you the key name which is pressed 

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
    //   these above 2 lines are used to play a sound in javascript
      break;

    case "a":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(key);
  }
}

// animation for the button to look like it is pressed
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed"); 
//   classlist contains all the classes of that selector in the form of arrays and to add another class, .add is used

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
//   this timeout function is used to perform a function afater specified time, here it removes pressed class from the button after 0.1 seconds
}
