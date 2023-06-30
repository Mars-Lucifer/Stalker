import React from 'react';
import TextOne from './text1';

class ScreenFour extends React.Component {
    render() {
        return (
            <div className='Screen'>
                <div className='container'>
                    <div className='row'>
                        <TextOne
                        title="News from the server"
                        desc='Listen, stalkers, I have news for you, fresh as a new hat - interesting things are happening on our server. There is some kind of organization, sect, company here, I honestly don’t know who they are, but its name is the “Ventrolist Guild” or the “Lucifer Guild” - that’s what the stalkers call it. Well, the influence of these guys in our area has become so great that they were even able to buy out several other organizations. Who knows, stalkers, maybe this guild is worse than the Zone itself. However, if you are a smart stalker, then just order their nightmare with a sly smile, in a powder flask, of course.'/>
                        <div className='box__image_one col-lg-6'>
                            <div className='img img3'></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ScreenFour