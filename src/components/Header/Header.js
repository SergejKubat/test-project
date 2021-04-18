import './Header.scss';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                Logo
            </div>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item">
                        <NavLink exact activeClassName="header__link--active" to="/">Home</NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink exact activeClassName="header__link--active" to="/contact">Contact Us</NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink exact activeClassName="header__link--active" to="/about">About Us</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;