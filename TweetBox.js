import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import './TweetBox.css'
import PhotoIcon from '@material-ui/icons/Photo';
import GifIcon from '@material-ui/icons/Gif';
import PollIcon from '@material-ui/icons/Poll';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { db } from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');
    const sendTweet = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Vijay Friend',
            username: 'Bapu',
            verified: true,
            text: tweetMessage, //'XEN - B.tech Civil',
            avatar: 'https://lh3.googleusercontent.com/proxy/j5XTdVCZ0PUQyHT-ciMgXMCKK-zdVyVYHAnVH8a4wrZkKxsaNJ6PwIC4kEFBMOvI0xj7OX8hPdk6dRqPJXM2eB-zmc29knWgdRnUCWLY7_lo7gvjrhRx8hv1gfYiYZdzRw',
            image: tweetImage, //'https://www.verdict.co.uk/wp-content/uploads/2017/09/giphy-downsized-large.gif',
        });
        setTweetMessage('');
        setTweetImage('');
    };
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar src='https://scontent.fjai5-1.fna.fbcdn.net/v/t1.0-9/20264920_1264442717017180_2140474373907077802_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=rMpPXQsD3soAX8pt9cx&_nc_ht=scontent.fjai5-1.fna&oh=78cf5181157afbab37003969e214dc76&oe=6000B9E1' alt='Vijay' />
                    <input onChange={e => setTweetMessage(e.target.value)} value={tweetMessage} placeholder='Whats happening?' />
                </div>
                    <input value={tweetImage} onChange={e => setTweetImage(e.target.value)} className='tweetBox__imageInput' placeholder='Optional: Enter image url'  type='text'/>
                    <div className='tweetBox__icons'>
                        <PhotoIcon className='tweetBox__icons1' fontSize='large'/>
                        <GifIcon className='tweetBox__icons2' fontSize='large' />
                        <PollIcon className='tweetBox__icons1' fontSize='large' />
                        <InsertEmoticonIcon className='tweetBox__icons2' fontSize='large' />
                        <ScheduleIcon className='tweetBox__icons1' fontSize='large' />
                    </div>
                <Button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>Tweet</Button>
            </form>
                    
        </div>
    )
}

export default TweetBox
