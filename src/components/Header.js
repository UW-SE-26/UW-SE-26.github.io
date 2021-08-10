import React from 'react';
import '../styling/Header.css';

function Header(props) {

    const activeClass = (page) => page === props.activePage && 'active';

    return (
        <div>
            <header className={"main_header"}>
                <h3>SE 2026 Profile</h3>
                <div class={'spacer'} />
                <button onClick={props.setAbout} className={activeClass('about')}>About</button>
                <button onClick={props.setDemographics} className={activeClass('demographics')}>Demographics</button>
                <button onClick={props.setAcademics} className={activeClass('academics')}>Academics</button>
                <button onClick={props.setHousing} className={activeClass('housing')}>Housing</button>
                <button onClick={props.setSexDrugs} className={activeClass('sexDrugs')}>Sex/Drugs</button>
                <button onClick={props.setMisc} className={activeClass('misc')}> Misc</button>
            </header>
        </div>
    )
}

export default Header;