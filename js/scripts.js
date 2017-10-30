function snapchatPngFlip() {
    let snap = document.getElementById("snapchatLogo");
    if (snap.src == "../img/SC.png") {
        snap.src = "../img/snapcode.svg";
    } else {
        snap.src = "../img/SC.png";
    }
};

// End of Snapchat Function

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0]; 
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// End of Modal================================