import { Col, Row, Pagination } from "antd";
import axios from "axios";
import {useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import MovieListStyle from "./style";
import EmptyData from "../../Components/ErrorHandeling/EmptyData";
import Loading from "../../Components/Loading";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";


export default function Genres(){
   const { id } = useParams();
//    const {headerTitle, viewAllLink} = headerDetails;
   const navigate = useNavigate();
   const [ searchParams, setSearchParams] = useSearchParams();
   const [loading, setLoading] = useState(true);
   const [moviesData, setMoviesData] = useState({
    data: [],
    metadata: {}
   });
   useEffect(() => {
    getApi(searchParams.get('page') ? searchParams.get('page') : 1);
   },[searchParams.get('page')]);
   function getApi(pageNumber = 1){
        axios.get(`https://moviesapi.codingfront.dev/api/v1/genres/${id}/movies?page=${pageNumber}`)
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
    function onPageChange(pageNumber){
         navigate(`/genres/${id}?page=${pageNumber}`);
    }
    return(
        <PrimaryLayout>
            <MovieListStyle>   
                {/* <div className="movies-header">
                <Row justify="center">
                    <Col  span={20} offset={2}>
                        <Row>
                            <Col md={20} xs={{span:24}}><h2><span className="custom-link title">{headerTitle}</span></h2></Col>
                            <Col md={4} xs={{span:24}}><Link to={viewAllLink} className="custom-link"><span className="veiwAll">VIEW ALL</span></Link></Col>
                        </Row>
                    </Col>
                </Row>
                </div> */}
                <Row justify="center">
                <Col  span={20} offset={2}>
                    <div className="movie-items">
                    {loading === false ? (<Row gutter={[24, 80]}>{renderFarm()}</Row>) : ( <Loading /> )}
                        
                            <Row justify="center">
                                <Col  span={20} offset={2}>
                                    <div className="pagination">
                                        <Pagination onChange={onPageChange} 
                                                    total={moviesData.metadata.total_count} 
                                                    current={moviesData.metadata.current_page} 
                                                    pageSize={moviesData.metadata.per_page} />
                                    </div>
                                </Col>
                            </Row>
                       
                    </div>
                </Col>
                </Row>
                <div className="section-space">     
                </div>
            </MovieListStyle>  
        </PrimaryLayout>
    )
}