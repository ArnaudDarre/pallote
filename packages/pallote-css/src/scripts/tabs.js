function tabify( element ){
  const header = element.querySelector('.tabs__controls');
  const content = element.querySelector('.tabs__content');
  const tabHeaders = [...header.children];
  const tabContents = [...content.children];
  tabContents.forEach( x => x.style.display = 'none');
  let current_tab_index = -1;

  function setTab( index ){
    if( current_tab_index > -1 ){
      tabHeaders[current_tab_index].classList.remove('tabs__item--active');
      tabContents[ current_tab_index ].style.display = 'none';
    }
    tabHeaders[index].classList.add('tabs__item--active');
    tabContents[ index ].style.display = 'flex';
    current_tab_index = index;
  }

  default_tab_index = tabHeaders.findIndex( x => {
    return [...x.classList].indexOf('tabs__item--default') > -1;
  });

  default_tab_index = default_tab_index === -1 ? 0 : default_tab_index;
  setTab( default_tab_index );
  tabHeaders.forEach((x,i) => x.onclick = event => setTab(i));
}

  // this is where the magic happens!
[...document.querySelectorAll('.tabs')]
  .forEach(x => tabify(x));
