import * as React from "react";
import {useParams} from "react-router-dom";
import {getPost} from "../Database/DatabaseMethods";
import Post from "./Post";

function SinglePostPage() {
    const { postID } = useParams();
    const post = getPost(postID);

    return (
        <div>
            <h1>POST YOU CLICKED</h1>
            <Post post={post}/>
        </div>
    );
}

export default SinglePostPage;