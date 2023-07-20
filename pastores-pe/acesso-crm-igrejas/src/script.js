$('.button, .close').on('click', function(e) {
  e.preventDefault();
  $('.detail, html, body').toggleClass('open');
});
/*
$('.button-001, .close-001').on('click', function(e) {
  e.preventDefault();
  $('.detail-001, html, body').toggleClass('open');
});*/