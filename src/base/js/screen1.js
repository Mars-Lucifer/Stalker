import React, { useEffect } from 'react';

const ScreenOne = () => {

    useEffect(() => {
        document.addEventListener('mousemove', e => {
            Object.assign(document.documentElement, {
                style: `
                --moveX: ${(e.clientX - window.innerWidth / 2) * -0.003}deg;
                --moveY: ${(e.clientY - window.innerHeight / 2) * -0.006}deg;
                `
            })
        })
    });

    return (
        <div className='Screen'>
            <div className='Screen__bac'>
                <div className='bac__layers'>
                    <div className='layers__item item_1'></div>
                    <div className='layers__item item_2'>
                        <div>
                            <p className='text__main_big'>Welcome to the zone, stalker</p>
                            <p className='text__main_small'>    -Listen, stalker, here we have the site of our Main server. Come visit us and you will find many interesting things. We've already done some stuff here, trust me. You can check us out if you're not afraid of the Zone.</p>
                        </div>
                        <a className='link__main' target="blank" href='https://www.youtube.com/watch?v=2tAPxjcGLms&t=2319s'>server</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScreenOne