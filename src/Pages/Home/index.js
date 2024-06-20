import { useEffect } from "react";
import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import titleMaker from "../../Helpers/titleMaker";
import HomePageStyle from "./style";
import { Col, Row } from "antd";
import MovieList from "../../Components/MovieList/MovieList";
import MovieListByGenres from "../../Components/MovieListByGenres";
import Slider from "../../Components/ImageSilder/ImageSlider";
import ImageSlider from "../../Components/ImageSilder/SecondImageSlider";


export default function Home(){
    useEffect(() => {
        titleMaker('250 Top Movies');
    }, [])
    return(
        <PrimaryLayout>
            <HomePageStyle>
                <section className="home">
                        <div className="hero-section">
                            <Row justify="center">
                                <Col span={20} offset={5}>
                                    <div className="hero">
                                        <Slider />
                                        {/* <ImageSlider /> */}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                   
                        <br />
                        <div className="section-space"></div>

                        <div className="content">
                            <MovieList page='1' headerDetails={{headerTitle:'250 BEST MOVIES', viewAllLink:'/movies'}} />
                            <MovieListByGenres page='1' genre_id={1} headerDetails={{headerTitle:'CRIM', viewAllLink:'/genres'}} />
               
                        </div>
                </section> 
            </HomePageStyle>   
        </PrimaryLayout>
    )
}