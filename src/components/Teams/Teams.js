import React from 'react'

import {Team,BackgroundImg,ProfileImage,PersonName,Position,Qutoes,FollowBtn} from './TeamsStyle'


const Teams = () => {
    return (
        <>
        
           <Team>
               
                <BackgroundImg ></BackgroundImg>

                <ProfileImage alt="Profile Picture"  src="https://scontent.fpnq10-1.fna.fbcdn.net/v/t1.0-9/26815533_497885003941084_4269498753401105411_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=BM2ypWlbWtYAX8TsVZX&_nc_ht=scontent.fpnq10-1.fna&oh=ba3e97facb8113295fa6091a8e930e34&oe=60378405"></ProfileImage>

                <PersonName> Naveen</PersonName>
                <Position> Team Lead</Position>

                <Qutoes>Machine learning, Computer Vision enthusiast, 
                   Learning new Skills ,Developing Visually Cool Dapp's ,
                   Trying to contribute more to future AI world,
                   And Waiting to Unleash my Tech Skills to the Future.</Qutoes>
                   
                <FollowBtn>Follow</FollowBtn>

           </Team>
        </>
    )
}

export default Teams;
