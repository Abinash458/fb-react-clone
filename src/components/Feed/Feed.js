import React from 'react';

import StoryReel from './StoryReel/StoryReel';
import MessageSender from './MessageSender/MessageSender';
import Post from './Post/Post';

const Feed = () => {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post
                profilePic="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                message="Yo This is the message"
                timestamp='1601493943737'
                imgName="iamgeName"
                username="Abinash Mohapatra"
            />
        </div>
    )
}

export default Feed
