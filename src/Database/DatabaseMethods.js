import db from './firebase_init'
import { doc, setDoc, getDoc, getDocs, collection} from "firebase/firestore";
import { User, userConverter} from '../Models/UserCustomObject.js';
import {Garden, gardenConverter} from "../Models/GardenCustomObject";
import {Plant, plantConverter} from "../Models/PlantCustomObject.js";
import {DiscussionPost, postConverter} from "../Models/DiscussionPostCustomObject";


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
        let garden = new Garden(username);
        await setDoc(userRef, new User(username, hash));

        const newPlantRef = doc(collection(db, "plants")).withConverter(plantConverter);
        const newPlant = new Plant(newPlantRef.id)
        await setDoc(newPlantRef, newPlant);

        garden.plants = [newPlantRef.id]
        await setDoc(gardenRef, garden);
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
    const ref = doc(collection(db, "gardens", getUsername()).withConverter(gardenConverter));
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

export async function getPosts() {
    const querySnapshot = await getDocs(collection(db, "discussion").withConverter(postConverter));
    let postList = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        postList.push(doc.data());
    });
    return postList;
}

export async function addPost(subject, body) {
    const newPostRef = doc(db, "discussion").withConverter(postConverter);
    const newPost = new DiscussionPost(getUsername(), subject, body);
    await setDoc(newPostRef, newPost);
    return newPost;
}

export async function plantsList(){
    let plantList = [];
    // get the garden object
    const garden = getGarden();
    // gets the plant list from the garden
    if (garden == null){
        return null;
    } for (const plantID of garden.plants) {
        let plantRef = doc(db, "plants", plantID).withConverter(plantConverter);
        const plantDoc = await getDoc(plantRef);

        if (plantDoc.exists()) {
            // Convert to plant object
            const plant = plantDoc.data();
            plantList.push(plant);
        } else {
            console.log("No such plant with id:" + plantID + "(plantsList)");
        }
    }
    return plantList
}

export async function addPlant(){
    const garden = getGarden();
    // make some checks to verify the user should be able to purchase a plant
    if(garden.plants == null){

    }else{
        if(garden.plants.length < 3 && garden.gold >= 1000){
            garden.gold -=1000;
            const newPlantRef = doc(collection(db, "plants").withConverter(plantConverter));
            const newPlant = new Plant(newPlantRef.id)
            await setDoc(newPlantRef, newPlant);
            garden.plants.push(newPlantRef.id);
        }else{
            console.log("User has too many plants already or is too poor (hehehe poor moment) ")
        }
    }

}

export async function waterPlants(){
    const plantList = plantsList();
    for(const plant of plantList){
        plant.water()
        const plantRef = doc(db, "plants", plant.id).withConverter(plantConverter);
        await setDoc(plantRef, plant);
    }
}

export async function getGarden(){
    const gardenRef = doc(db, "gardens", getUsername()).withConverter(gardenConverter);
    const gardenDoc = await getDoc(gardenRef);
    if (gardenDoc.exists()) {
        // Convert to garden object
        return gardenDoc.data();
    } else {
        console.log("No such document! (getGarden)");
        return null;
    }
}
