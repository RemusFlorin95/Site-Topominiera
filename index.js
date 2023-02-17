// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) 
  {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) 
  {
    myIndex = 1
  }    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000);    
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption

function myModal(n){
  if (n == 1)
  {
    var img = document.getElementById("myImg1");
  }else if (n == 2){
    var img = document.getElementById("myImg2");
  }else{
    var img = document.getElementById("myImg3");
  }
  
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
    console.log("it has been clicked")
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}