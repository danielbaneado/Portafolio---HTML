const button= document.getElementById("hidden");

button.addEventListener("mouseenter", touch)

let num= 0;
function touch() {
  let boton= document.getElementById("hidden");
  let img= document.querySelector(".goku");
  let cont= document.querySelector(".evento");
  num++;
  boton.innerText= ("Te esquivé x" + num)
  img.style.display= "block";
  cont.style.top = Math.random() * 100 + "%";
  cont.style.left = Math.random() * 100 + "%";
}