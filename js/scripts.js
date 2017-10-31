

// End of button scroll 

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

function timeout() {
    setTimeout(snapchatPngFlip, '1000');
}

function snapchatPngFlip() {
    let snap = document.getElementById("snapchatLogo");
    snap.src = "img/snapcode.svg";
};

// End of Snapchat Function



