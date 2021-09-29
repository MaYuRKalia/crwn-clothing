import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDkgtf2ZqVkIlSe0AocTAZQOXObxTEzIVw",
  authDomain: "crwn-db-d9726.firebaseapp.com",
  projectId: "crwn-db-d9726",
  storageBucket: "crwn-db-d9726.appspot.com",
  messagingSenderId: "828002916447",
  appId: "1:828002916447:web:5f28569d6ae9e2378f23ea",
  measurementId: "G-FSD1BDVTY2"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot) {
    const { displayName, email } = userAuth;
    const createdAt = new Date()
    
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    } 
  } 

  return userRef;
}

firebase.initializeApp(config);

export const auth =firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

