import React from 'react';

import { Avatar } from '@material-ui/core';

import './Post.css';
import { ChatBubbleOutline, ThumbUp, NearMe, AccountCircle, ExpandMoreOutlined } from '@material-ui/icons';

const Post = ({ profilePic, message, timestamp, imgName, username }) => {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar" />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
                {/* Image is coming Later */}
            </div>
            <div className="post__options">
                <div className="post__option">
                    <ThumbUp />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutline />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMe />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircle />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    )
}

export default Post
