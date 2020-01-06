import { deletePost, currentUser, editPost } from '../firebase.js';


export const templatePost = (userPost) => {
    const container = document.createElement('div');
    container.classList.add('container-posts');
    container.id = userPost.id;
    container.innerHTML = '';
    const template =
    `<section class = header-post>
    <div>
    <img class="post-user-photo" src="${userPost.photoUser}">
    <h3>${userPost.nameUser}<h3>
    </div>
    <div><h1>${userPost.datePost}<h1><div>
    </section>
    <p>${userPost.contentPost}</p>
    <section class = "display-flex">
    <div class = "display-flex"><i class="far fa-thumbs-up margin-left"></i><i class="far fa-comments margin-left" id = "icon-edit-post" ></i></div>
    <div class = "display-flex rigth"><i class="fas fa-edit margin-left"></i><i class="fas fa-trash-alt margin-left" id="icon-delete-post"></i></div>
    </section>`
    container.innerHTML = template;

    const eliminar = container.querySelector('#icon-delete-post');
    const editar = container.querySelector('#icon-edit-post');
    //container.querySelector('#icon-delete-post').addEventListener('click', (e) => {
        //e.preventDefault();
        eliminar.addEventListener('click', (e) => {
            e.preventDefault();
         if(currentUser().uid === userPost.uid){
             deletePost(userPost.id)
             .then((doc) => {
                 console.log('texto eliminado', doc);
             })
             .catch((error) => {
                 console.log(error);    
             })
         }
        });

        editar.addEventListener('click', (e) => {
            e.preventDefault();

        })
    return container;
}