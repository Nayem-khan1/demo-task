import { createContext } from "react";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {


    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const emailAndPassSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const emailAndPassSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        return signOut(auth);
    }
    const AuthInfo = {
        googleLogin,
        emailAndPassSignUp,
        emailAndPassSignIn,
        logOut,
    }
   return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
   );
}
export default AuthProvider;