import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from './../../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLading] = useState(true);

    const createUser = (email, password) =>{
        setLading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signinUser=(email, password) =>{
        setLading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const allValues = {
        user,
        createUser,
        loading,
        signinUser
    }
    return (

        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;