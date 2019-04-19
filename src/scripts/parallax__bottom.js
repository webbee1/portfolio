const parallaxBottom = document.querySelector(".parallax__bottom");
const parallaxScene = parallaxBottom.children;
let move, delta;


function moveLayers(wScroll, layers) {
  Array.from(layers).forEach(layer => {
    const speedCoeff = layer.dataset.speed;
    const layerOffset = (wScroll * speedCoeff) / 50;

    layer.style.transform = `translateY(-${layerOffset}%)`;
  });
}

window.addEventListener("scroll", e => {

  if (window.innerWidth >= 768) {

    if (!move) {
      move = getCoords(parallaxBottom).top;
      delta = move - window.innerHeight;
    }


    const wScroll = window.pageYOffset;
    moveLayers(wScroll, parallaxScene);

    if (wScroll > delta) {
      const newScroll = wScroll - delta;
      moveLayers(newScroll, parallaxScene);
    }
  }
});

function getCoords(elem) {
  var box = elem.getBoundingClientRect();

  var body = document.body;
  var docEl = document.documentElement;

  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;

  var top  = box.top +  scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;

  return { top: Math.round(top), left: Math.round(left) };
}
