import React from 'react';

import './Widget.css';

const Widget = () => {
    return (
        <div className="widgets">
            <iframe
                title="widget"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fthingsthatmakesyousmile%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=868067727065043"
                width="340"
                height="1500"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                // frameborder="0"
                // allowTransparency="true"
                allow="encrypted-media"

            ></iframe>
        </div>
    )
}

export default Widget
