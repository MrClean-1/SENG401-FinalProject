import React, { Component } from 'react';
import Post from './Post';
import PostEditor from './PostEditor';
import {addPost, getPosts} from "../Database/DatabaseMethods";

class ThreadDisplay extends Component {

    constructor(props) {
        super(props);

        this.addPost = this.addPost.bind(this);
        this.updateLocalState = this.updateLocalState.bind(this);

        this.state = {
            posts: [],
        }
    }


    async componentDidMount() {
        const {updateLocalState} = this;
        const postList = await getPosts();
        if(postList != null)
            updateLocalState(postList);
    }

    async addPost(subject, body) {
        await addPost(subject, body);
        const postList = await getPosts();
        this.updateLocalState(postList)
    }

    updateLocalState(postList) {
        this.setState({
            posts: postList,
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map((post, idx) => {
                        return (
                            <Post key={idx} post={post}/>
                        )
                    })
                }
                <PostEditor addPost={this.addPost}/>
            </div>
        );
    }
}

export default ThreadDisplay;