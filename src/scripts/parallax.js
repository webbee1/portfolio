const parallax = document.querySelector('.parallax')
const layers = parallax.children;

function moveLayersDependsOnScroll(wScroll) {
    Array.from(layers).forEach(layer => {
        const divider = layer.dataset.speed;
        const strafe = wScroll * divider / 50;
        layer.style.transform = 'translateX(+' + strafe + '%)';
    });
}

const windowWidth = document.body.clientWidth;
  if (windowWidth > 768) {
  window.addEventListener("scroll", e => {
    const wScroll = window.pageYOffset;
    moveLayersDependsOnScroll(wScroll);
  });
}

