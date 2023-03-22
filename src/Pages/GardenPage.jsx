import Button from "@mui/material/Button";
import React, {useEffect, useState} from "react";
import {getGold} from "../Database/DatabaseMethods";
// will have to make a setImg function in DatavbaseMethods

export const GardenPage = () => {
    const [gold, setGold] = useState([]);
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
            <h4>Gold: {gold} </h4>
        </div>
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
                    {/*<div*/}
                    {/*    style={{*/}
                    {/*        display: "flex",*/}
                    {/*        justifyContent: "center",*/}
                    {/*        alignItems: "center"*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    <h4>Plant 1 {img}</h4>*/}
                    {/*    <h4>Plant 1 {img}</h4>*/}
                    {/*    <h4>Plant 1 {img}</h4>*/}
                    {/*</div>*/}
        </>
    )
};

