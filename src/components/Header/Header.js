import './Header.scss';
import logo from '../../assets/img/logo.png';
import { Fragment, useState } from 'react';
import Media from 'react-media';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';

import { ReactComponent as MenuIcon } from '../../assets/svg/menu.svg';
import { ReactComponent as CloseMenu } from '../../assets/svg/menu-close.svg';

const lngs = {
    en: { nativeName: 'English' },
    de: { nativeName: 'Deutsch' },
    ru: { nativeName: 'Русский' },
    sr: { nativeName: 'Srpski' }
  };

function Header() {

    const { t, i18n } = useTranslation();

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const changeLanguage = (e) => i18n.changeLanguage(e.target.value);

    return (
        <div>
            <Media queries={{
                small: "(max-width: 699px)",
                medium: "(min-width: 700px) and (max-width: 1399px)",
                large: "(min-width: 1400px)"
            }}>
            {matches => (
                <Fragment>
                    <header className={matches.small ? "header header-sm" : "header"}>
                        <div className="header-logo-nav">
                            <div className="header-logo-container">
                                <img src={logo} alt="Logo" className="header-logo" />
                            </div>
                            <ul className={click ? matches.small ? "header-sm-nav-options active" : "header-nav-options active" : matches.small ? "header-sm-nav-options" : "header-nav-options"}>
                                <li className={matches.small ? "header-sm-option" : "header-option"} onClick={closeMobileMenu}>
                                    <NavLink exact activeClassName="nav-link active" to="/" className="nav-link">Home</NavLink>
                                </li>
                                <li className={matches.small ? "header-sm-option" : "header-option"} onClick={closeMobileMenu}>
                                    <NavLink exact activeClassName="nav-link active" to="/contact" className="nav-link">Contact</NavLink>
                                </li>
                                <li className={matches.small ? "header-sm-option" : "header-option"} onClick={closeMobileMenu}>                                    
                                    <NavLink exact activeClassName="nav-link active" to="/about" className="nav-link">About</NavLink>
                                </li>
                                {matches.small ? (
                                    <div>
                                        <li className={matches.small ? "header-sm-option" : "header-option"}>
                                            <h2 className="header-translation-text" style={{ marginRight: "0" }}>{t('description.text')}</h2>
                                        </li>
                                        <li className={matches.small ? "header-sm-option" : "header-option"}>
                                            <select name="lang" value={i18n.language} id="lang" className="header-translation-dropdown" onChange={ changeLanguage }>
                                                {Object.keys(lngs).map((lng) => (
                                                    <option key={lng} value={lng}>
                                                        {lngs[lng].nativeName}
                                                    </option>
                                                ))}
                                            </select>
                                        </li>
                                    </div>
                                ) : ""}
                            </ul>
                        </div>

                        {matches.small ? "" : (
                            <div className="header-translation-container">
                                <h2 className="header-translation-text">{t('description.text')}</h2>
                                <div>
                                    <select name="lang" value={i18n.language} id="lang" className="header-translation-dropdown" onChange={ changeLanguage }>
                                        {Object.keys(lngs).map((lng) => (
                                            <option key={lng} value={lng}>
                                                {lngs[lng].nativeName}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        )}

                        <div className={matches.small ? "header-sm-mobile-menu" : "header-mobile-menu"} onClick={handleClick}>
                            {click ? (
                                <CloseMenu className="header-menu-icon" />
                            ) : (
                                <MenuIcon className="header-menu-icon" />
                            )}
                        </div>
                    </header>
                </Fragment>
            )}
            </Media>
        </div>
    );
}

export default function WrappedApp() {
    return (
      <Suspense fallback="...is loading">
        <Header />
      </Suspense>
    );
}