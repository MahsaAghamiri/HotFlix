import { useState, useEffect } from "react";
import SecondLayout from "../../Components/Layouts/SecondLayout";
import SearchStyle from "./style";
import { Row, Col } from "antd";
import { useSearchParams, Link, createSearchParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../Components/Loading";
import EmptyData from "../../Components/ErrorHandeling/EmptyData";

export default function Search(){
    const [ loading, setLoading ] = useState(true);
    const [ queryParams, setQueryParams] = useSearchParams();
    const [moviesData, setMoviesData] = useState({
        data: [],
        metadata: {}
       });
    useEffect(() => {
        if(queryParams.get('q') && queryParams.get('q') !== '')
        getApi();
    },[]);
    function getApi(value){
        axios.get(`https://moviesapi.codingfront.dev/api/v1/movies?q=${value ? value :queryParams.get('q')}`)
        .then((res) => {
           setMoviesData(res.data);
           setLoading(false);
        })
        .catch((err) => {
            setLoading(false);
        });
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
    function onType(e){
        setQueryParams(createSearchParams({q: e.target.value}));
        getApi(e.target.value);
    }
    return(
        <SecondLayout>
            <SearchStyle>
                <section className="serach-content">
                    <Row justify="center">
                        <Col span={20} offset={2}>
                            <input className='search-box' placeholder="Search..." onChange={onType}/>
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col span={20} offset={2}>
                            <div className="movie-items">
                                {loading === false ? (<Row gutter={[24, 80]}>{renderFarm()}</Row>) : ( <Loading /> )}
                            </div>
                        </Col>
                    </Row>
                </section>
            </SearchStyle>
        </SecondLayout>
    )
}