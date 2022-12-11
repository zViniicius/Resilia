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