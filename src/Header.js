import './App.css';
import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1> This text should be displayed at the top of the page</h1>
            </div>
        )
    }
}

export default Header;