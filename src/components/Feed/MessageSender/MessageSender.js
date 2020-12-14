import React, { useState } from 'react';
import FormData from 'form-data';

import { Avatar, Input } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import { useStateValue } from '../../../context/StateProvider';

import './MessageSender.css'
import instance from '../../../shared/baseUrl';

const MessageSender = () => {

    const [input, setInput] = useState('');
    const [image, setImage] = useState(null);
    const [{ user }, dispatch] = useStateValue();

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (image) {
            const imgForm = new FormData()
            imgForm.append('file', image, image.name);

            instance.post('/upload/image', imgForm, {
                headers: {
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'content-type': `multipart/form-data; boundary=${imgForm._boundary}`,
                }
            }).then((res) => {
                // console.log(res.data)

                const postData = {
                    text: input,
                    imgName: res.data.filename,
                    user: user.displayName,
                    avatar: user.photoURL,
                    timestamp: Date.now()
                }
                // console.log("postData", postData);
                savePost(postData)
            })
        } else {
            const postData = {
                text: input,
                user: user.displayName,
                avatar: user.photoURL,
                timestamp: Date.now()
            }
            // console.log("postData", postData);
            savePost(postData)
        }

        setInput('');
        setImage(null);
    }

    const savePost = async (postData) => {
        await instance.post('/upload/post', postData)
            .then((resp) => {
                // console.log(resp)
            })
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" />
                <form>
                    <input
                        type="text"
                        className="messageSender__input"
                        placeholder="What's on your mind?"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Input
                        type="file"
                        className="messageSender__fileSelector"
                        onChange={handleChange}
                    />
                    <button onClick={handleSubmit} type="submit">Hidden Submit</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
