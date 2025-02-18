document.addEventListener("DOMContentLoaded", function() {
  var acc = document.getElementsByClassName("accordion__control");
  var panels = document.getElementsByClassName("accordion__content");
  var activeAccordionItem = document.querySelector(".accordion__item--active");

  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      var panel = this.nextElementSibling;
      
      // Check if the clicked accordion__control is already active
      var isActive = this.parentElement.classList.contains("accordion__item--active");

      // Close all panels
      closeAllPanels();

      // If the clicked accordion__control is not already active, open it
      if (!isActive) {
        // Toggle the clicked accordion__control
        this.parentElement.classList.add("accordion__item--active");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  // If any accordion item has the class accordion__item--active, expand it on page load
  if (activeAccordionItem) {
    var activePanel = activeAccordionItem.querySelector(".accordion__content");
    activeAccordionItem.classList.add("accordion__item--active");
    activePanel.style.maxHeight = activePanel.scrollHeight + "px";
  }

  function closeAllPanels() {
    for (var i = 0; i < panels.length; i++) {
      var panel = panels[i];
      var accordionBtn = panel.previousElementSibling;
      if (accordionBtn.parentElement.classList.contains("accordion__item--active")) {
        accordionBtn.parentElement.classList.remove("accordion__item--active");
        panel.style.maxHeight = null;
      }
    }
  }
});
