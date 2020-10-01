document.addEventListener('DOMContentLoaded',()=>{
    const grid = document.querySelector('.grid');
    const doodler = document.createElement('div');
    let doodlerLeftSpace=50;
    let doodlerBottomSpace=120;
    let numberOfPlatforms=5;
    let isGameOver=false;
    let Platforms=[];

    function createDoodler(){
        grid.appendChild(doodler);
        //dont include the dot while passiong the class name just class name is good
        doodler.classList.add("doodler");
        doodler.style.left=doodlerLeftSpace+"px";
        doodler.style.bottom = doodlerBottomSpace+"px";
    }


    function buildPlatform(platformBottomSpace)
    {
        let platform = document.createElement('div');
        platform.classList.add("platform");  
        platform.style.bottom=platformBottomSpace+"px";
        platform.style.left=Math.random()*320 + "px";
        return platform;

    }


    function buildPlatForms()
    {
        let platformGap=600/numberOfPlatforms;
        for(i=0;i<numberOfPlatforms;i++){
            let platformBottomSpace = 100 + (i*platformGap);//verify this line of code
            let createPlatformResult=buildPlatform(platformBottomSpace)
            grid.appendChild(createPlatformResult);
            Platforms.push(createPlatformResult);
        }
    }


    function Start(){
        //try removing this if condition and check if this is working normally
        if(!isGameOver){
            createDoodler();
            buildPlatForms();
        }
    }
    //attach this method to a button
    Start();

})


