// Gallery
const imagesRef = document.querySelectorAll(".pic");
const observer = new IntersectionObserver((entries, observe) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            entry.target.classList.add("active");
            observe.unobserve;
       } 
    });
}, { rootMargin: "200px", });

imagesRef.forEach((img) => {
    observer.observe(img);
})