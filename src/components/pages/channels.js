import React, { useState } from 'react';
import YouTubeImage from './Images/Youtube.jpg';
import InstagramImage from './Images/Instagram_icon.png';
import FacebookImage from './Images/Facebook.png';
import TikTokImage from './Images/tik tok.png';
import LinkedInImage from './Images/LinkedIn_icon.svg.png';
import PinterestImage from './Images/pintresst.png';
import TwitterImage from './Images/twitter.png';
import ThreadsImage from './Images/threads.png';

import './channels.css';

const ChannelsPage = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);

  const channels = [
    { name: 'YouTube', image: YouTubeImage },
    { name: 'Instagram', image: InstagramImage },
    { name: 'Facebook', image: FacebookImage },
    { name: 'TikTok', image: TikTokImage },
    { name: 'LinkedIn', image: LinkedInImage },
    { name: 'Pinterest', image: PinterestImage },
    { name: 'Twitter', image: TwitterImage },
    { name: 'Threads', image: ThreadsImage },
  ];

  const handleChannelClick = (index) => {
    setSelectedChannel((prevSelected) => (prevSelected === index ? null : index));
  };

  return (
    <div className="connect-page-container">
      <h1>What channels do you wish to connect?</h1>
      <h4>
        Connect a channel where you wish to grow your audience
        <br />
        You can always add one later.
      </h4>

      <div className="channel-container">
        {channels.map((channel, index) => (
          <div
            className={`channel ${index === selectedChannel ? 'selected' : ''}`}
            key={index}
            onClick={() => handleChannelClick(index)}
          >
            <img src={channel.image} alt={channel.name} />
            <p>{channel.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChannelsPage;
