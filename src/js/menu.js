document.addEventListener('DOMContentLoaded', () => {
  /**
   * Toggles the 'expanded' class on the navigation menu when the hamburger icon is clicked.
   */
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) { // Check if elements exist
    hamburger.addEventListener('click', () => {
      // Toggle the 'expanded' class to open/close the menu
      navLinks.classList.toggle('expanded');
    });
  } else {
    console.warn('Hamburger or nav-links element not found in the DOM.');
  }
});