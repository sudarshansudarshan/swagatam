// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


//  owl carousel script
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});

//    end owl carousel script 


document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var sliderSection = document.querySelector(".slider_section");
    var serviceSection = document.querySelector(".service_section");
    var aboutSection = document.querySelector(".about_section");
    var windowTop = window.pageYOffset;

    if (sliderSection.getBoundingClientRect().top < window.innerHeight) {
      sliderSection.classList.add("section_visible");
    }
    if (serviceSection.getBoundingClientRect().top < window.innerHeight) {
      serviceSection.classList.add("section_visible");
    }
    if (aboutSection.getBoundingClientRect().top < window.innerHeight) {
      aboutSection.classList.add("section_visible");
    }
  });

  // Trigger scroll event initially to check sections on page load
  window.dispatchEvent(new Event("scroll"));
});

