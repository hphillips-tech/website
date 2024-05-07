let slideIndex = 1;
let slideInterval;

showSlides(slideIndex);
startSlideShow();

function plusSlides(n) {
  clearInterval(slideInterval); // Clear previous interval
  showSlides(slideIndex += n);
  startSlideShow(); // Restart the slideshow
}

function startSlideShow() {
  slideInterval = setInterval(() => {
    plusSlides(1);
  }, 5000); // Change 2000 to the desired interval in milliseconds
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
