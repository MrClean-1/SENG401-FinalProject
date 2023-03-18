export class Garden {
    constructor(username, gold) {
        this.username = username;
        this.gold = gold;

    }
}

export const gardenConverter = {
    toFirestore: (garden) => {
        return {
            username: garden.username,
            gold: garden.gold
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Garden(data.username, data.gold);
    }
};