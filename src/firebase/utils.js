// FIREBASE CONFIGURATION CODE
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

/// 'userAuth' is users status ( signed in, or not signed in) which is retrieved from
/// 'onAuthStateChanged' defined in 'App.js', and passed in here. if user not signed in
/// then the function returns, otherwise firebase creates a snapshot and adds to users database
///
export const handleUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const { uid } = userAuth;

  const userRef = firestore.doc(`users/${uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const timestamp = new Date();

    try {
      /// set new
      await userRef.set({
        displayName,
        email,
        createdDate: timestamp,
        ...additionalData
      });
    } catch (err) {
      // console.log(err);
    }
  }
  return userRef;
};
