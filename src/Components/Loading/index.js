import React from 'react';
import { Flex, Spin, Row, Col } from 'antd';


const Loading = () => (
<Row justify="center" className="padding-top-loading">
  <Col md={4} offset={10}>
    <Flex align="center" gap="large">
      <Spin size="small" />
      <Spin />
      <Spin size="large" />
    </Flex>
  </Col>
</Row>
);
export default Loading;

