import styled from "styled-components";
import {palet} from "../../Style/them";

const AllMoviesStyle = styled.div`
    .movies-header{
    
   
}

.movie-items{

    padding-top: 160px;
    margin-bottom: 160px;
    h3{
    color: ${palet.primarycolor}
    }
    .pagination{
        margin-top: 50px;
        text-align: center
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
export default AllMoviesStyle;