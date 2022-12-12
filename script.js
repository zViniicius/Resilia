function escrever(texto) {
  let escrita = texto.innerHTML.split('');
  texto.innerHTML = '';
  escrita.forEach(function (letra, i) {
    setTimeout(function () {
      texto.innerHTML += letra;
    }, 100 * i)
  });
}
escrever(document.querySelector('#me'));

$('a[href^="#"]').on('click', function (e) {
  e.preventDefault();
  var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;

  $('html, body').animate({
    scrollTop: targetOffset - 100
  }, 500);
});
