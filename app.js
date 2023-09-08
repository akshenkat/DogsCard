function getDogImages() {
    fetch('https://dog.ceo/api/breeds/image/random/10')
      .then(response => response.json())
      .then(data => {
        const images = data.message;
        showCarousel(images);
      })
      .catch(error => console.log(error));
  }
  
  function showCarousel(images) {
    let index = 0;
    const carouselImg = document.getElementById('carousel-image');
  
    const interval = setInterval(() => {
      carouselImg.setAttribute('src', images[index]);
      index = (index + 1) % images.length;
    }, 3000);
  }
  
  getDogImages();




