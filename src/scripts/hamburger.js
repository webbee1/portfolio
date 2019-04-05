var btn = document.querySelector('.hamburger__btn');
    menu = document.querySelector('.hamburger');
    body = document.querySelector('body');
    btn.addEventListener('click', function (e) {
      event.preventDefault();
      menu.classList.toggle('active');
      btn.classList.toggle('active'); 
    });
