// Replay the hero entrance without changing where the dog rests in the banner.
document.querySelectorAll('[data-replay]').forEach((button) => {
  button.addEventListener('click', () => {
    const hero = button.closest('.hero');
    if (!hero) return;
    const dog = hero.querySelector('.hero-dog');
    if (!dog) return;
    dog.style.animation = 'none';
    void dog.offsetWidth;
    dog.style.animation = '';
  });
});
