import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDsIp_UA7eH09uwiOqvWem0beP-eTjGhlg",
   authDomain: "virtus-db.firebaseapp.com",
   databaseURL: "https://virtus-db.firebaseio.com",
   projectId: "virtus-db",
   storageBucket: "virtus-db.appspot.com",
   messagingSenderId: "858459877295",
   appId: "1:858459877295:web:bdbc24edcacab1a7ed895a",
   measurementId: "G-L2JBE1Y1L8"
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
