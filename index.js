document.addEventListener("DOMContentLoaded", () => {
  
  document.querySelectorAll(".pro_pics").forEach((slideshow) => {
    let images = slideshow.querySelectorAll("img");
    if (images.length === 0) return; 

    let index = 0;
    images[index].classList.add("active");

    setInterval(() => {
      images[index].classList.remove("active");
      index = (index + 1) % images.length;
      images[index].classList.add("active");
    }, 3000);
  });
});

