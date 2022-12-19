function escrever(texto) {
  let escrita = texto.innerHTML.split('');
  texto.innerHTML = '';
  escrita.forEach(function (letra, i) {
    setTimeout(function () {
      texto.innerHTML += letra;
    }, 100 * i)
  });
}
escrever(document.querySelector('#turma'));

$('a[href^="#"]').on('click', function (evento) {
  let idlink = $(this).attr('href'),
    targetOffset = $(idlink).offset().top;
  evento.preventDefault();
  $('html, body').animate({
    scrollTop: targetOffset - 100
  }, 0);
});



let width;
let dt = new Date, dia = dt.getDate(), mes = dt.getMonth() + 1
const data = Number(`${dia}${mes}`)

let mod0Aulas = ["", 1412, 1512, 1612]
let mod1Aulas = ["", 1912, 2012, 2112, 2212, 2312, 0201, 0301, 0401, 0501, 0601, 0901, 1001, 1101, 1201]
let mod2Aulas = ["", 1601, 1701, 1801, 1901, 2001, 2301, 2401, 2501, 2601, 2701, 3001, 3101, 0102]
let mod3Aulas = ["", 0602, 0702, 0802, 0902, 1002, 1302, 1402, 1502, 1602, 1702, 2702, 2802, 0103, 0203, 0303]
let mod4Aulas = ["", 0603, 0703, 0803, 0903, 1003, 1303, 1403, 1503, 1603, 1703, 2003, 2103, 2203, 2303]

// Animação Progresso Modulo 0
$(() => {

  if (data > Number($(mod0Aulas).get(-1))) {
    width = 100
  } else {
    let percentCourse = mod0Aulas.indexOf(data)
    width = Math.round(percentCourse * 33.33)
  }


  $("#progress-m0").animate({
    width: `${width}%`
  }, 2500);
  $("#progress-m0-value").html(`${Math.round(width)}%`)
})

// Animação Progresso Modulo 1
$(() => {

  //Lembrar de trocar Operador < para > após a virada do ano
  if (data < Number($(mod1Aulas).get(-1))) {
    width = 100
  } else {
    let percentCourse = mod1Aulas.indexOf(data) //14 dias
    width = Math.round(percentCourse * 7.14)
  }

  $("#progress-m1").animate({
    width: `${width}%`
  }, 2500);
  $("#progress-m1-value").html(`${Math.round(width)}%`)
})


// Animação Progresso Modulo 2
$(() => {
  let percentCourse = mod2Aulas.indexOf(data) // 13 dias
  width = Math.round(percentCourse * 7.69)

  $("#progress-m2").animate({
    width: `${width}%`
  }, 2500);
  $("#progress-m2-value").html(`${Math.round(width)}%`)
})

// Animação Progresso Modulo 3
$(() => {
  let percentCourse = mod3Aulas.indexOf(data) //15 dias
  width = Math.round(percentCourse * 6.66)

  $("#progress-m3").animate({
    width: `${width}%`
  }, 2500);
  $("#progress-m3-value").html(`${Math.round(width)}%`)
})


// Animação Progresso Modulo 4
$(() => {
  let percentCourse = mod4Aulas.indexOf(data) //14 dias
  width = Math.round(percentCourse * 7.14)

  $("#progress-m4").animate({
    width: `${width}%`
  }, 2500);
  $("#progress-m4-value").html(`${Math.round(width)}%`)
})