var pathToGenerateImg = "../img/snapcode.svg"; // path to generate
var pathToLoadImg = "../img/SC.png"; // path to load img

function showLoad(){
    document.getElementById('Generate1').src = "../img/SC.png";
    setTimeout(showCode, 5000);
}

function showCode(){
    document.getElementById('Generate1').src = "../img/snapcode.svg" ;
}