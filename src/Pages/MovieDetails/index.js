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
        if(loading === true){
            return( <Loading /> )
        } 
        const isEmpty = Object.keys(movieData).length === 0;
        if(isEmpty){
            return( <EmptyData /> )
        }
        return(
             <Fragment>
                <div className="movie-details-header">
                    <h2>{movieData.title}</h2>
                </div>
                <div className="movie-details-content">
                    <Row justify="center">
                        <Col md={4}>
                            <img src={movieData.poster} className="long-image"/>
                        </Col>
                        <Col md={8}>
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
                        <Col md={12}>
                            <img src={movieData.images} className="wide-image"/>
                        </Col>
                    </Row>
                  </div>
                </Fragment>
        )
    }
    return(
        <PrimaryLayout>
            <MovieDetailsStyle>
                <section className="movie-details">
                    <Row justify="center">
                        <Col  span={20} offset={2}>
                            {renderMovieDetails()}
                        </Col>
                    </Row>
                </section>
            </MovieDetailsStyle>
        </PrimaryLayout>
    )
}