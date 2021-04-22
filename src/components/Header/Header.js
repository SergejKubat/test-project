import './Header.scss';
import logo from '../../assets/img/logo.png';
import { Fragment, useState } from 'react';
import Media from 'react-media';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';

import { ReactComponent as MenuIcon } from '../../assets/svg/menu.svg';
import { ReactComponent as CloseMenu } from '../../assets/svg/menu-close.svg';

/*const lngs = {
    en: { nativeName: 'English' },
    de: { nativeName: 'Deutsch' },
    ru: { nativeName: 'Русский' },
    sr: { nativeName: 'Srpski' }
  };*/

function Header() {

    const { t, /*i18n*/ } = useTranslation();

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <header className="header">
            <Media queries={{
                small: "(max-width: 699px)",
                medium: "(min-width: 700px) and (max-width: 1399px)",
                large: "(min-width: 1400px)"
            }}>
            {matches => (
                <Fragment>
                    <div className="logo-nav">
                        <div className="logo-container">
                            <NavLink exact activeClassName="nav-link active" to="/" className="nav-link">
                                <img src={logo} alt="Logo" className="logo" />
                            </NavLink>
                        </div>
                        <ul className={click ? "nav-options active" : "nav-options"}>
                            <li className="option" onClick={closeMobileMenu}>
                                <NavLink exact activeClassName="nav-link active" to="/" className="nav-link">Home</NavLink>
                            </li>
                            <li className="option" onClick={closeMobileMenu}>
                                <NavLink exact activeClassName="nav-link active" to="/contact" className="nav-link">Contact</NavLink>
                            </li>
                            <li className="option" onClick={closeMobileMenu}>                                    
                                <NavLink exact activeClassName="nav-link active" to="/about" className="nav-link">About</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="transl-container">
                        <h2 className="transl-text">Text for translation</h2>
                    </div>

                    <div className="mobile-menu" onClick={handleClick}>
                        {click ? (
                            <CloseMenu className="menu-icon" />
                        ) : (
                            <MenuIcon className="menu-icon" />
                        )}
                    </div>
                </Fragment>
            )}
            </Media>
        </header>
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