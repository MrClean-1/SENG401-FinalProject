import { doc, setDoc, getDoc} from "firebase/firestore";
import { User, userConverter} from '../Models/UserCustomObject.js'
import db from './firebase_init'

const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);


export async function addUser(username, password) {
    const hash = bcrypt.hashSync(password, salt);
    const ref = doc(db, "users", username).withConverter(userConverter);
    await setDoc(ref, new User(username, hash));
}

export async function getUser(username, password) {
    const ref = doc(db, "users", username).withConverter(userConverter);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
        // Convert to User object
        const user = docSnap.data();
        console.log("Doc found with username:" + user.username + ", and hash: " + user.hash);
        // Use a User instance method
        return bcrypt.compareSync(password, user.hash);
    } else {
        console.log("No such document!");
        return false;
    }
}
