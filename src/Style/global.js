import { createGlobalStyle } from "styled-components";
import { palet, type } from "./them";


const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Source';
    src: url(../public/Fonts/SourceSans/SourceSans3-Regular.ttf) format('ttf');
   }
*{
    box-sizing: border-box;
}
html{
    font-size: 10px;
}
body{
    font-family: ${type.mainFont}, sans-serif;
    font-weight: 400;
    background-color: #1a191f;
    margin: 0;
    color: #fff;
}
h1,h2,h3,h4,h5,h6,*{
    margin: 0;
    padding: 0;
}
ul,li{
    margin: 0;
    padding: 0;
    list-style: none;
}
a{
    text-decoration: none;
    color: #ebe9e9;
}
h1{
    font-size: 4rem;
    font-weight: 400;
    line-height: 46px;
}
h2{
    font-size: 3.6rem;
    font-weight: 400;
    line-height: 46px;
}
.container{
    max-width: 1400px;
    margin: 0 auto;  
}

.d-flex{
    display: flex;
}
.justify-center{
    justify-content: center;
}
.ant-col {
    margin-inline-start: 0 !important;
  }
.custom-link:hover {
    color: #f9ab00;
  }
.text-align-center{
    text-align: center;
}
.d-none{
    display: none;
}
.d-contents{
    display: contents;
}
input:focus {
    outline: none;
}
.padding-top-loading{
    padding-top: 100px;
}
.section-space {
    padding: 20px 0;
    border-top: 1px solid #222028;
}
::selection {
    background: #f9ab00;
    color: #fff;
    text-shadow: none;
}
::-webkit-scrollbar {
    width: 8px;
}
::-webkit-scrollbar-thumb {
    background-color: #1f1f1f;
    border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
    background-color: #555;
}
@media (min-width: 2200px) {
    .movie-details  .movie-details-content .text-content .movie-plot{
        min-height: 300px;
       
    }
    .iDuxj .movie-details .movie-details-content .text-content .movie-plot P{
             font-size: ${type.fontSizeLg}
             line-height: ${type.lineHeightLg}
        }
}
@media (min-width: 1200px) {
    .header .hamburger-menu {
        display: none;
    }
}
 @media(max-width: 1200px){
    .header .menu{
        display: none;
    }
    .header .search{
        padding-top: 20px;
    }
        
}
@media(max-width: 780px){
    h2{
        font-size: 3rem;
    }
   
    .header .menu ul li{
        font-size: 1.2px; 
    }
    .home .hero-section .hero{
        padding-top: 300px;
    }
}

.border-bottom-primarycolor
{
     border-bottom: 2px solid ${palet.primarycolor};    
}}
`;
export default GlobalStyle;