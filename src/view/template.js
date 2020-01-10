import { deletePostEvent, commentPostEvent, ownerPost, privacityPostEvent, editPostEvent } from '../controller/template-controller.js';

export const paintPost = (userPost, idPost) => {
    const container = document.createElement('div');
    container.classList.add('container-posts');
    container.id = idPost;
    let datePost = userPost.publicationDate.toDate().toString();
    datePost = datePost.substring(0, datePost.indexOf("GMT"));
    container.innerHTML = '';
    const template =
    `<section class = header-post id="${userPost.uidUser}">
    <div class = header-name-photo>
    <img class="post-user-photo" src="${userPost.photoUser}">
    <h2 class = user-name-post>${userPost.nameUser}<h2>
    </div>
    <div><h1>${datePost}<h1><div>
    </section>
    <section class = ${(ownerPost(userPost) === 0)?'hide':'menu-privacity '}>
    <select name="select-privacity" id = select-privacity>
    <option selected value="0">${userPost.privacity}</option>
    <option value="1">${(userPost.privacity === 'private')?'Public':'Private'}</option>
    </select>
    </section>
    <p class = text-post>${userPost.contentPost}</p>
    <section class = footer-post>
    <div class = icon-comment-like><i class="far fa-thumbs-up margin-left"></i><i id = "icon-comment" class="far fa-comments margin-left"></i></div>
    <div class = ${(ownerPost(userPost) === 0)?'hide':'icon-edit-delete'}><i class="fas fa-edit margin-left" id="icon-edit-post"></i><i class="fas fa-trash-alt margin-left" id="icon-delete-post"></i></div>
    </section>`
    //<button id="btn-save" type="submit">Guardar</button>
    container.innerHTML = template;
    document.querySelector('.container-list-posts').appendChild(container);

    //eventos 
    container.querySelector('#icon-delete-post').addEventListener('click', deletePostEvent);
    container.querySelector('#icon-comment').addEventListener('click', commentPostEvent);
    container.querySelector('#select-privacity').addEventListener('change', privacityPostEvent);

    container.querySelector('#icon-edit-post').addEventListener('click', editPostEvent);
    //container.querySelector('#btn-save').addEventListener('click');

    return container;
}
