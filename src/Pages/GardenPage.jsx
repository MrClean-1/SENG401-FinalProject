import React, {useEffect, useState} from "react";
import {addPlant, getGold, waterPlants} from "../Database/DatabaseMethods";
import Button from "@mui/material/Button";
// will have to make a setImg function in DatabaseMethods

export const GardenPage = () => {
    const [gold, setGold] = useState([]);
//    const { plantAddition } = useState([]);
//    const [img, setImg] = useState([]);

    useEffect( () => {
        async function fetchData() {
            try {
                setGold(await getGold())
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    // Need to write getImg()
    // useEffect( () => {
    //     async function fetchImg() {
    //         try {
    //             setImg(await getImg())
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     fetchImg();
    // }, []);

    const handleAddPlant = (e) => {
        e.preventDefault();
        addPlant()
    };
    const handleWater = (e) =>{
        e.preventDefault();
        waterPlants();
    }

    return (
        <div className="panel panel-default post-body">
            <h4 className="post-editor-text"> Gold: {gold} </h4>
            <Button className="btn btn-success post-editor-button" onClick={handleAddPlant}>
                Add Plant
            </Button>
            <Button className="btn btn-success post-editor-button" onClick={handleWater}>
                Water All
            </Button>
        </div>
    )
};

