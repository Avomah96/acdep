document.addEventListener("DOMContentLoaded", function () {
    /////// Prevent closing from click inside dropdown
    document.querySelectorAll('.dropdown-menu').forEach(function (element) {
      element.addEventListener('click', function (e) {
        e.stopPropagation();
      });
    });

    // make it as accordion for smaller screens
    if (window.innerWidth < 992) {
      // close all inner dropdowns when parent is closed
      document.querySelectorAll('.navbar .dropdown').forEach(function (everydropdown) {
        everydropdown.addEventListener('hidden.bs.dropdown', function () {
          // after dropdown is hidden, then find all submenus
          this.querySelectorAll('.submenu').forEach(function (everysubmenu) {
            // hide every submenu as well
            everysubmenu.style.display = 'none';
          });
        });
      });

      document.querySelectorAll('.dropdown-menu a').forEach(function (element) {
        element.addEventListener('click', function (e) {
          let nextEl = this.nextElementSibling;
          if (nextEl && nextEl.classList.contains('submenu')) {
            // prevent opening link if link needs to open dropdown
            e.preventDefault();
            console.log(nextEl);
            if (nextEl.style.display === 'block') {
              nextEl.style.display = 'none';
            } else {
              nextEl.style.display = 'block';
            }
          }
        });
      });
    }
  });

document.addEventListener('DOMContentLoaded', (event) => {
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.carousel-image');
    const totalImages = images.length;

    function changeImage() {
      images[currentImageIndex].classList.remove('active');
      currentImageIndex = (currentImageIndex + 1) % totalImages;
      images[currentImageIndex].classList.add('active');
    }

    document.querySelector('.prev').addEventListener('click', function() {
      images[currentImageIndex].classList.remove('active');
      currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
      images[currentImageIndex].classList.add('active');
    });

    document.querySelector('.next').addEventListener('click', changeImage);

    // Autoplay every 5 seconds
    setInterval(changeImage, 5000);
});

// JavaScript
document.querySelector('.read-more-button').addEventListener('click', function() {
  this.style.backgroundColor = '#f44336';
});
