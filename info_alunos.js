import infoAlunos from './info_alunos.json'  assert {type: 'json'};

$(async function () {
  // let user = ["zViniicius", "DanielGLisboa", "lrMello", "joaovitorevora", "elodossilva", "EmersonGald1n0", "tbatista0248", "lLeoSantos", "ThiagoMSo", "victorfaccioli", "MaryJackSilva", "LigiaBaptista"]

  let info = Object.values(infoAlunos)
  var user = []
  for (let n = 0; n < info.length; n++) {
    user.push(info[n])
  }

  for (let i = 0; i < user.length; i++) {
    fetch(`//api.github.com/users/${user[i].login}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText)
        }
        return res.json()
      })
      .catch(error => {
        console.log(error)
      })

      //Retorna as funções obtidas via API GitHub
      .then((result) => {
        let { login, name, avatar_url, html_url } = result
        //Verifica se o usuário
        if (name == null) {
          name = login
        }

        $("#studentlist").append(`<div class=students id=student_${login}></div>`)
        $(`#student_${login}`).append(`<a data-bs-toggle="modal" data-bs-target="#modal_${login}"><img class="rounded-circle" src="${avatar_url}" width="120"></a>`)
        $(`#student_${login}`).append(`<h3>${name}</h3>`)

        /*Função para criar os Modais dinamicamente */
        criarModais(login, name, user[i].idade, user[i].localidade, user[i].linkedIn, html_url, user[i].bio)
      });
  }
})

function criarModais(login, name, idade, localidade, linkedIn, github, bio) {
  $("#modais").append(`<div class="modal fade" id="modal_${login}" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
<img src="https://www.resilia.com.br/wp-content/themes/resiliaTheme/assets/images/logo.png">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h3>${name}</h3>
          <p>${idade} | ${localidade}</p>
          
          <p><a href="${linkedIn}" class="modalLinks" target="_blank"><i class="bi bi-linkedin"> </i>LinkedIn</a> | <a id="url" href="${github}" class="modalLinks" target="_blank"><i class="bi bi-github"> </i>Github</a> </p>
          <p><i class="bi bi-quote">“${bio}”</i></p>
        </div>
        <div class="modal-footer">
        
        </div>
      </div>
    </div>
  </div>`)
}
