import AllMoviesStyle from "./style";
import { Row, Col, Pagination } from "antd";
import { useEffect, useState } from "react";
import API from "../../Helpers/api";
import EmptyData from "../../Components/ErrorHandeling/EmptyData";
import Loading from "../../Components/Loading";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";



export default function AllMovies(){
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
         API.get(`movies?page=${pageNumber}`)
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
        return (<Col key={id}  xs={24} sm={12} md={8} lg={4} xxl={2}>
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
        navigate(`/movies?page=${pageNumber}`);
   }
     return(
         <AllMoviesStyle>   
            <PrimaryLayout>
             <Row justify="center">
               <Col  span={20} offset={2}>
                    <section className="all-movies">
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
                    </section>
               </Col>
             </Row>
             </PrimaryLayout>
         </AllMoviesStyle>  
     )
}