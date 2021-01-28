import React from 'react';
import {InfoContainer ,InfoWrapper,InfoRow,Column1,Column2,TextWrapper , TopLine,Heading ,Subtitle, ImgWrap,Img,EventSwrapper,LinkWrapper, ExternalLink } from './AboutStyled';
import './Youtubes.css';
import logoSmall from '../../Images/Image.svg';



const About = ({id,lightBg,imgStart,topline,lightText,headline,darkText, description, img,alt,eventSwapper,dates,venu,Linkdisc,eventLinks,headingcolor}) => {
  
 
  
  return (
    
      <>
        <InfoContainer lightBg={lightBg} id={id}>

          <InfoWrapper>

              <InfoRow imgStart={imgStart}>
                  
                  <Column1>

                   <TextWrapper>
                       
                       <TopLine headingcolor={headingcolor}>{topline}</TopLine>
                       <Heading lightText={lightText}>{headline}</Heading>
                       <Subtitle darkText={darkText}>{ description}</Subtitle>
                        
                      <EventSwrapper eventSwapper={eventSwapper}>
                      <Subtitle darkText={darkText}>{dates }</Subtitle>                     
                      <Subtitle darkText={darkText}>{venu}</Subtitle>
                      {/*<Subtitle darkText={darkText}><a href={eventLinks}  rel="noopener noreferrer" target='_blank'>{Linkdisc}</a></Subtitle>*/ }
                      <LinkWrapper>
                      <ExternalLink to={{ pathname:eventLinks} }target="_blank"  >{Linkdisc} </ExternalLink>
                      </LinkWrapper>
                     
                      </EventSwrapper>

                   </TextWrapper>

                  </Column1>
                  <Column2>
                  
                  <ImgWrap>
                  <div className="Youtube">
                 {/*<ReactPlayer  url={img}  controls    loop={true} width = "450px"  height = "350px" />*/}
                <iframe src={img} width="450px" height="350px" title="Videos"   frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 

                  </div>
                  <Img src = {logoSmall} alt={alt}/>
                  </ImgWrap>
                  </Column2>
            

               </InfoRow>

          </InfoWrapper>

        </InfoContainer>
 

      </>

    )
}

export default About;
//
//<Img src={ img} alt={alt} width="100px" height="100px"/> 