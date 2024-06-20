import { Link } from "react-router-dom";
import {headerMenu} from "../../Data/menu";
import { Row, Col } from "antd";
import HeaderStyle from "./style";
import Menu from "../Menu";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";


export default function SearchHeader(){
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    return( 
      <HeaderStyle> 
        <header className="header">
            <Row justify="center">
                <Col span={20} offset={2} >
                    <Row>
                    <Col xl={8} lg={8} md={8} xs={20}>
                            <div className="logo">
                                <Link to='/'>
                                    <img src="/Images/logo.svg" alt="" />
                                </Link>
                            </div>
                        </Col>
                        <Col xl={8} lg={8} md={8} xs={20}></Col>
                        <Col xl={8} lg={8} md={8} xs={4}>  
                            <div className="menu">
                               <Menu menuItems={headerMenu} />  
                            </div>
                            <div className="hamburger-menu">
                                <button onClick={toggleMenu} className="btn-menu">
                                     <MenuOutlined />
                                 </button>
                                 {menuOpen && (
                                        <div className={`hamburger-menu-items ${menuOpen ? "show" : ""}`}>
                                        <Menu menuItems={headerMenu} />  
                                     </div>

                                 )}
                                 
                            </div>

                        </Col>
                       {/* <Col span={4}>
                            <div className="logo">
                                <Link to='/'>
                                    <img src="/Images/logo.svg" alt="" />
                                </Link>
                            </div>
                        </Col>
                        <Col span={14}>  
                            <div className="menu">
                               <Menu menuItems={headerMenu} />
                            </div>
                        </Col>
                        
                        <Col span={6}>
                           
                        </Col> */}
                    </Row>
                </Col>
            </Row>
          </header>
        </HeaderStyle>
    )
}