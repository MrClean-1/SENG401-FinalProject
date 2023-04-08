import * as React from "react";
import {useParams} from "react-router-dom";
import {getPost} from "../Database/DatabaseMethods";
import Post from "./Post";
import {Component} from "react";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class SinglePostPage extends Component {
    constructor(props) {
        super(props);

        const { postID } = this.props.params;
        console.log("postID: " + postID)

        this.state = {
            postID: postID,
            post: [],
        }
    }


    async componentDidMount() {
        const parentPost = await getPost(this.state.postID);
        if(parentPost != null)
            this.setState({
                post: parentPost,
            });
    }

    render() {
        return (
            <div>
                <h1>POST YOU CLICKED</h1>
                <Post post={this.state.post}/>
            </div>
        );
    }
}

export default withParams(SinglePostPage);