export const templatePost = (userPost) => {
    return `<article class = "display-flex-column center margin-bottom" >
    <section class = "display-flex center">
    <div class = "display-flex left border">
    <img class="post-user-photo" src="${userPost.photoUser}">
    <h3>${userPost.nameUser}<h3>
    </div>
    <div class = "display-flex rigth"><h1>${userPost.datePost}<h1><div>
    </section>
    <p>${userPost.contentPost}</p>
    <img src="${userPost.imgPost}">
    <section class = "display-flex">
    <div class = "display-flex"><i class="far fa-thumbs-up margin-left"></i><i class="far fa-comments margin-left"></i></div>
    <div class = "display-flex rigth"><i class="fas fa-edit margin-left"></i><i class="fas fa-trash-alt margin-left"></i></div>
    </section>
    </article>`
}