let menu = document.querySelector('.navbar ')
let submenu = document.querySelector('.submenuhov')
let producthover = document.getElementById('submenuco')
const timers = document.querySelectorAll('.timercoustom');
const slider = document.querySelector('.course-container');
const carousel = document.querySelector('.newest-course');
const next = document.getElementById('prevslider');
const prev = document.getElementById('nextslider');
const backtotop = document.querySelector('.back-to-top')
const overley = document.querySelector('.overley')
let login = document.getElementById('loginsite')
let logginform = document.getElementById('loginnnform')
console.log(timers);
document.body.style.overflow = 'hidden'; // Corrected typo here

let loderr = document.querySelector('.lds-roller');
menu.style.display = 'none'
window.addEventListener('load', () => {
  setTimeout(() => {
    loderr.classList.add('hidden');
    menu.style.display = 'flex';
    loderr.style.zIndex = 0;
    document.body.style.overflow = 'visible';
  }, 0);
  // loderr.classList.remove('loderr')
})

setInterval(function () {
  let today = new Date();
  var h = today.getHours().toString().padStart(2, '0');
  var m = today.getMinutes().toString().padStart(2, '0');
  var s = today.getSeconds().toString().padStart(2, '0');
  timers.forEach(Element => {
    Element.innerHTML = `${h}:${m}:${s}`;
  });

}, 1000);

let $ = document;
let coustoscrol = $.getElementById('scrol'); // تغییر نام متغیر به coustoscrol
window.addEventListener('scroll', function () {
  let scroll = window.scrollY;
  let scrolhight = document.body.clientHeight;
  let windowheight = window.innerHeight;

  let scrollpersen = scroll / (scrolhight - windowheight);
  let roundwindowheight = Math.round(scrollpersen * 100);
  coustoscrol.style.width = roundwindowheight + '%';
});


function isScreenWidthAbove1000px() {
  return window.innerWidth > 1000;
}

producthover.addEventListener('mouseenter', () => {
  if (isScreenWidthAbove1000px()) {
    submenu.style.display = 'block';
    submenu.style.animation = 'slideIn 0.5s ease-in-out';
  }
});

producthover.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!submenu.matches(':hover')) {
      if (isScreenWidthAbove1000px()) {
        submenu.style.display = 'none';
      }
    }
  }, 200); // Adjust the delay if needed
});

submenu.addEventListener('mouseleave', () => {
  if (isScreenWidthAbove1000px()) {
    submenu.style.display = 'none';
  }
});



// slider
// slider
const courseItems = document.querySelectorAll('.course-container .course');
const width = parseFloat(window.getComputedStyle(courseItems[0]).width);
let direction = 1;

function nextslider() {
  direction = 1;
  carousel.style.justifyContent = 'flex-start';
  slider.style.transform = `translate(-${width}px)`;
  // Add a setTimeout for 5 seconds
  setTimeout(() => {
    // Your code to be executed after 5 seconds
  }, 5000);
}

function provsider() {
  if (direction === 1) {
    direction = -1;
    slider.prepend(slider.lastElementChild);
  }
  carousel.style.justifyContent = 'flex-end';
  slider.style.transform = `translate(${width}px)`;
  // Add a setTimeout for 5 seconds
  setTimeout(() => {
    // Your code to be executed after 5 seconds
  }, 5000);
}

// Function for automatic slide change every 2 seconds
function autoSlide() {
  setInterval(function () {
    direction = 1; // Set direction to 1 before the transition
    carousel.style.justifyContent = 'flex-start';
    slider.style.transform = `translate(-${width}px)`;
  }, 2000);
}

// Call the function to start automatic slide
autoSlide();

slider.addEventListener('transitionend', function () {
  if (direction === 1) {
    slider.appendChild(slider.firstElementChild);
  } else {
    slider.prepend(slider.lastElementChild);
  }
  slider.style.transition = 'none';
  slider.style.transform = 'translate(0)';
  setTimeout(() => {
    slider.style.transition = 'all 300ms';
  });
}, false);
// sql=\\\=\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
let productsContainer = document.querySelector('.productcontainerall')

