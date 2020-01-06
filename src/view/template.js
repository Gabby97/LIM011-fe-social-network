
import {deletePost} from '../firebase.js';
import {updateSocialNetwork} from '../view/post.js'

export const templatePost = (userPost, idPost) => {
    const container = document.createElement('div');
    container.classList.add('container-posts');
    container.id = idPost;
    container.innerHTML = '';
    const template =
    `<section class = header-post id = ${userPost.id}>
    <div class = header-name-photo>
    <img class="post-user-photo" src="${userPost.photoUser}">
    <h2 class = user-name-post>${userPost.nameUser}<h2>
    </div>
    <div><h1>${userPost.datePost}<h1><div>
    </section>
    <p class = text-post>${userPost.contentPost}</p>
    <section class = footer-post>
    <div class = "icon-comment-like"><i class="far fa-thumbs-up margin-left"></i><i class="far fa-comments margin-left"></i></div>
    <div class = "icon-edit-delete"><i class="fas fa-edit margin-left"></i><i class="fas fa-trash-alt margin-left" id="icon-delete-post"></i></div>
    </section>`
    container.innerHTML = template;
    container.querySelector('#icon-delete-post').addEventListener('click', (e) => {
        e.preventDefault();
        const btnDelete = e.target;
        const postId = btnDelete.closest('.container-posts').id;
        const userId = btnDelete.closest('.container-posts').querySelector('.header-post').id;
        if (userPost.id === userId) {
            deletePost(postId)
                .then((doc) => {
                    console.log('Documento eliminado', doc);
                    //repintado
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    });
        /* editar.addEventListener('click', (e) => {
         e.preventDefault();
         editPost()

        }) */
    return container;
}