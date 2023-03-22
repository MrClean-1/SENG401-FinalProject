import React from 'react';
import './styles/Post.css';

const Post = (props) => (
    <div className="panel panel-default post-body">
        <div className="panel-body">
            <h2 key={props.idx}>{props.post.subject}</h2>
            <div key={props.idx}>{props.post.body}</div>
        </div>
    </div>
);

export default Post;