import styled from "styled-components";
import {palet, type} from "../../Style/them";


const AllGenresStyle = styled.div`
.genre-selection{
    position: relative;
    margin-bottom: 50px;
    border-bottom: 1px solid #222028;
    .selection{
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        text-align: center;
        width: 180px;
        height: 50px;
        padding: 0 20px 0 25px;
        border-radius: 8px;
        border: none;
        background: #222028;
        margin-bottom: 5px;
        cursor: pointer;
        gap: 20px;
        &:hover{
            border: 2px solid ${palet.primarycolor};
        }
            .icon{
                padding-top: 5px;
            }

    }
    .sub-div{
        font-size: 16px;
        color: #fff;
        line-height: 38px;
        padding: 0;
        transition: 0.4s ease;
         position: absolute;
        width: 200px;
        z-index: 12;
        max-height: 300px;
        overflow-y: auto;
        top: 100%;    
        left: -10px;
        background-color: ${palet.bgColor};
        padding: 10px;
        border-radius: 8px;
        padding-top: 15px;
        padding-left: 20px;
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
export default AllGenresStyle;