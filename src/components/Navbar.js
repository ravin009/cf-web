import React, { useState } from 'react';

const Navbar = () => {
    const [active, setActive] = useState('home');

    const handleNavClick = (section) => {
        setActive(section);
        const el = document.getElementById(section);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav>
            <div className="container">
                <div
                    className="logo-container"
                    tabIndex={0}
                    role="banner"
                    aria-label="ChatFun Home"
                    onClick={() => {
                        const el = document.getElementById('home');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            const el = document.getElementById('home');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                >
                    <img
                        src="/ChatFun_Logo.png"
                        alt="ChatFun logo"
                        className="logo-image"
                    />
                </div>
                <ul>
                    {['home', 'features', 'download', 'privacy', 'contact'].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item}`}
                                className={active === item ? 'active' : ''}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item);
                                }}
                                tabIndex={0}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                            </a>
                        </li>
                    ))}

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
