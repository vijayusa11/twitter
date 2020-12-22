import React from 'react'
import './Widgets.css'
import { TwitterTimelineEmbed, TwitterShareButton,  TwitterTweetEmbed } from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <div className='widgets'>
            <div className='widgets__input'>
                <SearchIcon className='widgets__searchIcon' />
                <input placeholder='Search Twitter' type='text' />
            </div>
            <div className='widgets__WidgetContainer'>
                <h2>What’s happening</h2>
                <TwitterTweetEmbed tweetId={'1339551993094840320'} />
                <TwitterTimelineEmbed sourceType="profile" screenName="VijayCh80459783" options={{height: 400}} />
                <TwitterShareButton url={'https://www.facebook.com/vijay.choudhary.52012'} options={{ text:'Vijay is king of JODHPUR' , via: 'VijayCh80459783' }} />
            </div>
        </div>
    )
}

export default Widgets
