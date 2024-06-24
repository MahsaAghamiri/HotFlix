import styled from "styled-components";
import {palet} from "../../Style/them";

const HeaderStyle = styled.div`
.header{
    
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color:  ${palet.headerbgColor};
    border-bottom: 1px solid #222028;
    z-index: 10;
    padding: 17px 0 12px 0;
    align-items: center;
    .logo{
        img{
            height: 30px;
            padding-top: 5px;
        }
    }
        
    .hamburger-menu{
    //     display: none;
            position: absolute;
            right: 0;
            top: 50%;
            margin-top: -22px;
            width: 100px;
            height: 40px;
            .btn-menu{
                float: right;
                font-size:3rem;
                color: ${palet.primarycolor};
                background-color: inherit;
                cursor: pointer;
                border: none;
               
            }
            .hamburger-menu-items.show {
                display: block;
                opacity: 1;
                }
            .hamburger-menu-items{
            display: none;
            opacity: 0;
            transition: 3s ease;
                position: absolute;
                top: 100%;
                left: 0;
                height: 100vh;
                padding-left: 20px;
                padding-right: 100px;
                line-height: 40px;
                z-index: 11;
              
                background-color: #1a191f; 
                ul{
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    position: fixed;
                    top: 60px;
                    right: 0;
                    bottom: 0;
                    background-color: #1a191f;
                    z-index: 99;
                    width: 220px;
                    padding: 30px 30px 0;
                    border-top: 2px solid #f9ab00;
                    li{
                        width: 100%;
                        display: block;
                        height: 30px;
                        margin-bottom: 20px;
                        position: relative;
                        font-size: 1.6rem;
                        font-weight: 500;
                        &:hover{
                            color:  ${palet.primarycolor};
                        }
                }
                } 
            }
     }
    .menu{
        padding-top: 5px;
        ul{
            display: flex;
            li{
                font-size: 1.6rem;
                font-weight: 500;
                margin-right: 35px;
                &:hover{
                    color:  ${palet.primarycolor};
                }
            }
            
        }
    
   
}
 
`;

export default HeaderStyle;