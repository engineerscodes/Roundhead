import styled from 'styled-components'

export const Team =styled.div`
 box-shadow: 0px 2px 8px 0px white;   
 text-align: center;
 border-radius: 1.5rem;
 position: relative;
 overflow: hidden;
 
  background :white;

  &:hover{
     
     cursor: default;
     transform: rotateY(360deg);
     transition: all 2s ease-in-out 0.5s;
 
      }
`;


export const BackgroundImg =styled.div`

  position: absolute;
  background-image: url("https://media-exp1.licdn.com/dms/image/C5616AQEfodHnXMGDSQ/profile-displaybackgroundimage-shrink_350_1400/0/1604487444089?e=1617235200&v=beta&t=Er7WCo7MpjfYKL950YACICcpXl-tDMJJCv66VS36haU");
  height: 10rem;
  width: 100%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;


`;

export const ProfileImage =styled.img`

   width: 8rem;
   clip-path: circle(60px at center);
   margin-top: 4.5rem;

   &:hover{
     
    cursor: default;
    transform: rotate(360deg);
    transition: all 0.7s ease-in-out 0.5s;

     }


`;

export const PersonName =styled.h1`

font-size: 1.5rem;

`;


export const Position =styled.h1`
  font-size: 1.5rem;
  text-transform: uppercase;

`;
 export const Qutoes =styled.h1`
   margin: 1rem 2rem;
  font-size: 0.9rem;
 `;

export const FollowBtn =styled.button`

  width: 100%;
  border: none;
  font-size: 1rem;
  color: white;
  background-color: #01bf71;
  padding: 1rem;

  &:hover{

transition :all 0.2s ease-in-out;
background :#fff;
color :#010606;
}
`;


  