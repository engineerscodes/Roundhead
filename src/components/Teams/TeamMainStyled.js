import styled from 'styled-components'


export const DisplayList =styled.div`


display :flex;
background :#010606;

@media screen and (max-width :768px)
{
  
}

@media screen and (max-width :480px)
{
  
}



`;

export const DisplayH1=styled.h1`
   width :100%;
   font-size : 2.5rem;
   color :#fff;
   margin-bottom :64px;
   text-align :center;
   padding :5px;
   margin : 0 auto;
   @media screen and (max-width :480px)
{
    font-size :2rem;
}
`;


export const Teamgrid=styled.div`

   display: grid;
   grid-template-columns: minmax(300px,1fr);
   justify-content: center;
   grid-gap: 2rem;
   margin: 2rem;
   
   @media screen and (min-width :500px)
{

        grid-template-columns: repeat(2,1fr);

}


@media screen and (min-width :760px)
{


        grid-template-columns: repeat(4,1fr);

}

`;