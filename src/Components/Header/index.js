import { Link } from "react-router-dom";
import {headerMenu} from "../../Data/menu";
import { Row, Col } from "antd";
import HeaderStyle from "./style";
import Menu from "../Menu";
import axios from "axios";
import { useState } from "react";
import Search from "../Search";


export default function Header(){
    // const [searchResult, setsearchResult] = useState({
    //     data: [],
    //     metadata: {}
    //    });
    // function handleSearch(e){
    //     if(e.target.value.length >= 3){
    //         axios.get(`https://moviesapi.codingfront.dev/api/v1/movies?q=${e.target.value}`)
    //         .then((res) => {
    //            setsearchResult(res.data)
    //         })
    //         .catch((err) => {});
    //     } 
    // }
    // function renderSearchResult(){
    //     return searchResult.data.map(({id, title}) => {
    //         return(
    //             <li key={id}> 
    //                 <Link to={`/movie/${id}`}>{title}</Link>
    //              </li>
    //         )
    //     })
    // }
    return( 
      <HeaderStyle> 
        <header className="header">
            <Row justify="center">
                <Col span={20} offset={2} >
                    <Row>
                       <Col span={4}>
                            <div className="logo">
                                <Link to='/'>
                                    <img src="/Images/logo.svg" alt="" />
                                </Link>
                            </div>
                        </Col>
                        <Col span={14}>  
                            <div className="menu">
                               <Menu menuItems={headerMenu} />
                            </div>
                        </Col>
                        
                        <Col span={6}>
                            <Search />
                            {/* <div className="search">
                               <input onChange={handleSearch} className='search-box' placeholder="Search..." />   
                            </div>
                            <div className="serach-result"><ul>{renderSearchResult()}</ul></div> */}
                        </Col>
                    </Row>
                </Col>
            </Row>
          </header>
        </HeaderStyle>
    )
}