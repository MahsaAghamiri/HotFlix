import styled from "styled-components";
import palet from "../../Style/them";

const SearchStyle = styled.div`
    .serach-content{
        
          padding-bottom: 160px;
          padding-top: 120px;
          .search{
             .search-icon{
                position: absolute;
                top: 15px;
                right: 20px;
                font-size: 25px;
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
                margin-bottom: 50px;
                &:focus{
                    border-color: ${palet.primarycolor};
                }
                &:hover{
                    border-color: ${palet.primarycolor};
                }
       
            }
          }
         
        }
    .movie-items{
    padding-top: 30px;
    margin-bottom: 80px;
    .pagination{
        text-align: center;
        margin-top: 80px;
    }
    h3{
    color: ${palet.primarycolor}
    }
    .item-cover{
        height: 87%;
        width: 100%;
        position: relative;
        .movies-img{
            width: 100%;
            height: 100%;
            object-fit: fill;
            border-radius: 8px;
        }
        .overlay{
        position: absolute;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 0;
        visibility: hidden;
        transition: all 1s;
         border-radius: 8px;
         overflow: hidden;
    }
    &:hover{
        .overlay{
            opacity: 1;
            visibility: visible;
        }
    }

    }
      
        
    }
    
    .item-content{
        h6{
            font-size: 1.6rem;
            line-height: 20px;
            font-weight: 400;
        }
        span{
            color: ${palet.primarycolor};
        }
    }
    }
`;
export default SearchStyle;