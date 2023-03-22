export class Garden {
    constructor(username, gold = 800, plants = []) {
        this.username = username;
        this.gold = gold;
        this.plants = plants;
    }
}

export const gardenConverter = {
    toFirestore: (garden) => {
        return {
            username: garden.username,
            gold: garden.gold,
            plants: garden.plants
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Garden(data.username, data.gold, data.plants);
    }
};