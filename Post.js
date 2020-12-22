import { Avatar } from '@material-ui/core'
import React, {forwardRef} from 'react'
import './Post.css'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

const Post = forwardRef(({ displayName, username, verified, text, image, avatar, timestamp }, ref) => {
    return (
        <div className='post' ref={ref}>
            <div className='post__avatar'>
                <Avatar src={avatar} alt='Yogesh' />
            </div>   
            <div className='post__body'>
                <div className='post__header'>
                    <div className='post__headerText'>
                        <h3>{displayName}<span className='post__headerSpecial'>{verified && <VerifiedUserIcon fontSize='small' className='post__badge' />} @{username}</span></h3>
                    </div>
                    <div className='post__headerDescription'>
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt='vijay' />
                <div className='post__footer'>
                    <ChatBubbleOutlineIcon />
                    <RepeatIcon />
                    <FavoriteBorderIcon />
                    <PublishIcon />
                </div>
            </div>
            
        </div>
    )
})

export default Post
