import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, getDoc, setDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAngZF3WkFGXW9lW6t2CQBBJ4vOVv-w8sY",
    authDomain: "crwn-clothing-9ca27.firebaseapp.com",
    projectId: "crwn-clothing-9ca27",
    storageBucket: "crwn-clothing-9ca27.appspot.com",
    messagingSenderId: "382486911802",
    appId: "1:382486911802:web:21d863664b1a2112a60e03"
  };

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (err) {
            console.log('Error creating user.', err);
        }
    }

    return userDocRef;
}