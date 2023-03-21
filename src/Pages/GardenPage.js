import Button from "@mui/material/Button";
import React from "react";
import {getGold} from "../Database/DatabaseMethods";

export const GardenPage = () => {
    const gold = getGold
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
            <Button onAddPlant={handleAddPlant}>
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
                <Button onWaterAll={handleWater} >
                Water All
                </Button>
            </div>
                <div>
                    <p>Gold: {getGold} </p>
                </div>
        </>
    )
};

