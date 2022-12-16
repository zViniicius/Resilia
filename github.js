$(function () {
  let user = ["zViniicius", "DanielGLisboa", "lrMello", "joaovitorevora", "elodossilva", "EmersonGald1n0", "tbatista0248", "lLeoSantos", "ThiagoMSo", "victorfaccioli", "MaryJackSilva"]

  for (let i = 0; i < user.length; i++) {
    fetch(`//api.github.com/users/${user[i]}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText)
        }
        return res.json()
      })
      .catch(error => {
        console.log(error)
      })
      .then((result) => {
        let { login, name, avatar_url, html_url } = result
        if (name == null) {
          name = login
        }
        $("#studentlist").append(`<div class=students id=student${i}></div>`)
        $(`#student${i}`).append(`<a id="url" href="${html_url}" target="_blank"><img class="rounded-circle" src="${avatar_url}" width="120"></a>`)
        $(`#student${i}`).append(`<h3>${name}</h3>`)
        $(`#student${i}`).append(`<a id="url" href="${html_url}" target="_blank"><h6><i class="bi bi-github"> </i>${login}</h6></a>`)
      });
  }
})

function check() {
  fetch(`//api.github.com/users/lrmello`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
    .catch(error => {
      console.log(error)
    })
    .then((result) => {
      let { login, name, avatar_url, html_url } = result
      if (name == null) {
        name = login
      }

      console.log(name)
    })
}