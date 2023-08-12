// Logic:
// When we click on a panel, we want:
// 1. All the other panels to close.
// 2. The panel we clicked on to expand

// Our "active" class is what makes our panels expand so we need to create an onclick event that:
// 1. Removes the active class on all other panels
// 2. Adds the active class on the panel we clicked on

// We need to:
// 1. Create constant for our panels
// 2. Create a click event for our panels
// 3. Have the click event:
// a) Remove the active class on all panels
// b) Add the active class on panel we clicked on

const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClass();
    panel.classList.add('active');
  });
});

function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
