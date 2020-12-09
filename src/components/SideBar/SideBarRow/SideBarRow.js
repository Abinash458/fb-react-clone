import React from 'react';

import { Avatar } from '@material-ui/core';

import './SideBarRow.css';

const SideBarRow = ({ src, Icon, title }) => {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}

            <p>{title}</p>
        </div>
    )
}

export default SideBarRow
