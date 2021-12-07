import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookie from 'universal-cookie';

import './App.css'

import { ChannelContainer, ChannelListContainer, Auth } from './components';

const apiKey = '5qv96st8u67r';

const client = StreamChat.getInstance(apiKey);

const AuthToken = false;

const App = () => {

    if (!AuthToken) return <Auth />

    return (
        <div className='app__wrapper'>
            <Chat client={client} theme='team light'>
                <ChannelListContainer /> { /* The sidebar component */}
                <ChannelContainer />
            </Chat>
        </div>
    )
}

export default App
