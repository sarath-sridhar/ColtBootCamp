

document.addEventListener("DOMContentLoaded",()=>{

    var maxScore=1;
    var player1Score=0;
    var player2Score=0;
    var player3Score=0;

    const player1Button=document.querySelector("#player1");
    const player2Button=document.querySelector("#player2");
    const player3Button=document.querySelector("#player3");
    const ResetButton=document.querySelector("#Reset");
    const maxScoreField=document.querySelector("#maxScoreField");
    const player1ScoreDisplay= document.querySelector("#player1Score");
    const player2ScoreDisplay= document.querySelector("#player2Score");
    const player3ScoreDisplay= document.querySelector("#player3Score");

    resetScores();

    player1Button.addEventListener("click",()=>{
            UpdatePlayerScore("player1");  
    })
    player2Button.addEventListener("click",()=>{
            UpdatePlayerScore("player2");
    })

    player3Button.addEventListener("click",()=>{
            UpdatePlayerScore("player3");
    })

    ResetButton.addEventListener("click",resetScores);

    maxScoreField.addEventListener("change",()=>{
        setMaximumScore(parseInt(maxScoreField.value));
        })

    function UpdatePlayerScore(playerName)
    {
        switch (playerName){
            case "player1":
                    player1Score++;
                    refreshScoreCard();
                    printData();
                    if(player1Score>=maxScore){
                        winnerAnnouncement("Player1");
                        resetScores();
                        refreshScoreCard();
                    }
                break;
            case "player2":
                    
                    player2Score++;
                    refreshScoreCard();
                    printData();
                    if(player2Score>=maxScore){
                        winnerAnnouncement("Player2");
                        resetScores();
                        refreshScoreCard();
                    }
                break;
            case "player3":
                    player3Score++;
                    refreshScoreCard();
                    printData();
                    if(player3Score>=maxScore)
                    {
                        winnerAnnouncement("Player3");
                        resetScores();
                        refreshScoreCard();
                    }
                break;
        }

    }

    function setMaximumScore(inputScore)
    {
        maxScore=inputScore;
        refreshScoreCard();
    }

    function resetScores()
    {
        setMaximumScore(0);
        player1Score=0;
        player2Score=0;
        player3Score=0;
        maxScoreField.value=0;
        refreshScoreCard();
    }

    function winnerAnnouncement(playerName)
    {
        alert(playerName + "is the winner");
    }
        
    function refreshScoreCard()
    {
        player1ScoreDisplay.innerHTML=("player1: "+player1Score+"/"+maxScore);
        player2ScoreDisplay.innerHTML=("player2: "+player2Score+"/"+maxScore);
        player3ScoreDisplay.innerHTML=("player3: "+player3Score+"/"+maxScore);
    }

    function printData()
    {
        console.log("player1Score");
        console.log("player2Score");
        console.log("player3Score");
        console.log("maxScore");
        console.log("player1Score");

    }


});

