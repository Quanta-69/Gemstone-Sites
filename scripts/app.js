/* CARD SORTING */
// Select buttons and cards
const buttons = document.querySelectorAll('.sort-btn');
const cards = document.querySelectorAll('.card');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    // Update active button
    document.querySelector('.sort-btn.active').classList.remove('active');
    button.classList.add('active');

    // Filter and rearrange cards
    cards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.classList.remove('hide');
        card.classList.add('show');
      } else {
        card.classList.remove('show');
        card.classList.add('hide');
      }
    });
  });
});

/* CARD SORTING END */

/* ACCORDION FOR FAQ */
const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      header.classList.toggle('active');
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });
/* ACCORDION FOR FAQ END */
