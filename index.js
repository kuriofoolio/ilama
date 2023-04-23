function getDetails() {
  let select = document.getElementById("pack");
  let selectedPack = select.options[select.selectedIndex].value;

  let packDetailsElId = "details-el";
  let existingPackDetailsEl = document.querySelector(`#${packDetailsElId}`);
  if (existingPackDetailsEl) {
    existingPackDetailsEl.remove();
  }

  let packDetailsEl = document.createElement("p");
  packDetailsEl.id = packDetailsElId;
  let packDivEl = document.querySelector("#pack-details");

  switch (selectedPack) {
    case "":
      break;

    case "bronze":
      packDetailsEl.innerHTML = `
        <li> 10000Ksh per month</li>
        <li> Aimed to help SMEs on digital marketing</li>
        `;
      break;

    case "silver":
      packDetailsEl.innerHTML = `
      <li> 27000Ksh per month</li>
        <li> 3 social media posts per week</li>
        <li> Social media management and setup</li>
        <li> Google maps profile management </li>
        <li> Maximum of one press release/ marketing emails per month</li>
      `;
      break;

    case "gold":
      packDetailsEl.innerHTML = `
      <li> 34000Ksh per month</li>
      <li> 5 social media posts per week</li>
      <li> Google maps profile management </li>
      <li> Maximum of four press releases/ marketing emails per month</li>
      <li> Quarterly(4) newspaper/TV appearance</li>
      <li> 2 blog posts per month</li>
      <li> 34 % discount on website and corporate email setup</li>
      `;
      break;

    case "platinum":
      packDetailsEl.innerHTML = `
      <li> 50000Ksh per month</li>
      <li> 7 social media posts per week</li>
      <li> Social media management and setup (Instagram, Facebook, Twitter, and LinkedIn)</li>
      <li> Google maps profile management </li>
      <li> At least 6 press releases/marketing emails per month</li>
      <li> Quarterly(4) newspaper/TV appearance</li>
      <li> 4 blog posts per month</li>
      <li> 50 % discount on website and corporate email setup</li>
      `;
      break;

    case "additional":
      packDetailsEl.innerHTML = `
      <li> Email set up-5000Ksh </li>
      <li> Hosting & Domain- 3500Ksh</li>
      <li> Branding-Calendars, umbrellas, pens, T-shirts- Depends on number needed and item</li>
      <li> Extra advertisement posters, brochures, and flyers to be printed-700Ksh </li>
      <li> At least 6 press releases/marketing emails per month</li>
      <li> Quarterly(4) newspaper/TV appearance</li>
      <li> 4 blog posts per month</li>
      <li> 50 % discount on website and corporate email setup</li>
      `;
      break;
  }
  packDivEl.appendChild(packDetailsEl);
}

// SLIDESHOW

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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