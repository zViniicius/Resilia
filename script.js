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

$(() => {
  let width;
  switch (new Date().getDate()) {
    default:
      width = "0";
      break;
    case 15:
      width = 14.28 * 1
      break;
    case 16:
      width = 14.28 * 2
      break;
    case 19:
      width = 14.28 * 3
      break;
    case 20:
      width = 14.28 * 4
      break;
    case 21:
      width = 14.28 * 5
      break;
    case 22:
      width = 14.28 * 6
      break;
    case 23:
      width = 14.28 * 7
      break;

  }
  $("#progress-m0").animate({
    width: `${width}%`
  }, 2500);
  $("#progress-m0-value").html(`${Math.round(width)}%`)
})