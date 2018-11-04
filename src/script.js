var popup = document.getElementById('popup');
var button = document.getElementsByClassName("close-popup")[0];
var openButton = document.getElementById("button");

openButton.onclick = function() {
    popup.style.display = "block";
}

button.onclick = function() {
    popup.style.display = "none";
}

// window.onclick = function(event) {
//     if (event.target == popup) {
//         popup.style.display = "none";
//     }
// }

// enable outside click to close^^