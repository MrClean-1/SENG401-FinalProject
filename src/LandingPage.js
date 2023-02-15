import './App.css';
import React from "react";
import 'firebase/firestore';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {testVar: "Another value of a variable here"}
    }

    render() {
        return(
            <div>
                <h1>
                    You should see this page from the front of the site!
                </h1>
                {this.state.testVar}
            </div>
        )
    }
}

export default LandingPage;