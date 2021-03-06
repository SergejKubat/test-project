import './Contact.scss';
import { Fragment } from 'react';
import Media from 'react-media';
import { HiOutlineMail } from 'react-icons/hi';
import { FiPhone } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';


function Contact() {
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
                        <section className="contact-container" style={{ padding: matches.medium ? "8rem 3rem 8rem 0" : matches.small ? "5rem 1.5rem" : null, backgroundPosition: matches.small ? "center top" : null }}>
                            <div className="contact-col" style={{ flex: matches.small ? '1 100%' : null }}></div>
                            <div className="contact-col" style={{ flex: matches.small ? '1 100%' : null }}>
                                <div className="contact-content" style={{ width: matches.medium ? '100%' : null }}>
                                    <h1 className="heading heading-big heading-light u-margin-bottom-small" style={{ fontSize: matches.small ? '4rem' : null }}>Let's talk about your portfolio</h1>
                                    <p className="paragraph paragraph-dark u-margin-bottom-small">Start working with <a href="/" className="link link-dark link-bold">Landrick</a> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <ul className="contact-list">
                                        <li className="contact-item">
                                            <div className="contact-item-icon-container">
                                                <HiOutlineMail className="contact-item-icon" />
                                            </div>
                                            <div className="contact-item-content">
                                                <h2 className="heading heading-small">Email</h2>
                                                <p><a href="mailto:someone@example.com" className="link link-dark link-thin">contact@example.com</a></p>
                                            </div>
                                        </li>
                                        <li className="contact-item">
                                            <div className="contact-item-icon-container">
                                                <FiPhone className="contact-item-icon" />
                                            </div>
                                            <div className="contact-item-content">
                                                <h2 className="heading heading-small">Phone</h2>
                                                <p><a href="tel:+152534468854" className="link link-dark link-thin">+152 534-468-854</a></p>
                                            </div>
                                        </li>
                                        <li className="contact-item">
                                            <div className="contact-item-icon-container">
                                                <GrLocation className="contact-item-icon" />
                                            </div>
                                            <div className="contact-item-content">
                                                <h2 className="heading heading-small">Location</h2>
                                                <p><a href="https://maps.google.com/?ll=38.882147,-76.99017" className="link link-dark link-thin">View on Google map</a></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </main>
                </Fragment>
            )}
            </Media>
      </div>
    );
}

export default Contact;