import db from './firebase_init'
import { doc, setDoc, getDoc} from "firebase/firestore";
import { User, userConverter} from '../Models/UserCustomObject.js'
import {Garden, gardenConverter} from "../Models/GardenCustomObject";

const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

export async function addUser(username, password) {
    const userRef = doc(db, "users", username).withConverter(userConverter);
    const userDocumentSnapshot = await getDoc(userRef);
    const gardenRef = doc(db, "gardens", username).withConverter(gardenConverter);

    if (userDocumentSnapshot.exists()) {
        alert("Email already in use. (Did you mean to login??)")
    }else{
        const hash = bcrypt.hashSync(password, salt);
        await setDoc(userRef, new User(username, hash));
        await setDoc(gardenRef, new Garden(username, 0));
    }
}

export async function getUser(username, password) {
    const ref = doc(db, "users", username).withConverter(userConverter);
    const docSnap = await getDoc(ref);

    if (docSnap.exists()) {
        // Convert to User object
        const user = docSnap.data();
        // Compare the user instance we just created with the password we have been given
        return bcrypt.compareSync(password, user.hash);
    } else {
        console.log("No such document!");
        return false;
    }
}
