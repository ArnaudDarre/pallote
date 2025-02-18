// Get all dropdown trigger buttons
const dropdownTriggers = document.querySelectorAll('.nav__trigger');

// Add click event listener to each trigger button
dropdownTriggers.forEach(trigger => {
  trigger.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevents the click event from bubbling up

    const dropdown = this.parentElement; // Get parent dropdown element
    dropdown.classList.toggle('js-show'); // Toggle show class
  });
});

// Add click event listener to document to close dropdowns when clicking outside
document.addEventListener('click', function(e) {
  const dropdowns = document.querySelectorAll('.nav__item--dropdown');
  dropdowns.forEach(dropdown => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('js-show'); // Close dropdown
    }
  });
});
