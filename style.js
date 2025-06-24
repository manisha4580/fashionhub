/* <script>
    let scrollContainer=document.querySelector(".gallery");
    let backBtn=document.getlementById("backBtn");
    let nextBtn=document.getlementById("nextBtn");

    scrollContainer.addEventListener("wheel",(evt)= {
        evt.preventDefault(),
        scrollContainer.scrollLeft += evt.deltaY,
    });

    nextBtn.addEventListener("click",()={
        scrollContainer.style.scrollBehaviour="smooth",
        scrollContainer.scrollLeft += 900
    });

    backBtn.addEventListener("click",()={
        scrollContainer.style.scrollBehaviour="smooth",
        scrollContainer.scrollLeft +=900
        }
     );
    </script> */
    let currentIndex = 0;

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slideWidth = 600; // width of each slide (same as the container width)

const moveSlider = () => {
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // Move slider by the width of one slide
};

document.querySelector('.arrow-left').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    moveSlider();
  } else {
    // Loop back to the last image
    currentIndex = totalSlides - 1;
    moveSlider();
  }
});

document.querySelector('.arrow-right').addEventListener('click', () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    moveSlider();
  } else {
    // Loop back to the first image
    currentIndex = 0;
    moveSlider();
  }
});
