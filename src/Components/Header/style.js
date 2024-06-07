import styled from "styled-components";
import palet from "../../Style/them";

const HeaderStyle = styled.div`
.header{
    .search{
        backgroun-color: red;
           .search-box{    
                min-height: 50px;
                width: 100%;
                border-radius: 8px;
                background-color: #222028;
                border: 2px solid transparent;
                font-size: 1.7rem;
                color: #fff;
                padding: 0 50px 0 20px;
                &:focus{
                    border-color: ${palet.primarycolor};
                }
                &:hover{
                    border-color: ${palet.primarycolor};
                }
       
        }

    }
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color:  ${palet.headerbgColor};
    border-bottom: 1px solid #222028;
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

export default HeaderStyle;