import React from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from 'stream-chat-react';
import EagleIcon from '../assets/EagleIcon.jpg';
import LogoutIcon from '../assets/logout.png';

const Sidebar = () => (
    <div className="channel-list__sidebar">
        <div className="chanel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={EagleIcon} alt="Logo" width="30" />
            </div>
        </div>
        <div className="chanel-list__sidebar__icon2">
            <div className="icon1__inner">
                <img src={LogoutIcon} alt="Logout" width="30" />
            </div>
        </div>
    </div>
)

const ChannelListContainer = () => {
    return (
        <>
            <Sidebar />
        </>
    )
}

export default ChannelListContainer
