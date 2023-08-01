import React from "react";

/* import {
  auth,
  signInWithGooglePopup,


  // This method will take user to another domain
  // which in turn remove all earlier data on this page
  // and once auth process completes then it will come back
  // to this page.
  signInWithGoogleRedirect,


  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils"; */

// Since Redirect auth method changes page or domain this method will
// help up ko maintain the auth state of the user even after we change pages.
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/signup-form/signup-form.component";
import SignInForm from "../../components/signin-form/signin-form.component";
import { AuthenticationContainer } from "./authentication.styles";

const SignIn = () => {
  // Method for the redirect google sign in
  // useEffect(() => {
  //   const createUser = async (auth) => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   };
  //   createUser(auth);
  // }, []);

  // This is the method of auth using popup
  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default SignIn;
