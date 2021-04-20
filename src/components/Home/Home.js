import './Home.scss';
import { Fragment } from 'react';
import Media from 'react-media';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import picture from '../../assets/img/10364.jpg';

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
                    {matches.small && <p>Home - small</p>}
                    {matches.medium && <p>Home - medium</p>}
                    {matches.large && <p>Home - large</p>}
                    <Carousel>
                        <div>
                            <img src={picture} />
                            <p className="legend">Legend 1</p>
                        </div>
                        <div>
                            <img src="assets/2.jpeg" />
                            <p className="legend">Legend 2</p>
                        </div>
                        <div>
                            <img src="assets/3.jpeg" />
                            <p className="legend">Legend 3</p>
                        </div>
                    </Carousel>
                </Fragment>
            )}
            </Media>
      </div>
    );
}

export default Home;