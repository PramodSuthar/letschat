import React from 'react'

import { AddChannel } from '../assets';

const TeamChannelList = ({ children, error = false, loading, type }) => {
    if (error) {
        return type === 'team' ? (
            <div className="team-channel-list">
                <p className="team-channel-list__message">
                    Connection Error. Please try Again!!
                </p>
            </div>
        ) : null
    }

    if (loading) {
        <div className="team-channel-list">
            <p className="team-channel-list__message loading">
                {type === 'team' ? 'Channels' : 'Messages'} loading...
            </p>
        </div>
    }

    return (
        <div className='team-channel-list'>
            <div className="team-channel-list__header">
                <div className="team-channel-list__header__title">
                    <p>
                        {type === 'team' ? 'Channels' : 'Direct Messages'}
                    </p>
                </div>
                {children}
            </div>

        </div>
    )
}

export default TeamChannelList
