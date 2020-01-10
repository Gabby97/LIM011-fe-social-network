
//crear post
export const savePost = (user, contentPost, type) => firebase.firestore()
  .collection('posts')
  .add({
    uidUser: user.id,
    nameUser: user.name,
    photoUser: user.photo,
    contentPost1: contentPost,
    likes: 0,
    privacity: type,
    publicationDate: new Date()
  });
// obtener post
export const getPost = () => firebase.firestore().collection('posts').orderBy('publicationDate', 'desc');

//borrar post
export const deletePost = (idPost) => firebase.firestore().collection('posts').doc(idPost).delete();

export const updatePost = (idPost, parameter, value) => db.collection("posts").doc(idPost).update({
  parameter: value,
});
