import React from 'react';

import './SideBar.css';

import SideBarRow from './SideBarRow/SideBarRow';

import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';


const SideBar = () => {
    return (
        <div className="sidebar">
            <SideBarRow src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" title="Abinash" />
            <SideBarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
            <SideBarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SideBarRow Icon={PeopleIcon} title="Friends" />
            <SideBarRow Icon={ChatIcon} title="Messenger" />
            <SideBarRow Icon={StorefrontIcon} title="Marketplace" />
            <SideBarRow Icon={VideoLibraryIcon} title="Videos" />
            <SideBarRow Icon={ExpandMoreOutlinedIcon} title="See More" />
        </div>
    )
}

export default SideBar
