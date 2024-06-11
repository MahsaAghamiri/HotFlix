import styled from "styled-components";
import palet from "../../Style/them";

const SearchStyle = styled.div`
    .search{
        position: relative;
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
    .serach-result{
        position: absolute;
        width: 100%;
        top: 100%;    
        left: 0;
        background-color: ${palet.bgColor};
        adding: 10px;
        border-radius: 8px;
        ul{
            margin: 10px;
        }
    }
`;
export default SearchStyle;