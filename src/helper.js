export const countryTextDisplay = function (item1, item2) {
  if (!item1.classList.contains('active')) {
    Array.from(item2.children).forEach(
      el => (
        (el.style.backgroundColor = 'hsl(209, 23%, 22%)'),
        (el.style.color = 'white')
      )
    );
    // Array.fromcountryDisplayContainer.children)
  } else {
    Array.from(item2.children).forEach(
      el => (
        (el.style.backgroundColor = 'white'),
        (el.style.color = 'hsl(200, 15%, 8%)')
      )
    );
  }
};

export const shrink = function (item1, item2) {
  item1.style.height =
    Number.parseFloat(getComputedStyle(item1).height) - 190 + 'px';

  item2.classList.add('hidden');
};
export const grow = function (item1, item2) {
  item1.style.height =
    Number.parseFloat(getComputedStyle(item1).height) + 190 + 'px';

  item2.classList.remove('hidden');
};
