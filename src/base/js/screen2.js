import React from 'react';
import TextOne from './text1';

class ScreenTwo extends React.Component {
    render() {
        return (
            <div className='Screen'>
                <div className='container'>
                    <div className='row'>
                        <TextOne
                        title="What kind of server is this"
                        desc='    -What do you hear, stalker? You know about the Chernobyl Zone, right? Ruins, radiation, Lal Top, anomalies... But I know that you are looking for something much more dangerous - adventure, riches and the opportunity to become a legend! Normal people were brought there by the authorities, a la "look how good we are" - and they either brought the bodies back or did not return themselves.
                        -But our comrades have opened their own server, where you can try to survive in the zone with everything possible - RNG, food, anomalies, bandits, military, Stalkers and other diseases. We are working on a map of the Zone and the settlement next to it, and you can join us and clearly see how strong you are a real stalker! Challenge your destiny!'/>
                        <div className='box__image_one col-lg-6'>
                            <div className='img img1'></div>
                            <div className='img img2'></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ScreenTwo