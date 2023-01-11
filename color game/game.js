let nrOfLoops = 5;
let loopCounter = 0;
let colors = ["red", "blue", "yellow", "green", "brown", "purple", "orange", "pink", "aqua"];
let aHits = [0, 0, 0];

function shuffle(colors)
{   
    colors.sort(function(a, b){return 0,5 - Math.random()});
    return colors;
}

function setColor()
{   
    loopCounter++;
    //array shuffle
    colors = shuffle(colors); 
    
    let elements = document.getElementsByClassName("gameBlok");
            
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.style.backgroundColor = colors[i];              
    }

    let element = document.getElementById("searchColor");  
    let x = Math.floor(Math.random() * 9);

    element.style.backgroundColor = colors[x]; 

    if(loopCounter == 9)
    {
        StopTheGame();
    }
}

function testColor(el)
{
    console.log("in function testColor");
    //welke kleur geklikt is
    let colorClick = el.style.backgroundColor;
 
    //welke kleur de basiskleur is
    let element = document.getElementById("searchColor");
    let colordiewezoeken = element.style.backgroundColor;

    //score
    let elementscore = document.getElementById("score");

    if ( colorClick == colordiewezoeken)
    {
        elementscore.innerHTML += "<div>" + loopCounter + " raak</div>";
        aHits[0]++;
        aHits[2]--;
        console.log("Correct" + aHits);
    }
    else
    {
        elementscore.innerHTML += "<div>" + loopCounter + " mis</div>";
        aHits[1]++;
        aHits[2]--;
        console.log("Incorrect" + aHits);
    }
}

function load()
{
    //de kleuren er in laden
    setColor();

    let elements = document.getElementsByClassName("gameBlok");

    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.addEventListener( "click", function(){
            testColor(element)
        });
        
    }
}

var TimerId;
function StartTheGame()
{
    TimerId = setInterval(setColor,1500);
    document.getElementById("start").disabled = true;
}
function StopTheGame()
{
    clearInterval(TimerId);
    document.getElementById("start").disabled = false;
    console.log("aHits = " + aHits);
    document.getElementById('eindscore').innerHTML = "<hr>Raak: " + aHits[0] + "<br>Mis: " + aHits[1] + "<hr>";
}   

