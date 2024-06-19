import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  height: '100%',
  width: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Slider = () => (
  <Carousel autoplay className='slider'>
    <div>
      <h3 style={contentStyle}> <img src='/Images/slide4.jpg'/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src='/Images/slide2.jpg'/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src='/Images/slide3.jpg'/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src='/Images/slide1.jpg'/></h3>
    </div>
  </Carousel>
);
export default Slider;
