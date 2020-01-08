import {deletePost, editPost} from '../firebase/post.js';
import {currentUser} from '../firebase/auth.js';

export const deletePostEvent = (event) => {
    event.preventDefault();
    const btnDelete = event.target;
    const postId = btnDelete.closest('.container-posts').id;
    const userId = btnDelete.closest('.container-posts').querySelector('.header-post').id;
    if (currentUser().id === userId) {
        deletePost(postId)
            .then((doc) => {
                window.location.hash = '#/mikuna';
                console.log('texto eliminado', doc);
            })
            .catch((error) => {
                console.log(error);
            })
    }
};

export const editPostEvent = (e) => {
e.preventDefault();
const btnEdit = event.target;
const idPost = btnEdit.closest('.container-posts').id;
const newText = btnEdit.closest('.container-posts').querySelector('.text-post');
const userId = btnEdit.closest('.container-posts').querySelector('.header-post').id;

if (currentUser().id === userId){
    editPost(idPost, newText)
    .then((doc) => {
        console.log('se edito!', doc);
    })
    .catch((error) => {
        console.log('falló' ,error); 
    })
}
};