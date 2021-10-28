import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styling/Header.css';

function Header() {
    return (
        <header className={'main_header'}>
            <h3>SE 2026 Profile</h3>
            <div class={'spacer'} />
            {['About', 'Demographics', 'Academics', 'Housing', 'Sex/Drugs', 'Misc'].map((page, i) => 
                <NavLink
                    to={`/class-profile/${page.toLowerCase().replace('/', '-')}`}
                    activeClassName={'active'}
                    className={'link'}
                >
                    {page}
                </NavLink>
            )}
        </header>
    )
}

export default Header;