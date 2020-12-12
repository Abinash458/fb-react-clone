import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js'

import './Feed.css';

import StoryReel from './StoryReel/StoryReel';
import MessageSender from './MessageSender/MessageSender';
import Post from './Post/Post';

const Feed = () => {

    const [postsData, setPostsData] = useState([]);

    const syncFeed = () => {
        axios.get('https://fb-react-clone.herokuapp.com/retrive/posts')
            .then((res) => {
                console.log(res.data)
                setPostsData(res.data)
            })
    }

    useEffect(() => {
        syncFeed()
    }, []);

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {
                postsData.map((entry) => (
                    <Post
                        key={entry.id}
                        profilePic={entry.avatar}
                        message={entry.text}
                        timestamp={entry.timestamp}
                        imgName={entry.imgName}
                        username={entry.user}
                    />
                ))
            }
        </div>
    )
}

export default Feed
