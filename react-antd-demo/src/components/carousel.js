import React from 'react';

import { Carousel } from 'antd';


class myCarousel extends React.Component {

    render() {
        return (
            <div className="carousel-wrap">
                <Carousel autoplay>
                    <div><img src="src/images/img01.jpg" /></div>
                    <div><img src="src/images/img02.jpg" /></div>
                    <div><img src="src/images/img03.jpg" /></div>
                    <div><img src="src/images/img04.jpg" /></div>
                </Carousel>
            </div>
        )
    }

}

export default myCarousel;
