let isUserScrolling = false;

// Function to animate the scrolling
const animateScrollTop = (element, duration, distance, fps) => {
    let scrollTop = 0;
    const increment = distance / (duration / 1000 * fps);

    const scrollLoop = setInterval(() => {
        if (!isUserScrolling && scrollTop < distance) {
            scrollTop += increment;
            element.scrollTop = Math.round(scrollTop);
        } else {
            clearInterval(scrollLoop);
        }
    }, 1000 / fps);
};

const setBottom = (pos, target) => {
    target.style.bottom = `-${pos}px`;
};

// Init 
document.addEventListener("DOMContentLoaded", () => {

    const galleryWrap = document.querySelector('.work');
    const galleryScrollUp = document.querySelector('.gallery-2 .gallery__wrap');

    const duration = 10000;
    const distance = galleryWrap.scrollHeight - galleryWrap.clientHeight;
    const fps = 60;

    animateScrollTop(galleryWrap, duration, distance, fps);

    galleryWrap.addEventListener('scroll', (event) => {
        const container = event.target;
        const bottom = Math.round(container.scrollTop);
        setBottom(bottom, galleryScrollUp);
    });

    galleryWrap.addEventListener('wheel', (event) => {
        isUserScrolling = true;
    })

});