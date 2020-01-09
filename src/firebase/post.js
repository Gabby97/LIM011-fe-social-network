
//crear post
export const savePost = (user, contentPost, type) => firebase.firestore()
  .collection('posts')
  .add({
    uidUser: user.id,
    nameUser: user.name,
    photoUser: user.photo,
    contentPost: contentPost,
    likes: 0,
    privacity: type,
    publicationDate: new Date()
  });

//obtener post  
export const getPost = () => firebase.firestore().collection('posts').orderBy('publicationDate', 'desc');

//export const getPostById = (idPost) => firebase.firestore().collection('posts').get(idPost);
//borrar post
export const deletePost = (idPost) => firebase.firestore().collection('posts').doc(idPost).delete();
// editar post
export const editPost = (idPost, newText) => firebase.firestore().collection('posts').doc(idPost).update({
  contentPost: newText,
});