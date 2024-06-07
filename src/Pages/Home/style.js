import styled from "styled-components";

const HomePageStyle = styled.div`
.home{
    .hero-section{
        width: 100%;
        min-height: 100dvh;
        min-height: 700px;
        background-image: url(../../../Images/home__bg.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        position: relative;
        top: 0;
        left: 0;
        opacity: 0.2;
        &:after{
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
            position: relative;
            min-height: 100dvh;
            min-height: 700px;
           
        }
    }
    .content{   
            padding-bottom: 150px; 
    }
    
}
`;
export default HomePageStyle;