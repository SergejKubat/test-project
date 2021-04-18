import './Home.scss';
import { Fragment } from 'react';
import Media from 'react-media';

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
                </Fragment>
            )}
            </Media>
      </div>
    );
}

export default Home;