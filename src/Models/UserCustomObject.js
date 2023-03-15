export class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    toString(){
        return this.username + ', ' + this.password;
    }
}

export const userConverter = {
    toFirestore: (user) => {
        return {
            username: user.username,
            password: user.password
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new User(data.username, data.password);
    }
};