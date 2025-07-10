function flipMobile(card) {
  // Opcional: que solo una tarjeta esté girada a la vez
  const allCards = document.querySelectorAll('.flip-inner');
  allCards.forEach(inner => {
    if (inner !== card.querySelector('.flip-inner')) {
      inner.classList.remove('flipped');
    }
  });

  // Alternar giro de la tarjeta actual
  const inner = card.querySelector('.flip-inner');
  inner.classList.toggle('flipped');
}
