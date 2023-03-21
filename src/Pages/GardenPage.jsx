import Button from "@mui/material/Button";
import React, {useEffect, useState} from "react";
import {getGold} from "../Database/DatabaseMethods";

export const GardenPage = () => {
    const [gold, setGold] = useState([]);

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

    const handleAddPlant = (e) => {
        e.preventDefault();
    }
    const handleWater = (e) =>{
        e.preventDefault();
    }

    return (
        <>
        <div
            style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center"
            }}
        >
            <Button onClick={handleAddPlant}>
                Add Plant
            </Button>
        </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center"
                }}
            >
                <Button onClick={handleWater} >
                Water All
                </Button>
            </div>
                <div>
                    <h4>Gold: {gold} </h4>
                </div>
        </>
    )
};

