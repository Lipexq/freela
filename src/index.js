$('#uniforms').owlCarousel({
    autoplay: true,
    autoplayTimeout: 10000,
    autoplaySpeed: 1500,
    loop: true,
    dots: true,
    nav: true,
    navText: ['<img src="/src/images/menorQblue.png">', '<img src="/src/images/maiorQbLue.png">'],
    navSpeed: 800,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      768: {
        items: 1,
        nav: false
      },
      1024: {
        items: 1,
      }
    }
  });