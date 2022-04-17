import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://media.nomadicmatt.com/camericaguide.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Costa Rica travel guide</h3>
                    <p>Steaming rainforest, iridescent hummingbirds, smouldering volcanoes, tumbling rivers</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.worldtravelguide.net/wp-content/uploads/2017/03/shu-UK-Scotland-GlenfinnanViaduct_351622814-1440x823-1.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Rwanda travel guide</h3>
                    <p>Dubbed 'The Land of a Thousand Hills', Rwanda's lush green landscape</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.worldtravelguide.net/wp-content/uploads/2017/03/shu-Namibia-Damaraland-QuiverTree_562772674-1440x823-1.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Namibia travel guide</h3>
                    <p>
                        From the seemingly endless sand dunes of the Namib Desert
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;