import './Footer.scss';
import logo from '../../assets/img/logo.png';
import { Fragment} from 'react';
import Media from 'react-media';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <Media queries={{
                small: "(max-width: 699px)",
                medium: "(min-width: 700px) and (max-width: 1399px)",
                large: "(min-width: 1400px)"
            }}>
            {matches => (
                <Fragment>
                    <footer className="footer">
                        <div className="footer-container">
                            <div className={matches.small ? "sm-footer-grid" : matches.medium ? "md-footer-grid" : "footer-grid"}>
                                <img src={logo} alt="Logo" className="footer-logo" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ipsum rerum? Reprehenderit minus aperiam cumque debitis molestias blanditiis repudiandae perferendis quis. Sint nobis itaque, ex minus laudantium doloremque sequi, ipsam dolorum necessitatibus modi numquam. Nemo, neque ut, incidunt officia nisi qui tempora eos voluptate, corrupti voluptas adipisci animi quam veniam?</p>
                            </div>
                            <div className={matches.small ? "sm-footer-grid" : matches.medium ? "md-footer-grid" : "footer-grid"}>
                                <h2>Explore</h2>
                                <ul className="links-box">
                                    <li>
                                        <NavLink to="/" className="footer-grid-links">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contact" className="footer-grid-links">Contact</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about" className="footer-grid-links">About</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className={matches.small ? "sm-footer-grid" : matches.medium ? "md-footer-grid" : "footer-grid"}>
                                <h2>Social media</h2>
                                <ul className="links-box">
                                    <li>
                                        <a href="/" className="footer-grid-links">Facebook</a>
                                    </li>
                                    <li>
                                        <a href="/" className="footer-grid-links">Instagram</a>
                                    </li>
                                    <li>
                                        <a href="/" className="footer-grid-links">Youtube</a>
                                    </li>
                                    <li>
                                        <a href="/" className="footer-grid-links">LinkedIn</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <p className="copyright">All rights reserved by &copy;Sergej Kubat 2021</p>
                        </div>
                    </footer>
                </Fragment> 
            )}
            </Media>
        </div>
    );
}

export default Footer;