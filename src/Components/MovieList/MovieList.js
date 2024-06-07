import { Col, Row } from "antd";
import axios from "axios";
import {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieListStyle from "./style";


export default function MovieList({headerDetails, page = '1'}){
   const {title, link} = headerDetails;
   const [moviesData, setMoviesData] = useState({
    data: [],
    metadata: {}
   });
   useEffect(() => {
    getApi();
   },[])
   function getApi(){
        axios.get(`https://moviesapi.codingfront.dev/api/v1/movies?page=${page}`)
             .then((res) => {
                setMoviesData(res.data);
             })
             .catch((err) => {})
   }
   function renderFarm(){ 
    return moviesData.data.map(({id, title, poster, genres}) => {    
       return (<Col key={id} md={4} sm={8} xs={12}>
                    <div className="item-cover">
                        <img src={poster} alt="" className="movies-img" />
                        <div className="overlay"></div>
                    </div><br/>
                    <div className="item-content">
                        <h6><Link to='/' className="custom-link">{title.length <= 20 ? title :  title.substring(0,15).concat(" ...")}</Link></h6>
                        <span>{genres.join(', ')}</span>
                    </div>
                </Col>)    
    })
   }
    return(
        <MovieListStyle>
            
            <div className="movies-header">
            <Row justify="center">
                 <Col  span={20} offset={2}>
                    <Row>
                        <Col md={21} xs={{span:24}}><h2><span className="custom-link title">{title}</span></h2></Col>
                        <Col md={3} xs={{span:24}}><Link to={link} className="custom-link"><span className="veiwAll">VIEW ALL</span></Link></Col>
                    </Row>
                </Col>
             </Row>
            </div>
            <Row justify="center">
              <Col  span={20} offset={2}>
                <div className="movie-items">
                    <Row gutter={[24, 80]}>{renderFarm()}</Row>
                </div>
              </Col>
            </Row>
            
            <div className="section-space"></div>
        </MovieListStyle>  
    )
}