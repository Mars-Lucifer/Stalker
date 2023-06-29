import React, { useEffect } from 'react';

const ScreenOne = () => {

    useEffect(() => {
        document.addEventListener('mousemove', e => {
            Object.assign(document.documentElement, {
                style: `
                --moveX: ${e.clientX}deg;
                --moveY: ${e.clientY}deg;
                `
            })
        })
    });

    return (
        <div className='Screen'>
            <div className='container'>
                <h3>Hello! It's the testing</h3>
            </div>

            <div className='Screen__bac'>
                <div className='bac__layers'>
                    <div className='layers__item item_1'></div>
                    <div className='layers__item item_2'></div>
                </div>
            </div>
        </div>
    )
}

export default ScreenOne