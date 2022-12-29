
// Config Smooth Scrool
$('a[href^="#"]').on('click', function (evento) {
  let idlink = $(this).attr('href'),
    targetOffset = $(idlink).offset().top;
  evento.preventDefault();
  $('html, body').animate({
    scrollTop: targetOffset - 100
  }, 0);
});


//Bloco de código: Progresso do curso
{
  const dataAtual = new Date().toISOString("en-US").split("T") // [Date Output: ex: 2023-12-20, T23:00:00] - Use [0] to get first string part
  const animeProgressTime = 2500; // Config do time em ms da barra de progresso.
  let width; // Declara a variável width para utilização pela barra de progresso.


  // Calendário de aulas Resilia Módulo 0 ao M4
  let aulas = {
    m0: ["2022-12-14", "2022-12-15", "2022-12-16"],
    m1: ["2022-12-19", "2022-12-20", "2022-12-21", "2022-12-22", "2022-12-23", "2023-01-02", "2023-01-03", "2023-01-04", "2023-01-05", "2023-01-06", "2023-01-09", "2023-01-10", "2023-01-11", "2023-01-12"],
    m2: ["2023-01-16", "2023-01-17", "2023-01-18", "2023-01-19", "2023-01-20", "2023-01-23", "2023-01-24", "2023-01-25", "2023-01-26", "2023-01-27", "2023-01-30", "2023-01-31", "2023-02-01"],
    m3: ["2023-02-06", "2023-02-07", "2023-02-08", "2023-02-09", "2023-02-10", "2023-02-13", "2023-02-14", "2023-02-15", "2023-02-16", "2023-02-17", "2023-02-27", "2023-02-28", "2023-03-01", "2023-03-02", "2023-03-03"],
    m4: ["2023-03-06", "2023-03-07", "2023-03-08", "2023-03-09", "2023-03-10", "2023-03-13", "2023-03-14", "2023-03-15", "2023-03-16", "2023-03-17", "2023-03-20", "2023-03-21", "2023-03-22", "2023-03-23"]
  }

  // Animação Progresso Modulo 0
  $(() => {
    let dataAulas = aulas.m0 // Desestruturação do calendário de aulas dentro do bloco de cada módulo.
    let lessonsPerModule = 100 / dataAulas.length //Quantidade de aulas por módulo.
    let lastDate = dataAulas.sort((a, b) => new Date(a) - new Date(b)).find(i => new Date(i) > new Date(dataAtual)) // Função para retornar a data mais proxima do calendário de aulas do módulo.

    // Decisão para checar se o módulo já foi concluido.
    if (new Date(dataAtual) < new Date(lastDate)) {
      width = Math.round(dataAulas.indexOf(lastDate) * lessonsPerModule) // Se não foi concluído, pega o index da aula vigente e multiplica pelo rate de aula.
    }
    else {
      width = 100 // Se foi concluído, seta a width da barra de progresso como 100%
    }

    // Animação de carregamento da Barra de progresso.
    $("#progress-m0").animate({
      width: `${width}%`
    }, animeProgressTime);
    $("#progress-m0-value").html(`${Math.round(width)}%`)
  })

  // Animação Progresso Modulo 1
  $(() => {
    let dataAulas = aulas.m1
    let lessonsPerModule = 100 / dataAulas.length
    console.log(lessonsPerModule)
    let lastDate = dataAulas.sort((a, b) => new Date(a) - new Date(b)).find(i => new Date(i) > new Date(dataAtual))
    if (new Date(dataAtual) < new Date(lastDate)) {
      width = Math.round(dataAulas.indexOf(lastDate) * lessonsPerModule)
    }
    else {
      width = 100
    }
    $("#progress-m1").animate({
      width: `${width}%`
    }, animeProgressTime);
    $("#progress-m1-value").html(`${Math.round(width)}%`)
  })


  // Animação Progresso Modulo 2
  $(() => {
    let dataAulas = aulas.m2
    let lessonsPerModule = 100 / dataAulas.length
    let lastDate = dataAulas.sort((a, b) => new Date(a) - new Date(b)).find(i => new Date(i) > new Date(dataAtual))
    if (new Date(dataAtual) < new Date(lastDate)) {
      width = Math.round(dataAulas.indexOf(lastDate) * lessonsPerModule)
    }
    else {
      width = 100
    }
    $("#progress-m2").animate({
      width: `${width}%`
    }, animeProgressTime);
    $("#progress-m2-value").html(`${Math.round(width)}%`)
  })

  // Animação Progresso Modulo 3
  $(() => {
    let dataAulas = aulas.m3
    let lessonsPerModule = 100 / dataAulas.length
    let lastDate = dataAulas.sort((a, b) => new Date(a) - new Date(b)).find(i => new Date(i) > new Date(dataAtual))
    if (new Date(dataAtual) < new Date(lastDate)) {
      width = Math.round(dataAulas.indexOf(lastDate) * lessonsPerModule)
    }
    else {
      width = 100
    }
    $("#progress-m3").animate({
      width: `${width}%`
    }, animeProgressTime);
    $("#progress-m3-value").html(`${Math.round(width)}%`)
  })


  // Animação Progresso Modulo 4
  $(() => {
    let dataAulas = aulas.m4
    let lessonsPerModule = 100 / dataAulas.length
    let lastDate = dataAulas.sort((a, b) => new Date(a) - new Date(b)).find(i => new Date(i) > new Date(dataAtual))
    if (new Date(dataAtual) < new Date(lastDate)) {
      width = Math.round(dataAulas.indexOf(lastDate) * lessonsPerModule)
    }
    else {
      width = 100
    }
    $("#progress-m4").animate({
      width: `${width}%`
    }, animeProgressTime);
    $("#progress-m4-value").html(`${Math.round(width)}%`)
  })
}