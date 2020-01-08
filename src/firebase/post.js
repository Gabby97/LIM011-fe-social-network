
//crear post
export const savePost = (user, contentPost) => firebase.firestore()
  .collection('posts')
  .add({
    uidUser: user.id,
    nameUser: user.name,
    photoUser: user.photo,
    contentPost: contentPost,
    likes: 0,
    privacity: 0,
    publicationDate: new Date()
  });

//obtener post  
export const getPost = () => firebase.firestore().collection('posts').orderBy('publicationDate', 'desc');
//borrar post
export const deletePost = (idPost) => firebase.firestore().collection('posts').doc(idPost).delete();
// editar post
export const editPost = (idPost, newText) => firebase.firestore().collection('posts').doc(idPost).update({
  contentPost: newText,
});