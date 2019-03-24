const parallax = document.querySelector('.parallax')
const layers = parallax.children;

function moveLayersDependsOnScroll(wScroll) {
    Array.from(layers).forEach(layer => {
        const divider = layer.dataset.speed;
        const strafe = wScroll * divider / 50;
        layer.style.transform = 'translateX(-' + strafe + '%)';
    });
}

window.addEventListener('scroll', e => {
    console.log(window.pageYOffset);
    const wScroll = window.pageYOffset;
    moveLayersDependsOnScroll(wScroll)
});

