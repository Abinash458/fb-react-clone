import React from 'react';
import Story from '../Story/Story';

import './StoryReel.css';

const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story
                image="https://cdn.shopify.com/s/files/1/0128/3672/products/DIMENSIONAL_ABSTRACT_PORTRAIT_no._IV_1024x1024.png?v=1507719723"
                profileSrc='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'
                title='Abinash Mohapatra'
            />
            <Story
                image="https://images.saatchiart.com/saatchi/749657/art/6280147/5349919-MVLFYBVE-7.jpg"
                profileSrc='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'
                title='Barak Obama'
            />
            <Story
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkys2d6nu7erUxByTQz9wGkbU9fUKg623Slw&usqp=CAU"
                profileSrc='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'
                title='Amit Sah'
            />
        </div>
    )
}

export default StoryReel
