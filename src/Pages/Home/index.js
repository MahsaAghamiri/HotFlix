import { useEffect } from "react";
import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import titleMaker from "../../Helpers/titleMaker";
import HomePageStyle from "./style";
import { Col, Row } from "antd";
import MovieList from "../../Components/MovieList/MovieList";

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
                                    <div className="hero">jsbhdvajsvxhj cakhsb chs x</div>
                                </Col>
                            </Row>
                        </div>
                        <br />
                        <div className="section-space"></div>

                        <div className="content">
                            <MovieList page='1' headerDetails={{headerTitle:'250 BEST MOVIES', viewAllLink:'#'}} />
                            <MovieList page='2' headerDetails={{headerTitle:'250 BEST MOVIES', viewAllLink:'#'}} />

                        </div>
                </section> 
            </HomePageStyle>   
        </PrimaryLayout>
    )
}