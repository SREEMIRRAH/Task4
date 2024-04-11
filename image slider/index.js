var slideIndex = 0;
showSlide(slideIndex);

function prevSlide() {
  showSlide(slideIndex -= 1);
}

function nextSlide() {
  showSlide(slideIndex += 1);
}

function showSlide(n) {
  var slides = document.getElementsByClassName("slide");
  if (n >= slides.length) { 
    slideIndex = 0; 
  }
  if (n < 0) { 
    slideIndex = slides.length - 1; 
  }
  slides[slideIndex].style.display = "block";
}
