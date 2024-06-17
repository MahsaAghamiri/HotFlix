import styled from "styled-components";
import {palet} from "../../Style/them";

const FooterStyle = styled.div`
.footer{
    .copy-right{
        padding-top: 5px;
    }
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${palet.headerbgColor}; 
    border-top: 1px solid #222028;
    z-index: 10;
    padding: 25px 0 15px 0;
    align-items: center;
    .logo{
        img{
            height: 30px;
            padding-top: 5px;
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

export default FooterStyle;