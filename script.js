
// Get the navigation element
const nav = document.querySelector('nav');

// Get the list of navigation items
const navItems = document.querySelectorAll('nav ul li');

// Get the hamburger menu button
const hamburger = document.querySelector('.hamburger');

// Get the search input and search button
const searchInput = document.querySelector('.search-box input[type="text"]');
const searchButton = document.querySelector('.search-box button');

// Toggle navigation menu on hamburger menu click
hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// Close navigation menu when a navigation item is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        nav.classList.remove('show');
    });
});

// Search functionality
searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== '') {
        // Perform search operation (e.g., redirect to search results page or display results)
        alert('Searching for: ' + searchTerm);
    } else {
        alert('Please enter a search term.');
    }
});



//..........promotion-area...........


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Automatic slideshow
setInterval(function() {
    plusSlides(1);
}, 3000); // Change slide every 5 seconds




//------home section-----------

// Add hover effect to product images
const productImages = document.querySelectorAll('.product-card img');

productImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});

// Function to create star ratings
function createStars(rating) {
    const stars = document.createElement('div');
    stars.classList.add('rating');

    for (let i = 0; i < 5; i++) {
        const star = document.createElement('span');
        star.textContent = i < rating ? '★' : '☆';
        stars.appendChild(star);
    }

    return stars;
}

// Add star ratings to product cards
const productInfos = document.querySelectorAll('.product-info');

productInfos.forEach(info => {
    const rating = Math.floor(Math.random() * 5) + 1; // Random rating for demonstration purposes
    const stars = createStars(rating);
    info.appendChild(stars);
});