let productsArray = [
  { id: 6, title: 'کاسیلو(casilo)', price: '4800,000', img: 'img/watch/concept-design-hand-watch_985323-11581.jpg' },
  { id: 4, title: 'اسپرت(sport)', price: '1800,000', img: 'img/watch/rolex-watch-with-brand-name-brand-it_905510-6718.jpg' },
  { id: 5, title: '(rolex)رولیکس', price:' 3200,000', img: 'img/watch/rolex-famous-brand-department-store-taipei_662214-259663.jpg' },
  { id: 9, title: 'اسپرت(sport)', price: '1800,000', img: 'img/watch/rolex-watch-with-brand-name-brand-it_905510-6718.jpg' },
  { id: 8, title: '(rolex)رولیکس', price:' 3200,000', img: 'img/watch/rolex-famous-brand-department-store-taipei_662214-259663.jpg' },
  { id: 7, title: 'کاسیلو(casilo)', price: '4800,000', img: 'img/watch/concept-design-hand-watch_985323-11581.jpg' },
  { id: 1, title: 'چوپارد (ch)', price: '1800,000', img: 'img/men-s-wrist-watch-black-tie-hot-cup-coffee-smartphone-wooden-table-black-envelope-with-place-text_251072-98.jpg' },
 { id: 2, title: 'هبلو (Hublot)', price: '2100,000', img: 'img/black-luxury-watch-black-coals-background_158023-2040.jpg' },
  { id: 3, title: 'کارتیه (Cartier)', price: '4500,000', img: 'img/watch/gold-silver-watch-with-word-time-face_662214-95392.jpg' },
]

productsArray.forEach(function (product) {
  productsContainer.insertAdjacentHTML('beforeend', `
    <div class="col-10 col-md-6 col-lg-4 mx-auto my-3">
      <div class="card watch-card animate__zoomIn animate__animated wow">
        <img src="${product.img}" class="img-fluid card-img-top" alt="">
        <div class="card-body">
          <div class="watch-info d-flex justify-content-between">
            <div class="card-text text-uppercase text-right">
              <h6>مدل</h6>
              <h6 class="font-weight-bold">${product.title}</h6>
            </div>
            <h5 class="car-value py-2 px-3 align-self-center">
              <a href="product.html?id=${product.id}">
                <span class="car-price" style='color = #0000'>
                  ${product.price} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-cart4" viewBox="0 0 16 16">
                    <path
                      d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                  </svg>
                </span>
              </a>
            </h5>
          </div>
        </div>
        <div class="card-footer text-uppercase d-flex justify-content-between text-right">
          <p><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-water" viewBox="0 0 16 16">
                <path
                  d="M.036 3.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 3.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 6.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65z" />
              </svg></span>ضد آب</p>
          <p><span><i class="fas fa-cogs"></i></span>اتوماتیک</p>
          <p><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-smartwatch" viewBox="0 0 16 16">
                <path d="M9 5a.5.5 0 0 0-1 0v3H6a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 .5-.5z" />
                <path
                  d="M4 1.667v.383A2.5 2.5 0 0 0 2 4.5v7a2.5 2.5 0 0 0 2 2.45v.383C4 15.253 4.746 16 5.667 16h4.666c.92 0 1.667-.746 1.667-1.667v-.383a2.5 2.5 0 0 0 2-2.45V8h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H14v-.5a2.5 2.5 0 0 0-2-2.45v-.383C12 .747 11.254 0 10.333 0H5.667C4.747 0 4 .746 4 1.667M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3" />
              </svg></span>سبک و شیشه‌ای</p>
        </div>
      </div>
    </div>
  `);
});
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
      backtotop.classList.add('active')
  } else {
      backtotop.classList.remove('active')
  }
})
backtotop.addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth' // افزودن این بخش به انیمیشن اسکرول بالا اضافه می‌کند
  });
})
// over ley 
overley.addEventListener('click', ()=> {
  overley.classList.remove('activeov')
  logginform.classList.remove('active')
})


login.addEventListener('click', ()=> {
  overley.classList.add('activeov')
  logginform.classList.add('active')
})
window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0.8 * window.innerHeight) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});