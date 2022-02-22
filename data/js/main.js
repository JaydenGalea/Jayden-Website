if (window.location.href == "https://jaydendev.netlify.app/") {
     window.location.href = "https://jaydengalea.ddns.net";
}

header = document.getElementById("header");
facedown = document.getElementById("facedown");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 300) {
    header.className = "headerf show"
    header.style.transition = "1s all"

    facedown.style.opacity = "0"
    facedown.style.animation = "hide 1s forwards";
  } else {
    header.className = "headerf hide"
    header.style.transition = "0.2s all"

    facedown.style.opacity = "1";
    facedown.style.animation = "updownglow 1.5s ease-in-out infinite alternate";
  }
};

window.addEventListener("scroll", myScrollFunc);

// Add to ALL images
// https://www.w3schools.com/css/css3_images.asp

//var modal = document.getElementById('myModal');
//var img = document.getElementById('myImg');
//var modalImg = document.getElementById("img01");
//var captionText = document.getElementById("caption");
//img.onclick = function(){
//  modal.style.display = "block";
//  modalImg.src = this.src;
//  captionText.innerHTML = this.alt;
//}
//
//// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];
//
//// When the user clicks on <span> (x), close the modal
//span.onclick = function() {
//  modal.style.display = "none";
//}