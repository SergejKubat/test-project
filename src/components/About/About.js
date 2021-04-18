import './About.scss';
import { Fragment } from 'react';
import Media from 'react-media';

function About() {
    return (
        <div>
            <Media queries={{
                small: "(max-width: 699px)",
                medium: "(min-width: 700px) and (max-width: 1399px)",
                large: "(min-width: 1400px)"
            }}>
            {matches => (
                <Fragment>
                    {matches.small && <p>About - small</p>}
                    {matches.medium && <p>About - medium</p>}
                    {matches.large && <p>About - large</p>}
                </Fragment>
            )}
            </Media>
      </div>
    );
}

export default About;