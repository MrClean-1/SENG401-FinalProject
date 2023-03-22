export class Plant {
    types = ["Rose", "Lilly", "Orchid", "Sunflower"];
    rewards = [100, 200, 300, 400, 500];

    // This constructor uses default values so that we can specify either only username (for a new Plant)
    // or we can specify all options when creating a Plant instance from the firebase DB
    constructor(id, condition = "Alive and Healthy", stage = 0,
                type = 'null', expiration = Date.now(),
                age = Date.now(), reward = 0) {

        this.id = id;
        this.condition = condition;
        this.stage = stage;
        if(type === 'null'){
            this.type = this.types[Math.floor(Math.random() * this.types.length)]
        }else{
            this.type = type;
        }if(reward === 0){
            this.reward = this.rewards[Math.floor(Math.random() * this.rewards.length)]
        }else{
            this.reward = reward;
        }this.expiration = expiration;
        this.age = age;
    }

    lifeCheck(){
        const currentDate = Date.now();
        const diffExp = Math.abs(currentDate - this.expiration);
        const expDays = Math.ceil(diffExp / (1000 * 60 * 60 * 24));
        const diffAge = Math.abs(currentDate - this.age);
        const ageDays = Math.ceil(diffAge / (1000 * 60 * 60 * 24));

        if (expDays < 3){
            if(ageDays > 3 && ageDays < 6) {
                this.stage = 1;
                return true
            }
            else if(ageDays >= 6 && ageDays < 9){
                this.stage = 2;
                return true;
            }
            else {
                this.stage = 3;
                return true;
            }
        }
        else {
            this.condition = "Dead";
            return false;
        }
    }

    water(){
        if (this.lifeCheck()){
            this.expiration = Date.now();
            return this.reward;
        }

        else {
            return 0;
        }

    }
}

export const plantConverter = {
    toFirestore: (plant) => {
        return {
            id: plant.id,
            condition: plant.condition,
            stage: plant.stage,
            type: plant.type,
            expiration: plant.expiration,
            age: plant.age,
            reward: plant.reward
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Plant(data.id, data.condition, data.stage, data.type, data.expiration, data.age, data.reward);
    }
};
