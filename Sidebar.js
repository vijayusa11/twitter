import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MessageIcon from '@material-ui/icons/Message';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';
import MoreIcon from '@material-ui/icons/More';
import { Button } from '@material-ui/core';

function Sidebar() {
    return (
        <div className='sidebar'>
            <TwitterIcon className='sidebar__twitterIcon' fontSize='large'/>
            
            <SidebarOption active Icon={HomeIcon} text='Home' />
            <SidebarOption Icon={ExploreIcon} text='Explore' />
            <SidebarOption Icon={NotificationsIcon} text='Notifications' />
            <SidebarOption Icon={MessageIcon} text='Messages' />
            <SidebarOption Icon={BookmarksIcon} text='Bookmarks' />
            <SidebarOption Icon={ListAltIcon} text='Lists' />
            <SidebarOption Icon={PersonIcon} text='Profile' />
            <SidebarOption Icon={MoreIcon} text='More' />
            
            <Button className='sidebar__sweet' variant='outlined' fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar
