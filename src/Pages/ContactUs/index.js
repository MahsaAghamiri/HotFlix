import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import { useEffect } from "react";
import titleMaker from "../../Helpers/titleMaker";
import ContactsStyle from "./style";
import { Row, Col } from "antd";


export default function ContactUs(){
    useEffect(() => {
        titleMaker('250 Top Movies');
    }, [])
    return(
        <PrimaryLayout>
            <ContactsStyle>
                <section className="contacts">
                    <div className="contacts-header">
                            <Row justify="center">
                                <Col span={20} offset={5}>
                                        <h2><span>Contact Us</span></h2>
                                </Col>                          
                            </Row>        
                    </div>
                   
                        <Row justify="center">
                            <Col span={20} offset={5}>
                            <div className="contacts-content"> </div>
                            </Col>                          
                        </Row>
                   
                </section>
           </ContactsStyle>
        </PrimaryLayout>
    )
}