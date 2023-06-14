import React, { useState } from "react";
import "./signin-form.styles.scss";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Invalid credentials')
          break;
        case 'auth/user-not-found':
          alert('No user associated with this email')
          break;
        default:
          console.log(error);
          break;
      }
    }
  };

  return (
    <div className="sign-up-form-container">
      <h2>Already have an account</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          name="email"
          value={email}
          onChange={(event) => handleChange(event)}
        />

        <FormInput
          label="Password"
          required
          type="password"
          name="password"
          value={password}
          onChange={(event) => handleChange(event)}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
