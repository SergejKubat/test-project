import './NotFound.scss';
import { Fragment } from 'react';
import Media from 'react-media';
import { NavLink } from 'react-router-dom';
import { useLocation } from "react-router-dom";

import imgNotFound from "../../assets/img/404.jpg";

function NotFound() {

    let location = useLocation();

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
                        <section className="not-found-container">
                            <div className="not-found-row">
                                <div className={ matches.small ? "not-found-col not-found-col-sm" : "not-found-col" }>
                                    <img src={imgNotFound} alt="Not found" className="not-found-img" />
                                </div>
                                <div className={ matches.small ? "not-found-col not-found-col-sm" : "not-found-col" }>
                                    <h1 className="heading heading-big u-margin-bottom-big" style={{ fontSize: "10rem" }}>404</h1>
                                    <p className="paragraph paragraph-dark u-margin-bottom-small">Ooops, the path <span className="not-found-location">{ location.pathname }</span> doens't seem to exist...</p>
                                    <p className="paragraph u-margin-bottom-medium">Quas, illo recusandae dolorem reprehenderit sapiente incidunt repudiandae voluptatibus voluptates eligendi et.</p>
                                    <NavLink to="/" className="not-found-link">Go back to home page</NavLink>
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

export default NotFound;