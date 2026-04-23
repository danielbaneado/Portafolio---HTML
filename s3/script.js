const button= document.getElementById("hidden");

button.addEventListener("click", touch)

function touch() {
  var boton= document.getElementById("hidden");
  var img= document.getElementById("img");
  if (boton.innerText=== "Te esquivé") {
    boton.innerText= "Tocame";
  } else {
    alert("Jaja");
    boton.innerText= "Te esquivé";
  }
}