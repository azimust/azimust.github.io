import React, { useState } from "react";
import '../Header/Header.css';
import { Icon } from '@iconify/react';

const Header = () => {
    const [Toggle, showMenu] = useState(false);
    return (
        <header className="header">
            <nav className="nav container">
                <h3 href="#" className="nav__logo">Azimbek</h3>

                <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <Icon icon="material-symbols:home-outline-rounded" /> Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <Icon icon="material-symbols:menu-book-outline-sharp" /> About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <Icon icon="carbon:skill-level" /> Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <Icon icon="ic:outline-work-outline" /> Portfolio
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <Icon icon="material-symbols:perm-contact-calendar" /> Contact
                            </a>
                        </li>
                    </ul>
                    <Icon className="nav__close" icon="mdi:cancel-box-outline" onClick={() => showMenu(!Toggle)} />
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <Icon icon="icon-park-outline:blocks-and-arrows" />
                </div>
            </nav>
        </header>
    )
}

export default Header