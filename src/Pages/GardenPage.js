import Button from "@mui/material/Button";

export const GardenPage = () => {
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
                    justifyContent: "center",
                    alignItems: "baseline"
                }}
            >
                <Button onWaterAll={handleWater} >
                Water All
                </Button>
            </div>
        </>
    )
};

