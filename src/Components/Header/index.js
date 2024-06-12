import { Link } from "react-router-dom";
import {headerMenu} from "../../Data/menu";
import { Row, Col } from "antd";
import HeaderStyle from "./style";
import Menu from "../Menu";
import SearchBox from "../SearchBox";


export default function Header(){
    return( 
      <HeaderStyle> 
        <header className="header">
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
                        <Col span={12}>  
                            <div className="menu">
                               <Menu menuItems={headerMenu} />
                            </div>
                        </Col>
                        
                        <Col span={8}>
                            <SearchBox />
                        </Col>
                    </Row>
                </Col>
            </Row>
          </header>
        </HeaderStyle>
    )
}