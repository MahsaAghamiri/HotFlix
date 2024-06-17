import styled from "styled-components";
import palet from "../../Style/them";

const SearchStyle = styled.div`
    .search{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        backgroun-color: red;
           .search-icon{
                position: absolute;
                right: 10px;
                font-size: 20px;
                color: ${palet.primarycolor};
            }
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
        max-height: 300px;
        overflow-y: auto;
        top: 100%;    
        left: 0;
        background-color: ${palet.bgColor};
        adding: 10px;
        border-radius: 8px;
        padding-top: 15px;
        &::-webkit-scrollbar {
            width: 4px;
             }
            &::-webkit-scrollbar-thumb {
            background-color: ${palet.primarycolor};
            border-radius: 50px;
            }
            &::-webkit-scrollbar-thumb:hover {
               background-color: ${palet.primarycolor}
            }
        .search-result-items{
            border-bottom: 1px solid #222028;
            margin: 0;
            padding: 4px 10px 0 10px;
            .content{
                width: 80%;
                max-height: 70px;
                vertical-align: top;
                display: inline-block;
                padding-left: 20px;
                .title{
                    max-width: 100%;
                    max-height: 20px;
                    overflow: hidden;
                    font-size: 1.4rem;
                }
                .genres{
                    color: ${palet.primarycolor};
                    font-size: 1.1rem;
                    padding: 5px 0;
                }
            }
            .poster{
                width: 15%;
                height: 70px;
                display: inline-block; 
                img{
                    
                    width: 100%;
                    height 100%;
                    object-fit: fill;
                    border-radius: 10px;
                    
                }
           
        }
        }
        
    }
`;
export default SearchStyle;