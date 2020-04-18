 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';
 const config =  {
      apiKey: "Your_Api_Key",
          authDomain: "_your_domain_.firebaseapp.com",
          databaseURL: "Your_API_db",
          projectId: "_your_protect_id",
          storageBucket: "_your_storage_bucket",
          messagingSenderId: "_your_messaging_sender_id",
          appId: "_your_app_id",
          measurementId: "_id_"
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