import styled from "styled-components";
import {palet, type} from "../../Style/them";

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
        padding-bottom: 80px;
        .long-image,
        .wide-image{
            width: 100%;
            height: 100%;
            object-fit: fill;
            border-radius: 10px;

        }
    
        .text-content{
      
        // padding-left: 30px;
        // padding-right: 30px;
        font-size: 16px;
        line-height: 26px;
        .movie-info{
        min-height: 60%;
            strong{
                font-weight: 200px;
                color: ${palet.primarycolor};
            }
        }
        .movie-plot{
            max-width: 400px;
            margin-bottom: 10px;
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
                font-size: ${type.fontSizeMd};
                line-height: 26px;
            }
        }
    }
    }
    .discover-header{
           border-bottom: 1px solid #222028;
        span{
            padding:0 20px;
            border-bottom: 2px solid ${palet.primarycolor};
        }
    }
     .discover-content{
            strong{
                font-weight: 200px;
                color: ${palet.primarycolor};
            }
            padding: 30px;
            line-height: 30px;
            min-height: 250px;
            border-radius: 8px;
            border: 1px solid #222028;
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
        }
}
`;
export default MovieDetailsStyle;