// This file fills the empty containers in index.html with content
// and makes the buttons, dropdowns and modal window work.

// ---- Popular Post cards (the two dark cards near the top) ----

var popularPosts = [
  { logo: "assets/images/p1-creative.png" },
  { logo: "assets/images/p2-premium-labels.png" }
];

var popularPostsBox = document.getElementById('ppTrack');

for (var i = 0; i < popularPosts.length; i++) {
  var post = popularPosts[i];
  var card = document.createElement('div');
  card.className = 'pp-card d-flex';
  card.innerHTML =
    '<div class="pp-left d-flex flex-column vertical-center">' +
      '<img class="pp-logo" src="' + post.logo + '" width="48.73" height="28.66" alt="">' +
      '<a href="#" class="pp-btn">View job post</a>' +
    '</div>' +
    '<div class="pp-right">' +
      '<h3>Creative Designer</h3>' +
      '<div class="pp-loc">Los Angeles</div>' +
      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis.</p>' +
    '</div>';
  popularPostsBox.appendChild(card);
}

// ---- Featured Job Categories (the row of 6 icons) ----

var categoryIcons = [
  { name: "Accounting", icon: "assets/images/icons/cat-accounting.png" },
  { name: "Development", icon: "assets/images/icons/cat-development.png" },
  { name: "Technology", icon: "assets/images/icons/cat-technology.png" },
  { name: "Media & News", icon: "assets/images/icons/cat-media.png" },
  { name: "Medical", icon: "assets/images/icons/cat-medical.png" },
  { name: "Goverment", icon: "assets/images/icons/cat-government.png" }
];

var categoryGrid = document.getElementById('catGrid');

for (var i = 0; i < categoryIcons.length; i++) {
  var category = categoryIcons[i];
  var categoryCard = document.createElement('div');
  categoryCard.className = 'cat-card d-flex flex-column item-center text-center';
  categoryCard.innerHTML =
    '<div class="cat-icon d-flex item-center"><img src="' + category.icon + '" alt="' + category.name + '"></div>' +
    '<span>' + category.name + '</span>';
  categoryGrid.appendChild(categoryCard);
}

// ---- Job listing cards (same demo job repeated 6 times) ----

var jobListBox = document.getElementById('jobList');
var howManyJobs = 6;

for (var i = 0; i < howManyJobs; i++) {
  var jobCard = document.createElement('div');
  jobCard.className = 'job-card';
  jobCard.innerHTML =
    '<img class="job-logo" src="assets/images/job-logo.png" alt="Premium Labels Limited">' +
    '<h3>Creative Art Designer</h3>' +
    '<div class="job-company">Premium Labels Limited</div>' +
    '<div class="job-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut dolore magna aliqua.</div>' +
    '<div class="job-nature">Job Nature: Full time</div>' +
    '<div class="job-meta loc d-flex vertical-center"><img src="assets/images/icons/icon-map.png" alt="">56/8, Panthapath Dhanmondi Dhaka</div>' +
    '<div class="job-meta price d-flex vertical-center"><img src="assets/images/icons/icon-money.png" alt="">15k - 25k</div>' +
    '<div class="job-tags-col d-flex flex-column">' +
      '<div class="job-tags-row d-flex">' +
        '<span class="tag-art d-flex item-center">Art</span>' +
        '<span class="tag-media d-flex item-center">Media</span>' +
      '</div>' +
      '<span class="tag-design d-flex item-center">Design</span>' +
    '</div>' +
    '<div class="job-right">' +
      '<div class="job-actions d-flex">' +
        '<div class="fav d-flex item-center"><img src="assets/images/icons/icon-heart.png" alt=""></div>' +
        '<div class="apply d-flex item-center">Apply</div>' +
      '</div>' +
    '</div>';
  jobListBox.appendChild(jobCard);
}

// ---- Sidebar list: "Jobs by Location" ----

var locationRows = [
  ["New York", 37],
  ["Park Montana", 57],
  ["Atlanta", 33],
  ["Arizona", 36],
  ["Florida", 47],
  ["Rocky Beach", 27],
  ["Chicago", 17]
];

var locationListBox = document.getElementById('locList');

