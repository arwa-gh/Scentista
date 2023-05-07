function arwa(){
const sliders = document.querySelectorAll('input[type="range"]');
sliders.forEach(slider => {
  slider.addEventListener('input', () => {
    const percentage = slider.value + '%';
    slider.parentNode.querySelector('#percentage').textContent = percentage;
  });
});
};

