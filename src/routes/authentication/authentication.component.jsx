import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import './authentication.styles.scss';

const AuthenticationPage = () => {
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

    return (
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default AuthenticationPage;