import { deletePost } from '../firebase/post.js';
import { currentUser } from '../firebase/auth.js';

export const deletePostEvent = (event) => {
  event.preventDefault();
  const btnDelete = event.target;
  const postId = btnDelete.closest('.container-posts').id;
  const userId = btnDelete.closest('.container-posts').querySelector('.header-post').id;
  if (currentUser().id === userId) {
    deletePost(postId).then(() => {
      window.location.hash = '#/mikuna';
    })
      .catch();
  }
};

/* let cont = 0;
export const likesPostEvent = (event) => {
    event.preventDefault();
    const btnLikes = event.target;
    cont += 1;
    const postId = btnLikes.closest('.container-posts').id;
    const userId = btnLikes.closest('.container-posts').querySelector('.header-post').id;
    if (currentUser().id === userId){
        likesPost(postId) = cont
        .then((doc)=> {
            document.querySelector('#likes-count')=cont;
            window.location.hash = '#/miKuna';
        })
        .catch((error) => {
            console.log(error);
        });
    } */
/* const countLikes=document.querySelector('#likes-count');
let cont = 0;
cont += 1; */
/* console.log( likesPost())
countLikes.innerHTML = likesPost();
window.location.hash = '#/mikuna'; */
/* likesPost()
.then (() => {
  likesPost()=cont;
  countLikes.innerHTML=likesPost();
  window.location.hash = '#/mikuna';
})
.catch((error)=>{
  console.log(error);
}) */
