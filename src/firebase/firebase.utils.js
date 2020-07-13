import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    
  apiKey: "AIzaSyDSzFPSRrVEuAB06PdbmcvGZAiE7Akf19o",
  authDomain: "clothing-db-384e4.firebaseapp.com",
  databaseURL: "https://clothing-db-384e4.firebaseio.com",
  projectId: "clothing-db-384e4",
  storageBucket: "clothing-db-384e4.appspot.com",
  messagingSenderId: "256151214026",
  appId: "1:256151214026:web:010dc002006538cba86133",
  measurementId: "G-1MC6HDCKE2"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
