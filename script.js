new Swiper('.swiper', {
  loop: true,

  autoplay: {
    delay: 5000, 
    disableOnInteraction: false, 
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

window.addEventListener('load', () => {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('active');
        }, index * 200);
    });
});



const boxes = document.querySelectorAll('.slide-up');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    })
}, {
  threshold:0.2
});

boxes.forEach(box => {
  observer.observe(box);
});

const box = document.querySelectorAll('.slide-up1');

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  })
}, {
  threshold:0.2
});
box.forEach(box => {
  observer1.observe(box);
});


// ImageZoom
const images = document.querySelectorAll('.zoom');

const observerImg = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const index = Array.from(images).indexOf(entry.target);

      setTimeout(() => {
        entry.target.classList.add('show');
      }, index * 200);

      observer.unobserve(entry.target);
    }
  })
}, {
  threshold:0.2
})

images.forEach(img => observerImg.observe(img));

// ImageZoom

const boxe2 = document.querySelectorAll('.slide-up2');

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {

      // add delay based on order
      setTimeout(() => {
        entry.target.classList.add('show');
      }, index * 200); // 200ms gap between each

    }
  });
}, {
  threshold: 0.2
});

boxe2.forEach(box => {
  observer2.observe(box);
});



// hammenu



const bar = document.querySelector(".ham-container");
const mobileMenu = document.querySelector(".mobile-menu");

bar.addEventListener('click', () => {
  bar.classList.toggle("change");      // animation
  mobileMenu.classList.toggle("active"); // show menu
});


