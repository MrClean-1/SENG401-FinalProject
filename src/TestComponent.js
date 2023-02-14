import './App.css';
import React from "react";
import 'firebase/firestore';

class TestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {testVar: "The value of the test variable is this!!"}
    }

    render() {
        return(
            <div>
                <h1>
                    This is a header!!
                </h1>
                {this.state.testVar}
            </div>
        )
    }
}

export default TestComponent;