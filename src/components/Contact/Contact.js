import './Contact.scss';
import { Fragment } from 'react';
import Media from 'react-media';

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
                    {matches.small && <p>Contact - small</p>}
                    {matches.medium && <p>Contact - medium</p>}
                    {matches.large && <p>Contact - large</p>}
                </Fragment>
            )}
            </Media>
      </div>
    );
}

export default Contact;