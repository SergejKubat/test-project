import './Home.scss';
import { Fragment } from 'react';
import Media from 'react-media';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Carousel } from 'react-responsive-carousel';

import picture1 from '../../assets/img/10364.jpg';
import picture2 from '../../assets/img/25060.jpg';
import picture3 from '../../assets/img/31214.jpg';
import picture4 from '../../assets/img/195548-OY9OIN-908.jpg';
import picture5 from '../../assets/img/OGN39D0.jpg';

import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ReactComponent as HealthInsurance } from '../../assets/svg/health-insurance.svg';
import { ReactComponent as InvestmentPlan } from '../../assets/svg/investment-plan.svg';

function Home() {

    const showToast = () => {
        toast.error("No link found!", {
            className: "error-toast",
            transition: Zoom,
            draggable: false,
            autoClose: 5000,
            position: toast.POSITION.BOTTOM_CENTER
        });
    }

    return (
        <div>
            <Media queries={{
                small: "(max-width: 699px)",
                medium: "(min-width: 700px) and (max-width: 1399px)",
                large: "(min-width: 1400px)"
            }}>
            {matches => (
                <Fragment>
                    <main className="main">
                        <div className="carousel-4">
                            <Carousel /*infiniteLoop useKeyboardArrows autoPlay*/>
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
                        </div>

                        <section className="box" style={{ marginTop: matches.small ? "3rem" : null }}>
                            <div className={ matches.small ? "box-col box-col-sm box-col-health-left" : "box-col box-col-health-left" }>
                                <HealthInsurance className="box-img" style={{ width: matches.medium ? "40vw" : matches.small ? "75vw" : null }} />
                            </div>
                            <div className={ matches.small ? "box-col box-col-sm box-col-health-right" : "box-col box-col-health-right" }>
                                <div className="box-container" style={{ width: matches.medium || matches.small ? "100%" : null }}>
                                    <h1 className="box-heading">Health Insurance</h1>
                                    <p className="box-paragraph">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                                    <ul className="box-list">
                                        <li className="box-list-item">
                                            <BsCheckCircle className="box-check" /> Digital Marketing Solution for Tomorrow
                                        </li>
                                        <li className="box-list-item">
                                            <BsCheckCircle className="box-check" /> Our Talented &amp; Experienced Marketing Agency
                                        </li>
                                        <li className="box-list-item">
                                            <BsCheckCircle className="box-check" /> Create your own skin to match your brand
                                        </li>
                                    </ul>
                                    <button className="box-btn" onClick={showToast}>Read More <AiOutlineArrowRight className="box-btn-arrow" /></button>
                                    <ToastContainer />
                                </div>
                            </div>
                        </section>

                        <section className="box">
                            <div className={ matches.small ? "box-col box-col-sm box-col-investment-left" : "box-col box-col-investment-left" } style={{ order: matches.small ? "2" : null }}>
                                <div className="box-container" style={{ width: matches.medium || matches.small ? "100%" : null }}>
                                    <h1 className="box-heading">Investment Plans</h1>
                                    <p className="box-paragraph">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                                    <ul className="box-list">
                                        <li className="box-list-item">
                                            <BsCheckCircle className="box-check" /> Digital Marketing Solution for Tomorrow
                                        </li>
                                        <li className="box-list-item">
                                            <BsCheckCircle className="box-check" /> Our Talented &amp; Experienced Marketing Agency
                                        </li>
                                        <li className="box-list-item">
                                            <BsCheckCircle className="box-check" /> Create your own skin to match your brand
                                        </li>
                                    </ul>
                                    <button className="box-btn" onClick={showToast}>Read More <AiOutlineArrowRight className="box-btn-arrow" /></button>
                                </div>
                            </div>
                            <div className={ matches.small ? "box-col box-col-sm box-col-investment-right" : "box-col box-col-investment-right" }>
                                <InvestmentPlan className="box-img" style={{ width: matches.medium ? "40vw" : matches.small ? "75vw" : null }} />
                            </div>
                        </section>
                    </main>
                </Fragment>
            )}
            </Media>
      </div>
    );
}

export default Home;

/*

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

*/