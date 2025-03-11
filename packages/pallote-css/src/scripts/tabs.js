function tabify(element) {
  const header = element.querySelector(".tabs_controls");
  const tabHeaders = [...header.children];
  const tabContents = [...element.querySelectorAll(".tabs_panel")];
  
  tabContents.forEach((x) => (x.style.display = "none"));
  let current_tab_index = -1;

  function setTab(index) {
    if (current_tab_index > -1) {
      tabHeaders[current_tab_index].classList.remove("tab-active");
      tabContents[current_tab_index].style.display = "none";
    }
    tabHeaders[index].classList.add("tab-active");
    tabContents[index].style.display = "flex";
    current_tab_index = index;
    console.log(`Tab ${index + 1} clicked`);
  }

  let default_tab_index = tabHeaders.findIndex((x) =>
    x.classList.contains("tab-default")
  );

  default_tab_index = default_tab_index === -1 ? 0 : default_tab_index;
  setTab(default_tab_index);
  tabHeaders.forEach((x, i) => (x.onclick = () => setTab(i)));
}

// Apply tabify to all elements with the class 'tabs'
[...document.querySelectorAll(".tabs")].forEach((x) => tabify(x));