for (var i = 0; i < locationRows.length; i++) {
  var locationName = locationRows[i][0];
  var locationCount = locationRows[i][1];
  var row = document.createElement('li');
  row.className = 'd-flex justify-between vertical-center';
  row.innerHTML = '<span>' + locationName + '</span><span>' + locationCount + '</span>';
  locationListBox.appendChild(row);
}

// ---- Sidebar list: "Jobs by Category" ----

var categoryRows = [
  ["Technology", 37],
  ["Media & News", 57],
  ["Goverment", 33],
  ["Medical", 36],
  ["Restaurants", 47],
  ["Developer", 27],
  ["Accounting", 17]
];

var categoryListBox = document.getElementById('catList');

for (var i = 0; i < categoryRows.length; i++) {
  var catName = categoryRows[i][0];
  var catCount = categoryRows[i][1];
  var catRow = document.createElement('li');
  catRow.className = 'd-flex justify-between vertical-center';
  catRow.innerHTML = '<span>' + catName + '</span><span>' + catCount + '</span>';
  categoryListBox.appendChild(catRow);
}

// ---- Sidebar cards: "Carrer Advice Blog" ----

var blogPhotos = [
  "assets/images/blog-cover-coast.jpg",
  "assets/images/blog-cover-boat.jpg",
  "assets/images/blog-cover-coast.jpg"
];

var blogListBox = document.getElementById('blogList');

for (var i = 0; i < blogPhotos.length; i++) {
  var blogCard = document.createElement('div');
  blogCard.className = 'blog-card d-flex flex-column';
  blogCard.style.backgroundImage = 'url(' + blogPhotos[i] + ')';
  blogCard.innerHTML =
    '<h4>Home Audio Recording For Everyone</h4>' +
    '<div class="blog-meta">' +
      '<span class="meta-time">02 Hours ago</span>' +
      '<img class="meta-icon heart" src="assets/images/icons/icon-heart-white.png" alt="">' +
      '<span class="meta-num likes">06</span>' +
      '<img class="meta-icon comment" src="assets/images/icons/icon-comment-white.png" alt="">' +
      '<span class="meta-num comments">02</span>' +
    '</div>';
  blogListBox.appendChild(blogCard);
}

// ---- Footer: Instagram Feed photos ----

var instagramPhotos = [
  "assets/images/insta/insta-winter-walk.png",
  "assets/images/insta/insta-rice-terrace.jpg",
  "assets/images/insta/insta-denim-backpack.jpg",
  "assets/images/insta/insta-taj-mahal.jpg",
  "assets/images/insta/insta-suitcase-travel.jpg",
  "assets/images/insta/insta-sunset-boats.jpg",
  "assets/images/insta/insta-beach-hat.jpg",
  "assets/images/insta/insta-winter-hood-closeup.jpg"
];

var instagramGrid = document.getElementById('instaGrid');

for (var i = 0; i < instagramPhotos.length; i++) {
  var photoBox = document.createElement('div');
  photoBox.style.backgroundImage = 'url(' + instagramPhotos[i] + ')';
  instagramGrid.appendChild(photoBox);
}

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

// ---- Sign up / Login popup window (this is just a demo, it does not send data anywhere) ----

var authModal = document.getElementById('authModal');
var modalTitle = document.getElementById('modalTitle');
var modalSubmit = document.getElementById('modalSubmit');
var modalForm = document.getElementById('modalForm');

var modalButtons = document.querySelectorAll('.js-modal');
for (var i = 0; i < modalButtons.length; i++) {
  modalButtons[i].addEventListener('click', function (event) {
    event.preventDefault();
    var modalType = event.currentTarget.dataset.modal;

    if (modalType === 'signup') {
      modalTitle.textContent = 'Реєстрація';
      modalSubmit.textContent = 'Зареєструватися';
    } else {
      modalTitle.textContent = 'Увійти';
      modalSubmit.textContent = 'Увійти';
    }

    authModal.classList.add('open');
  });
}

document.getElementById('modalClose').addEventListener('click', function () {
  authModal.classList.remove('open');
});

authModal.addEventListener('click', function (event) {
  if (event.target === authModal) {
    authModal.classList.remove('open');
  }
});

modalForm.addEventListener('submit', function (event) {
  event.preventDefault();
  modalTitle.textContent = 'Дякуємо!';
  modalForm.innerHTML = '<p style="text-align:center;color:#555;font-size:14px;margin-bottom:10px;">Це демо-макет — реальної реєстрації/входу тут немає.</p>';
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