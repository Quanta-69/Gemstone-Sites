/* CARD SORTING */
const buttons = document.querySelectorAll('.sort-btn');
const cards = document.querySelectorAll('.card');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    // Update active button styling
    document.querySelector('.sort-btn.active').classList.remove('active');
    button.classList.add('active');

    // Filter cards
    cards.forEach(card => {
      const category = card.getAttribute('data-category');

      if (filter === 'all' || category === filter) {
        // Show cards
        card.classList.add('show');
        card.classList.remove('hide');
        card.style.display = 'block';
      } else {
        // Hide cards with smooth animation
        card.classList.remove('show');
        card.classList.add('hide');

        // After animation, completely remove the card
        card.addEventListener('transitionend', () => {
          if (card.classList.contains('hide')) {
            card.style.display = 'none';
          }
        }, { once: true }); // Ensures the listener runs only once
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
