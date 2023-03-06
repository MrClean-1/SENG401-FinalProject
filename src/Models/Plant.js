class Plant{
    constructor(type, rewards){
        this.type = type;
        this.rewards = rewards;
        const date = new Date();
        this.expiration = date.getDay();
    }

    //Getters
    get type(){
        return this.type;
    }

    get expiration(){
        return this.expiration;
    }

    get rewards(){
        return this.rewards;
    }

    //Setters
    set type(x){
        this.type = x;
    }

    set expiration(x){
        this.expiration = x;
    }

    set rewards(x){
        this.rewards = x;
    }
}