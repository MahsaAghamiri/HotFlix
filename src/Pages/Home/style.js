import styled from "styled-components";

const HomePageStyle = styled.div`
.home{
    .hero-section{
        width: 100%;
       // min-height: 100dvh;
     //   min-height: 700px;
        position: relative;
        top: 0;
        left: 0;
        opacity: 0.8;
        &:before{
            content: '';
            z-index: 2;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            display: block;
            background: linear-gradient(0deg, #1a191f 0%, #1a191f 25%, rgba(26, 25, 31, 0) 100%);
        }
        .hero{
        //  max-height: 700px;
            position: relative;
            width: 100%;
         //   min-height: 700px;
            margin: 0 auto;
            z-index: 3;
            padding-top: 100px;
            .splide__slide{
                width: 170px;
                height: 300px;;
                padding: 30px;
                img{
                 text-align: center;
                width: 100%;
                height: 100%;
                object-fit: fill;
                }
            }
            .slider{
             margin: 0 auto;
               img{
                text-align: center;
                width: 100%;
                height: 100%;
                object-fit: fill;
                
               }
            }
           
        }
    }
    .content{   
            padding-bottom: 150px; 
    }
    
}
`;
export default HomePageStyle;