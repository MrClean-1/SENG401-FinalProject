import './App.css';
import React from "react";
import 'firebase/firestore';
import Header from "./Header";

class NewsAndAbout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {testVar: "You should see this page when you're logged in"}
    }

    render() {
        return(
            <div style = {{textAlign: "center"}}>
                <Header/>
                <h1>
                    Welcome to Digital Flora!
                </h1>
                <p>
                    A safe place to grow plants and interact interact with others
                </p>
                <h3>
                    HOW TO PLAY
                </h3>
                <p>
                    1. Using Flora coins, buy a seedling. You can buy and take care of up to three plants.<br/>
                    2. Water your seedling within 48 hours. Every time you water your plants, you can earn coins.<br/>
                    3. Once it’s at full growth, you can trade your plant with others or add it to your garden collection.<br/>
                    4. Use the Discussion Board to talk with other users or answer the Daily Wellness prompt.
                </p>
                {this.state.testVar}
            </div>
        )
    }
}

export default NewsAndAbout;