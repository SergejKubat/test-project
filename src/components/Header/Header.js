import './Header.scss';
import logo from '../../assets/img/logo.png';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';

/*const lngs = {
    en: { nativeName: 'English' },
    de: { nativeName: 'Deutsch' },
    ru: { nativeName: 'Русский' },
    sr: { nativeName: 'Srpski' }
  };*/

function Header() {

    const { t, /*i18n*/ } = useTranslation();

    return (
        <header className="header">
            <div>
                <img src={logo} className="header__logo" />
            </div>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item">
                        <NavLink exact activeClassName="header__link--active" to="/" className="header__link">Home</NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink exact activeClassName="header__link--active" to="/contact" className="header__link">Contact Us</NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink exact activeClassName="header__link--active" to="/about" className="header__link">About Us</NavLink>
                    </li>
                </ul>
            </nav>
            <h2> {t('description.text')} </h2>
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