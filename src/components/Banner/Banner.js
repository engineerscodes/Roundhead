import React from 'react';
import Video from '../../Images/video.mp4';
import {BannerContainer,Banner,VideoBg} from './BannerStyle';
import './Banners.css'

const VideoBanner = () => {
    return (
        <BannerContainer id='banner'>
           
         <Banner>
             <VideoBg  autoPlay loop muted src={Video} type='video/mp4'           />
         </Banner>
          <div className="aboutBanner">
              <h1 className="aboutH1">ANDROID_</h1>
              <h1 className="aboutH1">CLUB</h1>
              <h3 className="aboutP">VITAP</h3>
          </div>
        </BannerContainer>
    )
}

export default VideoBanner;
