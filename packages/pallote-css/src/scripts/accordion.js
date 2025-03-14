document.addEventListener("DOMContentLoaded", function() {
  var acc = document.getElementsByClassName("accordion_control");
  var panels = document.getElementsByClassName("accordion_content");
  var activeAccordionItem = document.querySelector(".accordion_item-active");

  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      var panel = this.nextElementSibling;
      
      // Check if the clicked accordion_control is already active
      var isActive = this.parentElement.classList.contains("accordion_item-active");

      // Close all panels
      closeAllPanels();

      // If the clicked accordion_control is not already active, open it
      if (!isActive) {
        // Toggle the clicked accordion_control
        this.parentElement.classList.add("accordion_item-active");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  // If any accordion item has the class accordion_item-active, expand it on page load
  if (activeAccordionItem) {
    var activePanel = activeAccordionItem.querySelector(".accordion_content");
    activeAccordionItem.classList.add("accordion_item-active");
    activePanel.style.maxHeight = activePanel.scrollHeight + "px";
  }

  function closeAllPanels() {
    for (var i = 0; i < panels.length; i++) {
      var panel = panels[i];
      var accordionBtn = panel.previousElementSibling;
      if (accordionBtn.parentElement.classList.contains("accordion_item-active")) {
        accordionBtn.parentElement.classList.remove("accordion_item-active");
        panel.style.maxHeight = null;
      }
    }
  }
});
