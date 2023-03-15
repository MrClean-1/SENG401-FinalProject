import { doc, setDoc, getDoc} from "firebase/firestore";
import { User, userConverter} from '../Models/UserCustomObject.js'
import db from './firebase_init'

export async function addUser(username, password) {
    const ref = doc(db, "usersNew", username).withConverter(userConverter);
    await setDoc(ref, new User(username, password));
}

export async function getUser(username, password) {
    const ref = doc(db, "usersNew", username).withConverter(userConverter);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
        // Convert to User object
        const user = docSnap.data();
        // Use a User instance method
        console.log(user.toString());
        return user.password === password;
    } else {
        console.log("No such document!");
        return false;
    }
}
