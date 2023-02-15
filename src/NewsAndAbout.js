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
                <h1>
                    Welcome to the Garden! This is the News and About page
                </h1>
                {this.state.testVar}
            </div>
        )
    }
}

export default NewsAndAbout;