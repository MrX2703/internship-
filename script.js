// Load internship data from JSON file
fetch('data/internships.json')
  .then(response => response.json())
  .then(data => {
    // Create internship listings
    const internshipListings = document.getElementById('internship-listings');
    data.forEach(internship => {
      const listing = document.createElement('div');
      listing.classList.add('internship-listing');
      listing.innerHTML = `
        <img src="${internship.image}" alt="${internship.title}">
        <h2>${internship.title}</h2>
        <p>${internship.shortDescription}</p>
        <button>View Details</button>
      `;
      internshipListings.appendChild(listing);
    });
  })
  .catch(error => console.error('Error loading internship data:', error));

// Load internship details
document.addEventListener('click', event => {
  if (event.target.tagName === 'BUTTON' && event.target.textContent === 'View Details') {
    const internshipId = event.target.parentNode.dataset.internshipId;
    fetch(`data/internships.json`)
      .then(response => response.json())
      .then(data => {
        const internship = data.find(internship => internship.id === internshipId);
        const internshipDetails = document.getElementById('internship-details');
        internshipDetails.innerHTML = `
          <img src="${internship.image}" alt="${internship.title}">
          <h1>${internship.title}</h1>
          <p>${internship.fullDescription}</p>
          <button>I am Interested</button>
        `;
      })
      .catch(error => console.error('Error loading internship details:', error));
  }
});

// Handle "I am Interested" button click
document.addEventListener('click', event => {
  if (event.target.tagName === 'BUTTON' && event.target.textContent === 'I am Interested') {
    // Simulate sending interest to server
    console.log('Interest sent!');
  }
});
