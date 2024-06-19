import { Fragment, useEffect, useState } from "react";
import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import axios from "axios";
import { useParams } from "react-router-dom";
import MovieDetailsStyle from "./style";
import { Col, Row } from "antd";
import EmptyData from "../../Components/ErrorHandeling/EmptyData";
import Loading from "../../Components/Loading";
import titleMaker from "../../Helpers/titleMaker";

export default function MovieDetails(){
    const {id} = useParams();
    const [movieData, setMovieData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getAPI();
        titleMaker('');
    },[id]);
    function getAPI(){
        axios.get(`https://moviesapi.codingfront.dev/api/v1/movies/${id}`)
             .then((res) => {
              setMovieData(res.data);
              setLoading(false);
              titleMaker(res.data.title);
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
             })
             .catch((err) => {
                setLoading(false);
             })
    }
    function renderMovieDetails(){
        
        function renderRating(){
            const rating = JSON.parse(movieData.ratings);
            
            return rating.map((item) => {
                return(
                   <li> {item.Source}:  {item.Value} </li>
                ) 
            })
           
        }
        if(loading === true){
            return( <Loading /> )
        } 
        const isEmpty = Object.keys(movieData).length === 0;
        if(isEmpty){
            return( <EmptyData /> )
        }
        return(
             <Fragment>
                <Row justify="center">
                    <Col span={20} offset={5}>
                        <div className="movie-details-header">
                            <h2>{movieData.title}</h2>
                        </div>
                        <div className="movie-details-content">
                            <Row justify="center" gutter={[24, 24]}>
                                <Col lg={4} xs={24}>
                                    <img src={movieData.poster} className="long-image"/>
                                </Col>
                                <Col lg={8} xs={24}>
                                    <div className="text-content">
                                        <div className="movie-info">
                                            <ul>
                                                {Array.isArray(movieData.genres) && (
                                                <li><strong>Genre: </strong><span>{movieData.genres.join(', ')}</span></li>)}
                                                <li><strong>Released: </strong><span>{movieData.released}</span></li>
                                                <li><strong>Year: </strong><span>{movieData.year}</span></li>
                                                <li><strong>Running Time: </strong><span>{movieData.runtime}</span></li>
                                                <li><strong>Country: </strong><span>{movieData.country}</span></li>
                                                <li><strong>Language: </strong><span>{movieData.language}</span></li>
                                                <li><strong>Box Office: </strong><span>{movieData.box_office}</span></li>
                                            </ul>
                                        </div>
                                        <div className="movie-plot">
                                            <p>{movieData.plot}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12} xs={24}>
                                    <img src={movieData.images} className="wide-image"/>
                                </Col>
                            </Row> 
                        </div>
                    </Col>
                </Row>  
                
                <div className="discover-header">
                    <Row justify="center">
                        <Col span={20} offset={5}>
                             <h2><span>Discover</span></h2>
                        </Col>                          
                    </Row>        
                </div>
               
                <Row justify="center">
                    <Col span={20} offset={5}>
                    <Row justify="center" gutter={[80, 24]}>
                        <Col lg={16} xs={24}>
                            <div className="discover-content">
                                <ul>
                                    <li><strong>Director: </strong><span>{movieData.director}</span></li>
                                    <li><strong>Script Writer: </strong><span>{movieData.writer}</span></li>
                                    <li><strong>Cast: </strong><span>{movieData.actors}</span></li>
                                    <li><strong>Awards: </strong><span>{movieData.awards}</span></li>
                                    <li><strong>IMDB Rating: </strong><span>{movieData.imdb_rating}</span></li>
                                 
                                </ul>
                            </div>
                        </Col> 
                        <Col lg={8} xs={24}>
                             <div className="discover-content">
                                <strong>Rating:</strong><ul>{renderRating()}</ul>
                            </div>
                        </Col>                         
                    </Row> 


                     
                    </Col>  
                                            
                 </Row> 
                
                   
               
            </Fragment>
        )
    }
    return(
        <PrimaryLayout>
            <MovieDetailsStyle>
                <section className="movie-details">
                {renderMovieDetails()}
                      
                </section>
            </MovieDetailsStyle>
        </PrimaryLayout>
    )
}