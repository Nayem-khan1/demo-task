import { Children, createContext } from "react";
import {getAuth} from "firebase/auth"
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({Children}) => {
    const info = {
        name : "Marry",
        age: 23,
        address: "uk"
    }
    console.log(info);
   return 
    // <AuthContext.Provider value= {info}> {Children} </AuthContext.Provider>
}
export default AuthProvider;