import { createContext } from "react";
import {getAuth, signInWithPopup} from "firebase/auth"
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {


    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }
    
    const info = {
        name : "Marry",
        age: 23,
        address: "uk"
    }
    console.log(info , children);
   return (
    <AuthContext.Provider value={info}>{children}</AuthContext.Provider>
   );
}
export default AuthProvider;