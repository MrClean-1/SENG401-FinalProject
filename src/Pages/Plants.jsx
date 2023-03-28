import React, {useEffect, useState} from "react";
import './styles/Plant.css'
import {plantsList} from "../Database/DatabaseMethods";
import Spritesheet from 'react-responsive-spritesheet';
import Button from "@mui/material/Button";

export const Plants = () => {
    const [plantList, setPlantList] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect( () => {
        async function fetchData() {
            try {
                setPlantList(await plantsList())
                setLoading(false)
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    const handleButtonClick = event => {
        console.log(event.currentTarget.id);
    };

    if (isLoading) {
        return <h2 className="App">Loading Garden...</h2>;
    }
    return (
        <div>
            <div className="container">
                {plantList.map(function(plant, idx){
                    return (
                        <Spritesheet
                            className="plant"
                            key={idx}
                            image={require(`../Images/${plant.type}.png`)}
                            style={{height: 'auto', width: 'auto', maxWidth: '40%', maxHeight: '40%'}}
                            widthFrame={32}
                            heightFrame={32}
                            autoplay={false}
                            steps={8}
                            fps={2}
                            loop={true}
                            onMouseEnter={spriteSheet => {
                                spriteSheet.play();
                            }}
                            onMouseLeave={spriteSheet => {
                                spriteSheet.goToAndPause(plant.stage);
                            }}
                            onInit={spriteSheet => {
                                spriteSheet.goToAndPause(plant.stage);
                            }}
                        />)
                })}
            </div>
            <div className="buttonContainer">
                {plantList.map(function(plant, idx){
                    return (
                        <Button key={idx} className="button">
                            <img className="button" src={require("../Images/delete.png")} alt="Delete" id={plant.id} onClick={handleButtonClick} />
                        </Button>
                    )
                })}
            </div>
        </div>
    )
}