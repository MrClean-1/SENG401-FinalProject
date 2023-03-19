export class Plant {
    constructor(username) {
        const types = ["Rose", "Lilly", "Orchid", "Sunflower"];
        const rewards = [100, 200, 300, 400, 500];

        this.username = username;
        this.condition = "Alive and Healthy";
        this.stage = 0;
        this.type = types[Math.floor(Math.random() * types.length)];
        this.expiration = new Date();
        this.age = new Date();
        this.reward = rewards[Math.floor(Math.random() * rewards.length)];
    }

    lifeCheck(){
        const currentDate = new Date();
        const diffExp = Math.abs(currentDate - this.expiration);
        const expDays = Math.ceil(diffExp / (1000 * 60 * 60 * 24));
        const diffAge = Math.abs(currentDate - this.age);
        const ageDays = Math.ceil(diffAge / (1000 * 60 * 60 * 24));

        if (diffExp < 3){
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
        if (lifeCheck()){
            this.expiration = new Date();
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
            username: plant.username,
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
        return new Plant(data.username);
    }
};
