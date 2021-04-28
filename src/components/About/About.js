import './About.scss';
import { Fragment } from 'react';
import Media from 'react-media';
import { BsQuestionCircle } from 'react-icons/bs';

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
                    <main className="main">
                        <section className="title" style={{ padding: matches.small ? '6rem 1rem 3rem 1rem' : null }}>
                            <div className="title-content" style={{ width: matches.medium ? '60%' : matches.small ? '85%' : null }}>
                                <h1 className="heading heading-medium heading-light u-margin-bottom-medium">How it work ?</h1>
                                <p className="paragraph">Start working with <a href="/" className="link link-dark link-bold">Landrick</a> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            </div>
                        </section>
                        <section className="questions" style={{ padding: matches.medium ? "5rem 3rem" : matches.small ? "3rem 1.5rem" : null }}>
                            <div className="questions-row" style={{ width: matches.small ? '100%' : null }}>
                                <div className="question" style={{ padding: matches.medium || matches.small ? "2rem 1rem" : null, flex: matches.small ? "1 100%" : null }}>
                                    <div className="question-icon-container">
                                        <BsQuestionCircle className="question-icon" />
                                    </div>
                                    <div className="question-content">
                                        <h2 className="heading heading-small heading-light u-margin-bottom-small">How our <a href="/" className="link link-light">Landrick</a> work ?</h2>
                                        <p className="paragraph paragraph-small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fuga molestias similique soluta deleniti quisquam officiis dolorem reprehenderit quas cum id, eius, numquam veniam labore praesentium sapiente.</p>
                                    </div>
                                </div>
                                <div className="question" style={{ padding: matches.medium || matches.small ? "2rem 1rem" : null, flex: matches.small ? "1 100%" : null }}>
                                    <div className="question-icon-container">
                                        <BsQuestionCircle className="question-icon" />
                                    </div>
                                    <div className="question-content">
                                        <h2 className="heading heading-small heading-light u-margin-bottom-small">What is the main process open account ?</h2>
                                        <p className="paragraph paragraph-small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est saepe cum perspiciatis beatae minima ut qui nobis eaque odit repellendus, accusamus temporibus obcaecati rerum?</p>
                                    </div>
                                </div>
                            </div>

                            <div className="questions-row" style={{ width: matches.small ? '100%' : null }}>
                                <div className="question" style={{ padding: matches.medium || matches.small ? "2rem 1rem" : null, flex: matches.small ? "1 100%" : null }}>
                                    <div className="question-icon-container">
                                        <BsQuestionCircle className="question-icon" />
                                    </div>
                                    <div className="question-content">
                                        <h2 className="heading heading-small heading-light u-margin-bottom-small">How to make unlimited data entry ?</h2>
                                        <p className="paragraph paragraph-small">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, quidem consectetur praesentium explicabo eaque voluptatum, ratione distinctio quod, quia nihil facere voluptatem quos?</p>
                                    </div>
                                </div>
                                <div className="question" style={{ padding: matches.medium || matches.small ? "2rem 1rem" : null, flex: matches.small ? "1 100%" : null }}>
                                    <div className="question-icon-container">
                                        <BsQuestionCircle className="question-icon" />
                                    </div>
                                    <div className="question-content">
                                        <h2 className="heading heading-small heading-light u-margin-bottom-small">Is <a href="/" className="link link-light">Landrick</a> safer to use with my account ?</h2>
                                        <p className="paragraph paragraph-small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloribus, ipsa autem saepe alias asperiores illum non laboriosam facilis accusantium ducimus nulla! Veniam, blanditiis necessitatibus? Recusandae quos temporibus quod culpa tenetur exercitationem id explicabo repellendus.</p>
                                    </div>
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

export default About;