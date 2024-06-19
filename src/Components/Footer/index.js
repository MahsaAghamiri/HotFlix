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
                        <Row gutter={[24,24]}>
                            <Col xs={24} lg={4} xxl={4}>
                                    <div className="logo">
                                        <Link to='/'>
                                            <img src="/Images/logo.svg" alt="" />
                                        </Link>
                                    </div>
                            </Col>
                            <Col xs={8} lg={4} xxl={4} className="copy-right">© HOTFLIX</Col>
                            <Col xs={8} lg={12} xxl={14}></Col>
                            <Col xs={8} lg={2} xxl={2}>
                                    <div className="menu">
                                        <Menu menuItems={footerMenu} />
                                    </div>
                                
                            </Col>
                        </Row>  
                    </Col>
                </Row>
            </footer>
        </FooterStyle>
    )
}