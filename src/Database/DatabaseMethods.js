import { doc, setDoc, getDoc} from "firebase/firestore";
import { User, userConverter} from '../Models/UserCustomObject.js'
import db from './firebase_init'

const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);


export async function addUser(username, password) {
    const ref = doc(db, "users", username).withConverter(userConverter);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
        alert("Email already in use. (Did you mean to login??)")
    }else{
        const hash = bcrypt.hashSync(password, salt);
        await setDoc(ref, new User(username, hash));
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
