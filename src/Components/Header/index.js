import { Link } from "react-router-dom";
import {headerMenu} from "../../Data/menu";
import { Row, Col } from "antd";
import HeaderStyle from "./style";
import Menu from "../Menu";
import SearchBox from "../SearchBox";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";



export default function Header(){
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    return( 
      <HeaderStyle> 
        <header className="header">
            <Row justify="center" gutter={[80,80]}>
                <Col span={20} offset={2} >
                    <Row>
                       <Col xl={4} lg={6} md={12} xs={12}>
                            <div className="logo">
                                <Link to='/'>
                                    <img src="/Images/logo.svg" alt="" />
                                </Link>
                            </div>
                        </Col>
                        <Col xl={12} lg={18} md={12} xs={12}>  
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
                        
                        <Col xl={8} lg={24} md={24} xs={24}>
                            <SearchBox />
                        </Col>
                    </Row>
                </Col>
            </Row>
          </header>
        </HeaderStyle>
    )
}