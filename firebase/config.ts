// Import the functions you need from the SDKs you need

import {getApps, initializeApp} from "@firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getStorage, ref, getDownloadURL} from "firebase/storage";
import {getDatabase} from "@firebase/database";
import {getAnalytics} from "@firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBJioxws_lk_-kpd41tEECajXVB6mS-96I",
    authDomain: "test1-ada10.firebaseapp.com",
    databaseURL: "https://test1-ada10.firebaseio.com",
    projectId: "test1-ada10",
    storageBucket: "test1-ada10.appspot.com",
    messagingSenderId: "493907252150",
    appId: "1:493907252150:web:8bfcfcc0df95b7a8e4a717",
    measurementId: "G-1MJYC7WWNV"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const analytics = getAnalytics(app);

export const auth =  getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const storage =  getStorage(app);
export const database = getDatabase(app);
export default app;