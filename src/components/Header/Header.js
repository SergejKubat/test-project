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
                    <header className={matches.small ? "header sm-header" : "header"}>
                        <div className="logo-nav">
                            <div className="logo-container">
                                <img src={logo} alt="Logo" className="logo" />
                            </div>
                            <ul className={click ? matches.small ? "sm-nav-options active" : "nav-options active" : matches.small ? "sm-nav-options" : "nav-options"}>
                                <li className={matches.small ? "sm-option" : "option"} onClick={closeMobileMenu}>
                                    <NavLink exact activeClassName="nav-link active" to="/" className="nav-link">Home</NavLink>
                                </li>
                                <li className={matches.small ? "sm-option" : "option"} onClick={closeMobileMenu}>
                                    <NavLink exact activeClassName="nav-link active" to="/contact" className="nav-link">Contact</NavLink>
                                </li>
                                <li className={matches.small ? "sm-option" : "option"} onClick={closeMobileMenu}>                                    
                                    <NavLink exact activeClassName="nav-link active" to="/about" className="nav-link">About</NavLink>
                                </li>
                                {matches.small ? (
                                    <div>
                                        <li className={matches.small ? "sm-option" : "option"}>
                                            <h2 className="transl-text" style={{ marginRight: "0" }}>{t('description.text')}</h2>
                                        </li>
                                        <li className={matches.small ? "sm-option" : "option"}>
                                            <select name="lang" id="lang" className="transl-dropdown" onChange={ changeLanguage }>
                                                {Object.keys(lngs).map((lng) => (
                                                    <option key={lng} selected={i18n.language === lng } value={lng}>
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
                            <div className="transl-container">
                                <h2 className="transl-text">{t('description.text')}</h2>
                                <div>
                                    <select name="lang" id="lang" className="transl-dropdown" onChange={ changeLanguage }>
                                        {Object.keys(lngs).map((lng) => (
                                            <option key={lng} selected={i18n.language === lng } value={lng}>
                                                {lngs[lng].nativeName}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        )}

                        <div className={matches.small ? "sm-mobile-menu" : "mobile-menu"} onClick={handleClick}>
                            {click ? (
                                <CloseMenu className="menu-icon" />
                            ) : (
                                <MenuIcon className="menu-icon" />
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

/* 

{Object.keys(lngs).map((lng) => (
                <button key={lng} style={{ fontWeight: i18n.language === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                    {lngs[lng].nativeName}
                </button>
            ))}

 */