import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js'

import instance from '../../shared/baseUrl';

import './Feed.css';

import StoryReel from './StoryReel/StoryReel';
import MessageSender from './MessageSender/MessageSender';
import Post from './Post/Post';

const pusher = new Pusher('47b152bab4ba45825534', {
    cluster: 'ap2'
});

const Feed = () => {

    const [postsData, setPostsData] = useState([]);

    const syncFeed = () => {
        instance.get('/retrive/posts')
            .then((res) => {
                // console.log(res.data)
                setPostsData(res.data)
            })
    }

    useEffect(() => {
        const channel = pusher.subscribe('posts');
        channel.bind('inserted', function (data) {
            syncFeed();
        });
    }, [])

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
