// Function to handle the scroll event and update the navbar's appearance
function userScroll() {
  // Select the navbar element
  const navbar = document.querySelector(".navbar")

  // Add an event listener for the scroll event
  window.addEventListener("scroll", () => {
    // Check if the scroll position is greater than 50 pixels
    if (window.scrollY > 50) {
      // Add the bg-dark and navbar-sticky classes to the navbar
      navbar.classList.add("bg-dark")
      navbar.classList.add("navbar-sticky")
    } else {
      // Remove the bg-dark and navbar-sticky classes from the navbar
      navbar.classList.remove("bg-dark")
      navbar.classList.remove("navbar-sticky")
    }
  })
}

// Wait for the DOM content to be fully loaded before running the userScroll function
document.addEventListener("DOMContentLoaded", userScroll)

// testimonials script

$(document).ready(function () {
  var silder = $(".owl-carousel")
  silder.owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    items: 1,
    stagePadding: 20,
    center: true,
    nav: false,
    margin: 50,
    dots: true,
    loop: true,
    responsive: {
      0: { items: 1 },
      480: { items: 2 },
      575: { items: 2 },
      768: { items: 2 },
      991: { items: 3 },
      1200: { items: 4 },
    },
  })
})
