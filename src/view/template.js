export const templatePost = (userPost) => {
    const editPostContainer = document.createElement('div');
    const editPosTemplate = `
    <article class = "display-flex-column center margin-bottom" >
    <section class = "display-flex center">
    <div class = "display-flex left border">
    <img class="post-user-photo" src="${userPost.photoUser}">
    <h3>${userPost.nameUser}<h3>
    </div>
    <div class = "display-flex rigth"><h1>${userPost.datePost}<h1><div>
    </section>
    <p>${userPost.contentPost}</p>
    <img src="${userPost.imgPost}">
    <section class = "display-flex">
    <div class = "display-flex"><i class="far fa-thumbs-up margin-left"></i><i class="far fa-comments margin-left"></i></div>
    <div class = "display-flex rigth"><i id = "editarPost" class="fas fa-edit margin-left"></i><i id = "eliminarPost" class="fas fa-trash-alt margin-left"></i>
    <button id = "btn-guardar">Guardar</button>
    </div>
    </section>
    </article>
    `;
    editPostContainer.innerHTML = editPosTemplate;
    
const editar = .querySelector('#editarPost');
const borrar = .querySelector('#eliminarPost');
const guardar = .querySelector('#btn-guardar')

editar.addEventListener('click', () => {

})
}

editar.addEventListener('click', () => {
    guardar.classList.remove('hide');
    editar.classList.add('hide');
    textArea.disabled = false;
    textArea.select();
  });
  guardar.addEventListener('click', () => {
    editPost(objPost.id, textArea.value);
    editar.classList.remove('hide');
    guardar.classList.add('hide');
    textArea.disabled = true;
  });

