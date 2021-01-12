// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAOYX0ggNu844iPDpZ0jG5hG97D38hV4xA",
    authDomain: "instagram-clone-react-2e522.firebaseapp.com",
    projectId: "instagram-clone-react-2e522",
    storageBucket: "instagram-clone-react-2e522.appspot.com",
    messagingSenderId: "662783857118",
    appId: "1:662783857118:web:8b97a338c900c75a7a0d4f",
    measurementId: "G-ENSQWCTDYB"
  });


  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };

  export default db