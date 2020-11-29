document.addEventListener("DOMContentLoaded",()=>{

    let rgbSetList=[];
    let answerRGBSet={};
    let NoofTiles=6;
    let isEasy=false;
    let noOfEasyTiles=3;
    let noOfHardTiles=6;
    let rgbset={};
    let tablets=document.querySelectorAll(".tablet");
    const questionDisplayItem = document.querySelector("#RGBQuestion");
    const resultDisplayItem = document.querySelector("#resultDisplayItem");
    const refreshButton= document.querySelector("#newQuiz");
    const easyButton= document.querySelector("#easy");
    const hardButton= document.querySelector("#hard");

    function createRGBSet(){

        let rgbset = new Object();
            rgbset.red=generateRGBNumber(),
            rgbset.blue=generateRGBNumber(),
            rgbset.green=generateRGBNumber()
        return rgbset
    }

    function generateRGBNumber(){

        return Math.round(Math.random()*255);
    }

    function setTabletColor(currentTablets){
        let localrgbSetList=[];
        currentTablets.forEach(singleTablet => {
            let currentRGBSet = createRGBSet();
            localrgbSetList.push(currentRGBSet);
            singleTablet.style.backgroundColor="rgb("+ currentRGBSet.red+","+currentRGBSet.blue+","+currentRGBSet.green+")";
            singleTablet.addEventListener("click",onclickTablet);
        });
        rgbSetList=localrgbSetList;

    }

    function pickQuestionRGB(){
        let randomNumber= Math.round(Math.random()*tablets.length);
        answerRGBSet=rgbSetList[randomNumber];
    }

    function displayQuestion(){

        questionDisplayItem.innerHTML="rgb("+answerRGBSet.red+","+answerRGBSet.blue+","+answerRGBSet.green+")";
    }

    function onclickTablet(){

        if((""+this.style.backgroundColor)=="rgb("+answerRGBSet.red+", "+answerRGBSet.blue+", "+answerRGBSet.green+")"){
            resultDisplayItem.innerHTML = "Validating...";
            setTimeout(() => {
                resultDisplayItem.innerHTML = "Correct Answer!";
            }, 300);
           
        }
        else{
            resultDisplayItem.innerHTML = "Validating...";
            setTimeout(() => {
                resultDisplayItem.innerHTML = "Sorry, wrong Answer!";
                this.style.display="none";
            }, 300);
        }
        
    }

    function showHideTablets(currentDisplay,tablets){
        tablets.forEach(singleTablet => {
            singleTablet.style.display=currentDisplay;
        });
    }

    function onclickEasy(){
        isEasy=true;
        tablets=document.querySelectorAll(".tabletset1 > .tablet");
        let tablets2=document.querySelectorAll(".tabletset2 > .tablet");
        showHideTablets("inline",tablets);
        showHideTablets("none",tablets2);
        setTabletColor(tablets); 
        pickQuestionRGB();
        displayQuestion();        

    }

    function onclickHard(){
        isEasy=false;
        tablets=document.querySelectorAll(".tablet");
        showHideTablets("inline",tablets);
        setTabletColor(tablets);
        pickQuestionRGB();
        displayQuestion();        
    }


    function onclickRefresh(){
        resultDisplayItem.innerHTML = "";
       if(isEasy=false){
        onclickHard();
       }else
        onclickEasy();
    }

    //start
    refreshButton.addEventListener("click",onclickRefresh);
    easyButton.addEventListener("click",onclickEasy);
    hardButton.addEventListener("click",onclickHard);
    
     onclickHard();

})

