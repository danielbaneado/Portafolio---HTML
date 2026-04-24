const button= document.getElementById("hidden");

button.addEventListener("click", touch)

function touch() {
  var boton= document.getElementById("hidden");
  var img= document.querySelector(".goku");
  var cont= document.querySelector(".evento");
  if (boton.innerText=== "Te esquivé") {
    boton.innerText= "Tocame";
    img.style.display= "none";
    
  } else {
    boton.innerText= "Te esquivé";
    img.style.display= "block";
    cont.style.top = Math.random() * 100 + "%";
    cont.style.left = Math.random() * 100 + "%";
  }
}