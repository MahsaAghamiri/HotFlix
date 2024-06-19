
import React, { useEffect, useRef } from 'react';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Splide from '@splidejs/splide';

const ImageSlider = () => {
  const splideRef = useRef();

  useEffect(() => {
    if (splideRef.current) {
      new Splide(splideRef.current, {
        type: 'slide',
        perPage: 5,
        pagination: false,
        focus: 'center',
        breakpoints: {
          600: {
            perPage: 2,
          },
        },
      }).mount();
    }
  }, []);

  return (
   
    <div ref={splideRef} className="splide">
      <div className="splide__track">
        <ul className="splide__list">
          <li className="splide__slide">
            <img src="/Images/slideTall1.jpg" alt="Image 1" />
          </li>
          <li className="splide__slide">
            <img src="/Images/slideTall1.jpg" alt="Image 2" />
          </li>
          <li className="splide__slide">
            <img src="/Images/slideTall1.jpg" alt="Image 3" />
          </li>
          <li className="splide__slide">
            <img src="/Images/slideTall1.jpg" alt="Image 4" />
          </li>
          <li className="splide__slide">
            <img src="/Images/slideTall1.jpg" alt="Image 5" />
          </li>
          <li className="splide__slide">
            <img src="/Images/slideTall1.jpg" alt="Image 5" />
          </li>
          <li className="splide__slide">
            <img src="/Images/slideTall1.jpg" alt="Image 5" />
          </li>
          {/* Add more slides if needed */}
        </ul>
      </div>
    </div>
  );
};

export default ImageSlider;