import './NotFound.scss';
import { Fragment } from 'react';
import Media from 'react-media';
import { useLocation } from "react-router-dom";

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
                    {matches.small && <p>NotFound - small { location.pathname }</p>}
                    {matches.medium && <p>NotFound - medium { location.pathname }</p>}
                    {matches.large && <p>NotFound - large { location.pathname }</p>}
                </Fragment>
            )}
            </Media>
      </div>
    );
}

export default NotFound;