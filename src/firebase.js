// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSr6vnPJiVcll0zIcNHFVC6vGOUddv6e8",
    authDomain: "seng401-finalproject-a5283.firebaseapp.com",
    projectId: "seng401-finalproject-a5283",
    storageBucket: "seng401-finalproject-a5283.appspot.com",
    messagingSenderId: "966329408319",
    appId: "1:966329408319:web:c3a69fc3205c260f85d18a"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);

export default fire;