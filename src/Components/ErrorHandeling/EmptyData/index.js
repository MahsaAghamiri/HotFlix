import React from 'react';
import { Empty, Row, Col } from 'antd';

export default function EmptyData(){
    return(

        <Row justify="center" className="padding-top-loading text-align-center d-contents">
          <Col md={24}>
                <div className="empty-data text-align-center">
                    <h2>Oops!</h2>
                    <p>There Is No Data...</p>
                </div>
            </Col>
        </Row>
        
    )
}