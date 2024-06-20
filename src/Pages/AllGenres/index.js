import { Fragment, useEffect, useState } from "react";
import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import MovieListByGenres from "../../Components/MovieListByGenres";
import API from "../../Helpers/api";
import Loading from "../../Components/Loading";
import EmptyData from "../../Components/ErrorHandeling/EmptyData";
import { Row, Col } from "antd";
import AllGenresStyle from "./style";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";


export default function AllGenres(){
   const [ genres, setGenres] = useState([]);
   const [loading, setLoading] = useState(true);
   const [isOpen, setIsOpen] = useState(false);
   
   useEffect(() => {
        getApi();
   },[]);

async function getApi(){
        try{
        const response = await   API.get(`genres`);
        setGenres(response.data);
        setLoading(false);
        window.scrollTo({
                top: 0,
                behavior: 'smooth'
        });
        }catch(e){
                setLoading(false);
                
        }
}
   function renderFarm(){
        if(genres.length === 0){
                return( <EmptyData /> )
            }
      
        return genres.map(({id, name}) => {
                return(
                        <MovieListByGenres key={id} page='1' genre_id={id} headerDetails={{headerTitle: `${name}`, viewAllLink:`/genre/${id}}`}} />
                )
        })
   }
   function showGenresMenu(){
         setIsOpen(!isOpen);

   }
   function renderGenres(){
        return genres.map(({id, name}) => {
                return (
                        <li key={id}><Link to={`/genre/${id}`} className="custom-link">{name}</Link></li>
                )
        })
        
   }
    return(
            <PrimaryLayout>
                    <section className="all-genres" style={{paddingTop: '150px'}}>
                        <AllGenresStyle>
                            <div className="genre-selection">
                                 <Row justify="center">
                                        <Col  span={20} offset={2}>
                                                <div onClick={showGenresMenu} className="selection">
                                                        <div className="text">Genre Selecion</div>
                                                        <div className="icon"><DownOutlined /></div>
                                               </div>
                                               {isOpen && <div className="sub-div"><ul>{renderGenres()}</ul></div>}
                                        </Col>
                                </Row>
                            </div>
                        </AllGenresStyle>
                           {loading === false ? (<Fragment>{renderFarm()}</Fragment>) : ( <Loading /> )}   
                    </section>
            </PrimaryLayout>
    )
}