import db from './firebase_init'
import { doc, setDoc, getDoc} from "firebase/firestore";
import { User, userConverter} from '../Models/UserCustomObject.js';
import {Garden, gardenConverter} from "../Models/GardenCustomObject";
import {Plant, plantConverter} from "../Models/Plant.js";


const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

export async function addUser(username, password) {
    const userRef = doc(db, "users", username).withConverter(userConverter);
    const userDocumentSnapshot = await getDoc(userRef);
    const gardenRef = doc(db, "gardens", username).withConverter(gardenConverter);
    const plantRef = doc(db, "plants", username).withConverter(plantConverter);

    if (userDocumentSnapshot.exists()) {
        alert("Email already in use. (Did you mean to login??)")
    }else{
        const hash = bcrypt.hashSync(password, salt);
        await setDoc(userRef, new User(username, hash));
        await setDoc(gardenRef, new Garden(username, 0));
        await setDoc(plantRef, new Plant(username));
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

const getUsername = () => {
    const user = window.localStorage.getItem("user");
    return JSON.parse(user)
}

// Idk how to get value of gold w/ the given username
export async function getGold() {
    const ref = doc(db, "gardens", getUsername()).withConverter(gardenConverter);
    const docSnap = await getDoc(ref);

    if (docSnap.exists()) {
        // Convert to garden object
        const garden = docSnap.data();
        // Returns the number of gold the user has
        return garden.gold;
    } else {
        console.log("No such document!");
        return null;
    }
}

export async function getGarden() {
    const ref = doc(db, "gardens", getUsername()).withConverter(gardenConverter);
    const docSnap = await getDoc(ref);

    if (docSnap.exists()) {
        // Convert to garden object
        const garden = docSnap.data();
        // Returns the garden
        return garden;
    } else {
        console.log("No such document!");
        return null;
    }
}


export async function getPlants(username){
    // Create an empty array to store plants
    const plants = [];

    for (const plant of garden.plant){
        const ref = doc(db, "gardens", plant).withConverter(gardenConverter);
        const docSnap = await getDoc(ref);

        if (docSnap.exists()) {
            // Convert to garden object
            const plant = docSnap.data();
            plants.push(plant);
        }
        else {
            console.log("No such document!");
            return null;
        }
    }
    return plants;
}

