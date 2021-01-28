'use strict';
 
 {
   const images = [
    //  'img/pic00.png',
    //  'img/pic01.png',
    //  'img/pic02.png',
    //  'img/pic03.png',
    //  'img/pic04.png',
    //  'img/pic05.png',
    //  'img/pic06.png',
    //  'img/pic07.png',
    'img2/00.jpg',
    'img2/01.jpg',
    'img2/02.jpg',
    'img2/03.jpg',
    'img2/04.jpg',
    'img2/05.jpg',
    'img2/06.jpg',
    'img2/07.jpg',

   ];

   let currentIndex = Math.floor(Math.random() * 8);

   const mainImage = document.getElementById('main');
   mainImage.src = images[currentIndex];

   images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image;

    const li = document.createElement('li');
    if (index === currentIndex) {
      li.classList.add('current');
    }
    li.addEventListener('click', () => {
      mainImage.src = image;
      const thumbnails = document.querySelectorAll('.thumbnails > li');
      thumbnails[currentIndex].classList.remove('current');
      currentIndex = index;
      thumbnails[currentIndex].classList.add('current');
    });

    li.appendChild(img);
    document.querySelector('.thumbnails').appendChild(li);
   });

   const prev = document.getElementById('prev');
   prev.addEventListener('click', () => {
    let target = currentIndex - 1;
    if (target < 0) {
      target = images.length - 1;
    }
    document.querySelectorAll('.thumbnails > li')[target].click();
   });


   const next = document.getElementById('next');
   next.addEventListener('click', () => {
    let target = currentIndex + 1;
    if (target === images.length) {
      target = 0;
    }
    document.querySelectorAll('.thumbnails > li')[target].click();
   });

   let timeoutId;

   function playSlideshow() {
     timeoutId = setTimeout(() => {
      next.click();
      playSlideshow();
    }, 3000);
   }
   
   let isPlaying = false;

   const play = document.getElementById('play');
   play.addEventListener('click', () => {
     if (isPlaying === false) {
       playSlideshow();
       play.textContent = '止めるわ';
     } else {
       clearTimeout(timeoutId);
       play.textContent = '始めるで';
     }
     isPlaying = !isPlaying;
   });
 }