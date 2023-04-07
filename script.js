const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
bar.addEventListener('click' , () => {
    nav.classList.add('active');
})
}

if (close) {
    close.addEventListener('click' , () => {
        nav.classList.remove('active');
    })
    }

    const carouselImages = document.querySelector('.carousel-images');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let counter = 0;
    const size = carouselImages.children[0].clientWidth;
    
    nextBtn.addEventListener('click', () => {
      if (counter >= carouselImages.children.length - 1) return;
      counter++;
      carouselImages.style.transform = `translateX(-${size * counter}px)`;
    });
    
    prevBtn.addEventListener('click', () => {
      if (counter <= 0) return;
      counter--;
      carouselImages.style.transform = `translateX(-${size * counter}px)`;
    });
    
    