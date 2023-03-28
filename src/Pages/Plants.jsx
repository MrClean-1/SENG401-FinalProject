import React, {useEffect, useState} from "react";
import './styles/Plant.css'
import {plantsList} from "../Database/DatabaseMethods";
import Spritesheet from 'react-responsive-spritesheet';

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

    if (isLoading) {
        return <h2 className="App">Loading Garden...</h2>;
    }
    return (
        <div className="container">
            {plantList.map(function(plant, idx){
                return (
                    <Spritesheet
                        className={'plant'}
                        key={idx}
                        image={require(`../PlantImages/${plant.type}.png`)}
                        widthFrame={32}
                        heightFrame={32}
                        autoplay={false}
                        startAt={plant.stage}
                        steps={8}
                        fps={2}
                        loop={true}
                        onMouseOver={spriteSheet => {
                            spriteSheet.play();
                        }}
                        onMouseOut={spriteSheet => {
                            spriteSheet.goToAndPause(plant.stage);
                        }}
                    />)
            })}
        </div>
    )
}