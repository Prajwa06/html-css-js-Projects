const items = document.querySelectorAll('.sidebar-category-item');

items.forEach((item) => {
  const btn = item.querySelector('button');
  const submenu = item.querySelector('.sidebar-submenu-category-list');

  btn.addEventListener('click', () => {
    // First, close all other open items
    items.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.querySelector('.sidebar-submenu-category-list')?.classList.remove('visible');
       
      }
    });

    // Then toggle the clicked one
    submenu.classList.toggle('visible');
   
  });
});
