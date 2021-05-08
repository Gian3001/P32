const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImage;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImage();

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImage)
    background(backgroundImage);
    

    Engine.update(engine);

    // write code to display time in correct format here

}

async function getBackgroundImage(){

    // write code to fetch time from API
    var response = await fetch ("https://worldtimeapi.org/api/timezone/Europe/London");
    //change the data in JSON format
    var responseJSON = await response.json(); 
    var datetime = responseJSON.datetime;
    // write code slice the datetime
    var hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(hour>=04&&hour<=06){bg = "sunrise1.png"}
    else if(hour>=07&&hour<=09){bg = "sunrise2.png"}
    else if(hour>=10&&hour<=12){bg = "sunrise3.png"}
    else if(hour>=13&&hour<=15){bg = "sunrise4.png"}
    else if(hour>=16&&hour<=18){bg = "sunrise5.png"}    
    else if(hour>=19&&hour<=20){bg = "sunrise6.png"}
    else if(hour>=21&&hour<=23){bg = "sunset7.png"}
    else{bg = "sunset8.png"}
    backgroundImage=loadImage(bg);

    console.log(response)
    console.log(responseJSON)
    console.log(hour)
    //load the image in backgroundImg variable here

}
