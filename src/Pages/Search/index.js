import { useState, useEffect } from "react";
import SecondLayout from "../../Components/Layouts/SecondLayout";
import SearchStyle from "./style";
import { Row, Col, Pagination } from "antd";
import { useSearchParams, Link, createSearchParams, useNavigate, useParams } from "react-router-dom";
import API from "../../Helpers/api";
import Loading from "../../Components/Loading";
import EmptyData from "../../Components/ErrorHandeling/EmptyData";
import titleMaker from "../../Helpers/titleMaker";
import { SearchOutlined } from "@ant-design/icons";

export default function Search(){
    const [ loading, setLoading ] = useState(true);
    const setNavigate = useNavigate();
    const [ queryParams, setQueryParams] = useSearchParams();
    const [moviesData, setMoviesData] = useState({
        data: [],
        metadata: {}
       });

    useEffect(() => {
        if(queryParams.get('q') && queryParams.get('q') !== '')
        getApi(queryParams.get('q'),queryParams.get('page') ? queryParams.get('page') : 1);
        titleMaker('250 Top Movies');
    },[]); 

    function getApi(value, pageNumber = 1){
        API.get(`movies?q=${value ? value : queryParams.get('q')}&page=${pageNumber}`)
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
           return (<Col key={id} xs={12} sm={12} md={8} lg={4} xxl={4}>
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
    function onPageChange(pageNumber){
        setQueryParams(createSearchParams({q: queryParams.get('q'), page: pageNumber}));
        getApi(queryParams.get('q'), pageNumber);
        
   }
    return(
        <SecondLayout>
            <SearchStyle>
                <section className="serach-content">
                    <Row justify="center">
                        <Col span={20} offset={2}>
                        <div className="search">
                            <input className='search-box' placeholder="Search..." onChange={onType}/>
                            <SearchOutlined className="search-icon" /> 
                        </div>
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col span={20} offset={2}>
                            <div className="movie-items">
                                {loading === false ? (<Row gutter={[24, 80]}>{renderFarm()}</Row>) : ( <Loading /> )}
                                <Row justify="center">
                                    <Col  span={20} offset={2}>
                                        <div className="pagination">
                                                <strong><Pagination onChange={onPageChange} 
                                                        total={moviesData.metadata.total_count} 
                                                        current={moviesData.metadata.current_page} 
                                                        pageSize={moviesData.metadata.per_page} /></strong>
                                        </div> 
                                    </Col>
                                 </Row>
                            </div>
                        </Col>
                    </Row>
                </section>
            </SearchStyle>
        </SecondLayout>
    )
}