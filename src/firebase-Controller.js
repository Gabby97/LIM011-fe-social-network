export const firebaseInitialize =() => {
    firebase.initializeApp({
        apiKey: "AIzaSyDbD06CrpZ2ItVxy4f33eRlbFM8GX_CF9k",
        authDomain: "social-network-b3bb7.firebaseapp.com",
        databaseURL: "https://social-network-b3bb7.firebaseio.com",
        projectId: "social-network-b3bb7",
        storageBucket: "social-network-b3bb7.appspot.com",
        messagingSenderId: "2817858639",
        appId: "1:2817858639:web:70c63c4b90a28861d8de3a",
        measurementId: "G-5WZN70EDCZ"
      //appId: '1:380076541838:web:8c591a8b9d53bb4b',
    });
    }
      // Initialize Firebase


/* export const register = async (provider = { providerId: "" }, data = {}) => {
    const db = firebase.firestore();
    const collection = db.collection("users");
  
    switch (provider.providerId) {
      case "facebook.com":
        return new Promise(() => {
          firebase
            .auth()
            .signInWithPopup(provider)
            .then(result => {
              const { user } = result;
  
              console.log(user, collection);
  
              // db.collection("users").add({
              //   first_name: "",
              //   last_name: ""
              // });
            })
            .catch(() => reject());
        });
      case "google.com":
        return new Promise(() => {
          firebase
            .auth()
            .signInWithPopup(provider)
            .then(result => {
              const { user } = result;
  
              console.log(user, collection);
  
              // db.collection("users").add({
              //   first_name: "",
              //   last_name: ""
              // });
            })
            .catch(() => reject());
        });
      default:
        return new Promise(() => {
          const { email = "", password = "" } = data;
  
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(result => {
              const { user } = result;
  
              console.log(user, collection);
  
              // db.collection("users").add({
              //   first_name: "",
              //   last_name: ""
              // });
            })
            .catch(() => reject());
        });
    }
  };

  export const registerWithFacebook = async () => register(new firebase.auth.FacebookAuthProvider())
  
  export const registerWithGoogle = async () => register(new firebase.auth.GoogleAuthProvider())

  export const registerWithEmail = async (data) => register(undefined, data)
  */