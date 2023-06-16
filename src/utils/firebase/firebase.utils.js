import { initializeApp } from "firebase/app";

/**
 * For authentication we need the following classes
 * or methods in order to communicate with our auth
 * in the firebase.
 */
import {
  getAuth,
  signInWithRedirect, // This redirects to another page for authentication
  signInWithPopup, // This creates popup instead of redirecting it to another page
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore, // Instantiate the firestore db
  doc, // Instantiate the document on which operation need to perform
  getDoc, // Method to get data out of the instantiated document
  setDoc, // Method to set the data in the instantiated document
  collection, // Gives access to the collections in the firestore database
  writeBatch, // Allows to do batch write to db
  query,
  getDocs
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChjUsrlivuEo4fv0bhfKP7Ckz-clWIpUM",
  authDomain: "ecom-web-app-7dcda.firebaseapp.com",
  projectId: "ecom-web-app-7dcda",
  storageBucket: "ecom-web-app-7dcda.appspot.com",
  messagingSenderId: "72327552849",
  appId: "1:72327552849:web:65eb9c56110ba880febd70",
};

export const app = initializeApp(firebaseConfig);

// In order to use google auth we need a provider as follows
const provider = new GoogleAuthProvider();

// Setting custom parameters so that we decide on how
// we want the provider to behave according to us.
provider.setCustomParameters({
  // This setting will provide user with promt to
  // select account for authentication.
  prompt: "select_account",
});

export const auth = getAuth();

// We must export the signUpWithPopup with auth and provider params
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, provider)
    .then()
    .catch((error) => error);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

// Similar to mongoose models
export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);

  objectsToAdd.forEach((object) =>{
    console.log('Object', object);
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  })

  await batch.commit();
  console.log('DONE');
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');

  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const {title, items} = docSnapshot.data();

    return acc[title.toLowerCase()] = items;
  }, {})

  return categoryMap;
}

export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
  // This creates the object irrespective of whether data
  // is present in the db or not.
  const userDocRef = doc(db, "users", userAuth.uid);

  // So to make sure whether the above document exists in the
  // db or not we use getDoc method as below
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  callback && onAuthStateChanged(auth, callback);
