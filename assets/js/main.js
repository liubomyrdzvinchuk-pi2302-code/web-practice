// This file makes the search dropdowns, the search button
// and the responsive page scaling work. All page content is
// written directly in index.html.

// ---- Dropdowns in the search form ("Select area" and "All Category") ----

function setupDropdown(fieldId, dropdownId) {
  var field = document.getElementById(fieldId);
  var dropdown = document.getElementById(dropdownId);
  var label = field.querySelector('.field-label');

  field.addEventListener('click', function (event) {
    event.stopPropagation();

    var openDropdowns = document.querySelectorAll('.field-dropdown.open');
    for (var i = 0; i < openDropdowns.length; i++) {
      if (openDropdowns[i] !== dropdown) {
        openDropdowns[i].classList.remove('open');
      }
    }

    dropdown.classList.toggle('open');
  });

  var options = dropdown.querySelectorAll('div');
  for (var i = 0; i < options.length; i++) {
    options[i].addEventListener('click', function (event) {
      event.stopPropagation();
      label.textContent = event.target.dataset.value;
      dropdown.classList.remove('open');
    });
  }
}

setupDropdown('areaField', 'areaDropdown');
setupDropdown('catField', 'catDropdown');

document.addEventListener('click', function () {
  var openDropdowns = document.querySelectorAll('.field-dropdown.open');
  for (var i = 0; i < openDropdowns.length; i++) {
    openDropdowns[i].classList.remove('open');
  }
});

// ---- Search button: scroll down to the job listings ----

document.getElementById('searchBtn').addEventListener('click', function (event) {
  event.preventDefault();
  var jobsSection = document.getElementById('jobs-section');
  if (jobsSection) {
    jobsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

// ---- Make the page fit the screen ----
// The whole design is built at a fixed width of 1920px, so here we shrink
// (or grow) it with a CSS transform to match the real width of the browser window.

var pageOuter = document.getElementById('page-outer');
var page = document.getElementById('page');
var designWidth = 1920;

function fitPageToScreen() {
  var scale = window.innerWidth / designWidth;
  page.style.transform = 'scale(' + scale + ')';
  pageOuter.style.height = (page.scrollHeight * scale) + 'px';
}

window.addEventListener('resize', fitPageToScreen);
window.addEventListener('load', fitPageToScreen);
fitPageToScreen();