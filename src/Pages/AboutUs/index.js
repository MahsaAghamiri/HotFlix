import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import { useEffect } from "react";
import titleMaker from "../../Helpers/titleMaker";
import { Row, Col } from "antd";
import AboutUsStyle from "./style";

export default function AboutUs(){
    useEffect(() => {
        titleMaker('250 Top Movies');
    }, [])
    return(
        <PrimaryLayout>
            <AboutUsStyle>
                <section className="aboutus">
                    <div className="aboutus-header">
                            <Row justify="center">
                                <Col span={20} offset={5}>
                                        <h2><span>About Us</span></h2>
                                </Col>                          
                            </Row>        
                    </div>
                   
                        <Row justify="center">
                            <Col span={20} offset={5}>
                            <div className="aboutus-content"> </div>
                            </Col>                          
                        </Row>
                   
                </section>
           </AboutUsStyle>
        </PrimaryLayout>
    )
}