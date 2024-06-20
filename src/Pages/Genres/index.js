import { Col, Row, Pagination } from "antd";
import API from "../../Helpers/api";
import {useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import MovieListStyle from "./style";
import EmptyData from "../../Components/ErrorHandeling/EmptyData";
import Loading from "../../Components/Loading";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import titleMaker from "../../Helpers/titleMaker";

export default function Genres(){
   const { id } = useParams();
   const navigate = useNavigate();
   const [ searchParams, setSearchParams] = useSearchParams();
   const [loading, setLoading] = useState(true);
   const [genres, setGenres] = useState([]);
   const [moviesData, setMoviesData] = useState({
    data: [],
    metadata: {}
   });
 
   useEffect(() => {
    getAPiGenres();
    titleMaker('250 BEST MOVIES');
   },[]);

   useEffect(() => {
    getApi(searchParams.get('page') ? searchParams.get('page') : 1);
    
   },[searchParams.get('page')]);

   function getAPiGenres(){
        API.get(`genres`)
        .then((res) => {
            setGenres(res.data);
           
        })
        .catch((err) => {
        
        })
   }
  async function getApi(pageNumber = 1){
    try{
        const response = await   API.get(`genres/${id}/movies?page=${pageNumber}`);
        setMoviesData(response.data);
        setLoading(false);
    }catch(e){
        setLoading(false);
        // alert('Please Try Latar!');
    }
   }

   
   function renderGenreTitle(){
    console.log(genres,'mahsa')
    const filter = genres.filter(item => item.id === parseInt(id));
    return filter.map((item) => {
        return(<h2><span>{item.name}</span></h2>)
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
         navigate(`/genre/${id}?page=${pageNumber}`);
    }
    return(
        <PrimaryLayout>
            <MovieListStyle>   
                <div className="movies-header">
                <Row justify="center">
                    <Col  span={20} offset={2}>
                        <Row>
                            <Col md={20} xs={{span:24}}>{renderGenreTitle()}</Col>
                            <Col md={4} xs={{span:24}}></Col>
                        </Row>
                    </Col>
                </Row>
                </div>
                <Row justify="center">
                <Col  span={20} offset={2}>
                    <div className="movies">
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
            
                
            </MovieListStyle>  
        </PrimaryLayout>
    )
}