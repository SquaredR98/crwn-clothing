import { useEffect, useState } from 'react';
import { getRedirectResult } from 'firebase/auth';

import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
    // To implement signInWithGoogleRedirect function
    // useEffect(() => {
    //     async function getRedirectResultFromGoogle() {
    //         const response = await getRedirectResult(auth);
    //         if(response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     getRedirectResultFromGoogle();
    // }, [])              // Empty array means run this function once when the component mounts.
    

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>SignIn Page</h1>
            <button onClick={ logGoogleUser }>Sign In with GOOGLE</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;