import { Link } from "react-router-dom";
import { footerMenu } from "../../Data/menu";
import Menu from "../Menu";
import { Row, Col } from "antd";
import FooterStyle from "./style";

export default function Footer(){
    return(
        <FooterStyle>
            <footer className="footer">
                <Row justify="center">
                    <Col span={20} offset={2} > 
                        <Row>
                            <Col span={4}>
                                    <div className="logo">
                                        <Link to='/'>
                                            <img src="/Images/logo.svg" alt="" />
                                        </Link>
                                    </div>
                            </Col>
                            <Col span={4} className="copy-right">© HOTFLIX</Col>
                            <Col span={12} push={8}>
                                    <div className="menu">
                                        <Menu menuItems={footerMenu} />
                                    </div>
                                
                            </Col>
                            <Col span={4}></Col>
                        </Row>  
                    </Col>
                </Row>
            </footer>
        </FooterStyle>
    )
}