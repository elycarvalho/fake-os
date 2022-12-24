let slideIndex = 1;
showSlides(slideIndex);

function mudaFotos(n) {
  showSlides(slideIndex += n);
}

function fotoAtual(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("fotos");
  let bolinhas = document.getElementsByClassName("bolinha");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < bolinhas.length; i++) {
    bolinhas[i].className = bolinhas[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  bolinhas[slideIndex-1].className += "active";
}