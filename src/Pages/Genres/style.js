import styled from "styled-components";
import {palet, type} from "../../Style/them";

const MovieListStyle = styled.div`
.movies-header{
    padding-top: 150px;
    line-height: ${type.lineHeightMd};
           border-bottom: 1px solid #222028;
        span{
            padding:0 20px;
            border-bottom: 2px solid ${palet.primarycolor};
        }
    
    .veiwAll{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 120px;
        border-radius: 8px;
        background-color: transparent;
        font-size: 14px;
        color: #fff;
        text-transform: uppercase;
        border: 2px solid ${palet.primarycolor};
        margin-bottom: 40px;
        &:hover{
            color: #fff;
            background-color: rgba(249, 171, 0, 0.05);
        }
    }
    .title{
        margin-bottom: 40px;
    }
}

.movies{
    .pagination{
    margin: 80px 0;
    text-align: center
    
}
    padding-top: 50px;
    margin-bottom: 80px;
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
export default MovieListStyle;