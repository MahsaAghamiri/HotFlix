import { Row, Col } from "antd"
import PrimaryLayout from "../../Layouts/PrimaryLayout"

export default function NotFound(){
    return(
        <PrimaryLayout>
        <Row justify="center" className="padding-top-loading">
            <Col md={10} offset={6}>
                <div className="not-found">
                    <h2>Oops!</h2>
                    <p>The page you were looking for was not found...</p>
                </div>
            </Col>
        </Row>
        </PrimaryLayout>
    )
}