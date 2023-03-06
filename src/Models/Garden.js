class Garden{

    constructor(){
        this.plants = [];
        this.id = Math.random() * 10000;
    }

    //functions

    addRandomPlant() {
        const plantTypes = ["Rose", "Sunflower", "Lily", "Orchid"];
        const plantRewards = [100, 200, 300, 400, 500];
        const randomType = plantTypes[Math.floor(Math.random() * plantTypes.length)];
        const randomReward = plantRewards[Math.floor(Math.random() * plantRewards.length)];
        // eslint-disable-next-line no-undef
        const plant = new Plant(randomType, randomReward);
        this.plants.push(plant);
    }

    waterPlant(plant){

    }

    //Getters
    get id(){
        return this.id;
    }

    //Setters

}