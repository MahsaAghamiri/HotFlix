import { Col, Row } from "antd";
import axios from "axios";
import {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieListStyle from "./style";
import MultiLoading from "../Loading";
import EmptyData from "../ErrorHandeling/EmptyData";
import Loading from "../Loading";


export default function MovieList({headerDetails, page = '1'}){
   const {headerTitle, viewAllLink} = headerDetails;
   const [loading, setLoading] = useState(true);
   const [moviesData, setMoviesData] = useState({
    data: [],
    metadata: {}
   });
   useEffect(() => {
    getApi();
   },[]);
   function getApi(){
        axios.get(`https://moviesapi.codingfront.dev/api/v1/movies?page=${page}`)
             .then((res) => {
                setMoviesData(res.data);
                setLoading(false);
             })
             .catch((err) => {
                setLoading(false);
             })
   }
   function renderFarm(){ 
    if(moviesData.data.length === 0){
        return( <EmptyData /> )
    }
    return moviesData.data.map(({id, title, poster, genres}) => {    
       return (<Col key={id} md={4} sm={8} xs={12}>
                    <Link to={`/movie/${id}`} className="custom-link">
                        <div className="item-cover">
                            <img src={poster} alt="" className="movies-img" />
                            <div className="overlay"></div>
                        </div><br/>
                        <div className="item-content">
                            <h6>{title.length <= 20 ? title :  title.substring(0,15).concat(" ...")}</h6>
                            <span>{genres.join(', ')}</span>
                        </div>
                    </Link>
                </Col>)    
    })}
    return(
        <MovieListStyle>   
            <div className="movies-header">
            <Row justify="center">
                 <Col  span={20} offset={2}>
                    <Row>
                        <Col md={20} xs={{span:24}}><h2><span className="custom-link title">{headerTitle}</span></h2></Col>
                        <Col md={4} xs={{span:24}}><Link to={viewAllLink} className="custom-link"><span className="veiwAll">VIEW ALL</span></Link></Col>
                    </Row>
                </Col>
             </Row>
            </div>
            <Row justify="center">
              <Col  span={20} offset={2}>
                <div className="movie-items">
                {loading === false ? (<Row gutter={[24, 80]}>{renderFarm()}</Row>) : ( <Loading /> )}
                </div>
              </Col>
            </Row>
            <div className="section-space"></div>
        </MovieListStyle>  
    )
}