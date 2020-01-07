import {deletePostEvent} from '../controller/template-controller.js';

export const paintPost = (userPost, idPost) => {
    const container = document.createElement('div');
    container.classList.add('container-posts');
    container.id = idPost;
    let datePost = userPost.publicationDate.toDate().toString();
    datePost = datePost.substring(0, datePost.indexOf("GMT"));
    container.innerHTML = '';
    const template =
    `<section class = header-post id = ${userPost.uidUser}>
    <div class = header-name-photo>
    <img class="post-user-photo" src="${userPost.photoUser}">
    <h2 class = user-name-post>${userPost.nameUser}<h2>
    </div>
    <div><h1>${datePost}<h1><div>
    </section>
    <p class = "text-post" >${userPost.contentPost}</p>
    <section class = footer-post>
    <div class = "icon-comment-like"><i class="far fa-thumbs-up margin-left"></i><i class="far fa-comments margin-left"></i></div>
    <div class = "icon-edit-delete"><i class="fas fa-edit margin-left" id="icon-edit-post"></i><i class="fas fa-trash-alt margin-left" id="icon-delete-post"></i></div>
    </section>`
    container.innerHTML = template;
    document.querySelector('.container-list-posts').appendChild(container);

    //eventos 
    container.querySelector('#icon-delete-post').addEventListener('click', deletePostEvent);

    return container;
}
     