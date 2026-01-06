const container = document.querySelector('.main2');

function autoScroll() {
  if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
    // თუ ბოლომდე მივიდა, დაბრუნდეს დასაწყისში
    container.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    container.scrollBy({ left: 220, behavior: 'smooth' });
  }
}

setInterval(autoScroll, 2000);
