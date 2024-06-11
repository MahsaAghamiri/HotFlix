import { Row, Col } from "antd"

export default function EmptyData(){
    return(

        <Row justify="center" className="padding-top-loading">
          <Col md={24}>
                <div className="empty-data text-align-center">
                    <h2>Oops!</h2>
                    <p>There Is No Data...</p>
                </div>
            </Col>
        </Row>
        
    )
}