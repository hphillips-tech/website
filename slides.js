let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Automatic slideshow
let slideInterval;

function startSlideShow() {
  slideInterval = setInterval(() => {
    plusSlides(1);
  }, 5000); // Change 2000 to the desired interval in milliseconds
}

function stopSlideShow() {
  clearInterval(slideInterval);
}

// Start automatic slideshow
startSlideShow();

// Pauses the slideshow when hovering over the slideshow container
let slideshowContainer = document.getElementById('slideshow-container');
slideshowContainer.addEventListener('mouseenter', stopSlideShow);
slideshowContainer.addEventListener('mouseleave', startSlideShow);

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

