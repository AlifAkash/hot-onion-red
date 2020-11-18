import React, { useContext } from 'react';
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

      const handleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
        .then(result => {
            const user = result.user;
            const {displayName, email} = user;
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser);
            history.replace(from);
          })
          .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
      }
      console.log(loggedInUser);

      const handleSignOut = () => {
        firebase.auth().signOut()
        .then(function() {
          const signedInUser = {name: "", email: ""};
          setLoggedInUser(signedInUser);
        })
        .catch(error => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
      }

    return (
        <div>
            <p>Log in here</p>
            {
              loggedInUser.name? <button onClick={handleSignOut}>Sign out</button> : <button onClick={handleSignIn}>Sign in with Google</button>
            }
            {
              loggedInUser.name? <p>Name: {loggedInUser.name}</p> : <p>Please Sign in</p>
            }
        </div>
    );
};

export default Login;