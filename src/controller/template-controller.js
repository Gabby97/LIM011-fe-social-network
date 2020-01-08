import {deletePost} from '../firebase/post.js'
import {currentUser} from '../firebase/auth.js'

export const deletePostEvent = (event) => {
    event.preventDefault();
    const btnDelete = event.target;
    const postId = btnDelete.closest('.container-posts').id;
    const userId = btnDelete.closest('.container-posts').querySelector('.header-post').id;
    if (currentUser().id === userId) {
        deletePost(postId)
            .then((doc) => {
                window.location.hash = '#/mikuna';
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export const ownerPost = (userPost) =>{
    if(userPost.uidUser === currentUser().id)
    return 1;
    else
    return 0;
}

export const privacityPostEvent = (event) =>{

}

export const commentPostEvent = (event) => {
    console.log(event);
    
}

