import infoAlunos from './json/info_alunos.json'  assert {type: 'json'};
import infoStaffs from './json/info_staffs.json' assert { type: 'json' };


$(async function () {
  const staffs = Object.values(infoStaffs), staffId = []
  var s
  for (s = 0; s < staffs.length; s++) {
    staffId.push(staffs[s])
    let id = s
    let { nome, cargo, localidade, linkedIn, github, avatar, bio } = staffId[s]

    $("#stafflist").append(`<div class=staffs id=staffId_${s}></div>`)
    $(`#staffId_${s}`).append(`<a data-bs-toggle="modal" data-bs-target="#modal_${s}"><img class="rounded-circle" src=${staffId[s].avatar} width="120"></a>`)
    $(`#staffId_${s}`).append(`<h3>${staffId[s].nome}</h3>`)
    criarModais(id, nome, cargo, localidade, linkedIn, github, bio, avatar)
  }
  const alunos = Object.values(infoAlunos), user = []
  for (let n = 0; n < alunos.length; n++) {
    user.push(alunos[n])
  }

  for (let i = 0; i < user.length; i++) {
    try {
      await fetch(`//api.github.com/users/${user[i].login}`)
        .then(res => {
          if (!res.ok) {
            throw new Error(res.statusText)
          }
          return res.json()
        })
        //Retorna as funções obtidas via API GitHub
        .then((result) => {
          let { login, name, avatar_url, html_url } = result
          //Verifica se o usuário
          if (name == null) {
            name = login
          }




          $("#studentlist").append(`<div class=students id=student_${login}></div>`)
          $(`#student_${login}`).append(`<a data-bs-toggle="modal" data-bs-target="#modal_${login}"><img  class="rounded-circle" src="${avatar_url}" width="120"></a>`)
          $(`#student_${login}`).append(`<h3>${name}</h3>`)

          /*Função para criar os Modais dinamicamente */
          criarModais(login, name, user[i].idade, user[i].localidade, user[i].linkedIn, html_url, user[i].bio, avatar_url)
        })
    } catch (e) { console.log(e) }

  }
})

function criarModais(login, name, idade, localidade, linkedIn, github, bio, avatar) {
  let git
  if (github == null) {
    git = "Não informado"
  } else {
    git = "GitHub"
  }
  $("#modais").append(`<div class="modal fade" id="modal_${login}" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-black">
          <img src="https://www.resilia.com.br/wp-content/themes/resiliaTheme/assets/images/logo.png">
          <button type="button" class="btn-warning" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img class="rounded-circle" src="${avatar}" width="120">
          <h3>${name}</h3>
          <p>${idade} | ${localidade}</p>
          
          <p><a id=linkedIn href="${linkedIn}" class="modalLinks" target="_blank"><i class="bi bi-linkedin"> </i>LinkedIn</a> | <a id="linkGithub" href="${github}" class="modalLinks" target="_blank"><i class="bi bi-github"> </i>${git}</a> </p>
          <p><i class="fa-sharp fa-solid fa-quote-left"></i><i>${bio}</i><i class="fa-sharp fa-solid fa-quote-right"></i></p>
        </div>
        <div class="modal-footer">
        
        </div>
      </div>
    </div>
  </div>`)
}
