import {deletePost} from '../firebase/post.js'

export const deletePostEvent = (event) => {
    event.preventDefault();
    const btnDelete = e.target;
    const postId = btnDelete.closest('.container-posts').id;
    const userId = btnDelete.closest('.container-posts').querySelector('.header-post').id;
    if (userPost.id === userId) {
        deletePost(postId)
            .then((doc) => {
                window.location.hash = '#/mikuna';
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
