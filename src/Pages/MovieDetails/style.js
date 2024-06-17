import styled from "styled-components";
import {palet} from "../../Style/them";

const MovieDetailsStyle = styled.div`
.movie-details{
    padding-bottom: 160px;
    padding-top: 160px;
    .movie-details-header{
        padding-bottom: 40px;
    }
    .movie-details-content{
        width: 100%;
        height: 100%;
        .long-image,
        .wide-image{
            width: 100%;
            height: 100%;
            object-fit: fill;
            border-radius: 10px;

        }
    .text-content{
      
        padding-left: 30px;
        padding-right: 30px;
        font-size: 16px;
        line-height: 26px;
        .movie-info{
            strong{
                font-weight: 200px;
                color: ${palet.primarycolor};
            }
        }
        .movie-plot{
         
            height: 120px;
            border-radius: 8px;
            background-color: #222028;
            margin-top: 50px;
            overflow-y: scroll; 
            outline: none;
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
            P{
                padding: 15px ;
                font-size: 16px;
                line-height: 26px;
            }
        }
    }
    }
}
`;
export default MovieDetailsStyle;