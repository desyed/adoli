import firebase_app from "../config";
import {signInWithEmailAndPassword, getAuth, signInWithPopup, signOut, GoogleAuthProvider} from "firebase/auth";

const auth = getAuth(firebase_app);
const googleProvider = new GoogleAuthProvider()

export async function signIn(email: string, password: string) {
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export const signInWithGoogle = async () => {
    try {
        await signInWithPopup(auth,googleProvider);
    } catch (err){
        console.error(err);
    }
};
export const logout = async () => {
    try {
        await signOut(auth);
    } catch (err){
        console.error(err);
    }
};