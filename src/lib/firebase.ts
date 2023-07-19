import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyACtVCiHPyEe80cXIuSlbU5qEMn5MsLxCw",
    authDomain: "e-commerce-1eda7.firebaseapp.com",
    projectId: "e-commerce-1eda7",
    storageBucket: "e-commerce-1eda7.appspot.com",
    messagingSenderId: "398095954151",
    appId: "1:398095954151:web:44c9d78c617c44de7d3242",
    measurementId: "G-0P77EZVBYJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();