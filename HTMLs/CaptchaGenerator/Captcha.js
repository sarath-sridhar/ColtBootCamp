//on load view
document.addEventListener("DOMContentLoaded",()=>{
  onloadView();
})

function onloadView(){
  var captchaLetters = getLettersforCaptcha(6);
  var captcha=buildCaptcha(captchaLetters);
  document.getElementById("captcha").appendChild(captcha); // adds the canvas to the body element
  
  //Submit captcha
  document.getElementById("submitCaptchaButton").addEventListener("click", function () {
    validateCaptcha(captchaLetters);
  });

}

function validateCaptcha(captchaLetters){
  var submittedValue=document.getElementById("captchaField").value;
  if(submittedValue==captchaLetters){
    alert("correct!")
  } else alert("Wrong!");

}

//returns random letters to be displayed in captcha
function getLettersforCaptcha(captchalength) {
  var charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var captcha = [];
  for (var i = 0; i < captchalength; i++) {
    var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
    //below code will not allow Repetition of Characters
    if (captcha.indexOf(charsArray[index]) == -1)
      captcha.push(charsArray[index]);
    else i--;
  }
  captcha = captcha.join("");
  return  captcha;
  
}

//Builds captcha for given letters
function buildCaptcha(captchatoDisplay)
{
   //clear the contents of captcha div first 
  document.getElementById('captcha').innerHTML = "";
  //Build Canvas element to display capcha
  var canvas = document.createElement("canvas");
  canvas.id = "captcha";
  canvas.width = 100;
  canvas.height = 50;

  var canvasText = canvas.getContext("2d");
  canvasText.font = "25px Georgia";
  canvasText.strokeText(captchatoDisplay, 0, 30);
  return(canvas);
 
}


