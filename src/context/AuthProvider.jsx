import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

// const AuthProvider = (props) => {
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = { user, createUser };
    // console.log(props.children);
    console.log(children);

    return (
        <AuthContext.Provider value={authInfo}>
            {/* {props.children} */}
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
};

//! https://react.dev/learn/passing-data-deeply-with-context

//! https://web.programming-hero.com/web-9/video/web-9-46-7-prop-drilling-to-pass-data-to-a-many-level-components

/***
 * 1. create context and export it
 * 2. set provider with value
 * 3. use the Auth Provider in the main.jsx file
 * 4. access children in the AuthProvider component as children and use it in the middle of the Provider
 */
