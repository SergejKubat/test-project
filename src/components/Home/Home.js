import './Home.scss';
import { Fragment } from 'react';
import Media from 'react-media';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import picture1 from '../../assets/img/10364.jpg';
import picture2 from '../../assets/img/25060.jpg';
import picture3 from '../../assets/img/31214.jpg';
import picture4 from '../../assets/img/195548-OY9OIN-908.jpg';
import picture5 from '../../assets/img/OGN39D0.jpg';

function Home() {
    return (
        <div>
            <Media queries={{
                small: "(max-width: 699px)",
                medium: "(min-width: 700px) and (max-width: 1399px)",
                large: "(min-width: 1400px)"
            }}>
            {matches => (
                <Fragment>
                    <Carousel infiniteLoop useKeyboardArrows autoPlay>
                        <div>
                            <img src={picture1} alt="Carousel - 1" />
                        </div>
                        <div>
                            <img src={picture2} alt="Carousel - 2" />
                        </div>
                        <div>
                            <img src={picture3} alt="Carousel - 3" />
                        </div>
                        <div>
                            <img src={picture4} alt="Carousel - 4" />
                        </div>
                        <div>
                            <img src={picture5} alt="Carousel - 5" />
                        </div>
                    </Carousel>
                </Fragment>
            )}
            </Media>
      </div>
    );
}

export default Home;