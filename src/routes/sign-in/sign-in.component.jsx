import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(user);
    }

    return (
        <div>
            <h1>SignIn Page</h1>
            <button onClick={ logGoogleUser }>Sign In with GOOGLE</button>
        </div>
    )
}

export default SignIn;