import './Home.scss';
import { Fragment } from 'react';
import Media from 'react-media';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
/*import { Carousel } from 'react-responsive-carousel';

import picture1 from '../../assets/img/10364.jpg';
import picture2 from '../../assets/img/25060.jpg';
import picture3 from '../../assets/img/31214.jpg';
import picture4 from '../../assets/img/195548-OY9OIN-908.jpg';
import picture5 from '../../assets/img/OGN39D0.jpg';*/

import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ReactComponent as HealthInsurance } from '../../assets/svg/health-insurance.svg';
import { ReactComponent as InvestmentPlan } from '../../assets/svg/investment-plan.svg';

function Home() {

    const showToast = () => {
        toast.error("No link found!", {
            className: "error-toast",
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
                        <section className="box">
                            <div className="box-col box-col-health-left">
                                <HealthInsurance className="box-img" />
                            </div>
                            <div className="box-col box-col-health-right">
                                <div className="box-container">
                                    <h1 className="box-heading">Health Insurance</h1>
                                    <p className="box-paragraph">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                                    <ul className="box-list">
                                        <li className="box-list-item">
                                            <BsCheckCircle className="check" /> Digital Marketing Solution for Tomorrow
                                        </li>
                                        <li className="box-list-item">
                                            <BsCheckCircle className="check" /> Our Talented &amp; Experienced Marketing Agency
                                        </li>
                                        <li className="box-list-item">
                                            <BsCheckCircle className="check" /> Create your own skin to match your brand
                                        </li>
                                    </ul>
                                    <button className="box-btn" onClick={showToast}>Read More <AiOutlineArrowRight /></button>
                                    <ToastContainer />
                                </div>
                            </div>
                        </section>
                        <section className="box">
                            <div className="box-col box-col-investment-left">
                                <div className="box-container">
                                    <h1 className="box-heading">Investment Plans</h1>
                                    <p className="box-paragraph">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                                    <ul className="box-list">
                                        <li className="box-list-item">
                                            <BsCheckCircle className="check" /> Digital Marketing Solution for Tomorrow
                                        </li>
                                        <li className="box-list-item">
                                            <BsCheckCircle className="check" /> Our Talented &amp; Experienced Marketing Agency
                                        </li>
                                        <li className="box-list-item">
                                            <BsCheckCircle className="check" /> Create your own skin to match your brand
                                        </li>
                                    </ul>
                                    <button className="box-btn" onClick={showToast}>Read More <AiOutlineArrowRight /></button>
                                </div>
                            </div>
                            <div className="box-col box-col-investment-right">
                                <InvestmentPlan className="box-img" />
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