import './App.css';
import React from "react";
import 'firebase/firestore';

class NewsAndAbout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {testVar: "You should see this page when you're logged in"}
    }

    render() {
        return(
            <div>
                <h1 style = {{textAlign: "center"}}>
                    Welcome to Digital Flora!
                </h1>
                <h2 style = {{textAlign: "center"}}>
                    ABOUT
                </h2>
                <p style = {{textAlign: "center"}}>
                    Digital Flora aims to promote mental health and a safe space creating a network of supportive plant growers.
                    Join our community where you can water and watch your plant grow and flourish while befriending other users on our discussion board.
                </p>
                <h3>
                    HOW TO PLAY
                </h3>
                <p>
                    Register and get your first seedling! Take some time out of your day to water your plant and take a breather while it's being watered.
                    You can water it up to every 30 minutes for faster growth, but if your plant has not been watered for more than 48 hours, it begins to wilt
                    and dies a little. :(
                </p>
                {this.state.testVar}
            </div>
        )
    }
}

export default NewsAndAbout;