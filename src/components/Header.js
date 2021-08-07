import React from 'react';
import '../styling/Header.css';

function Header(props){
    //Hides all pages
    const clearDisplay = () => {
        props.setAbout(false);
        props.setAcademics(false);
        props.setDemographics(false);
        props.setSexDrugs(false);
        props.setHousing(false);
        props.setMisc(false);
    }

    //Hides all pages, then makes the demographics page visible.
    //All of the setOnly methods work similarly.
    const setOnlyDemographics = () => {
        clearDisplay();
        props.setDemographics(true);
    }

    const setOnlyAcademics = () => {
        clearDisplay();
        props.setAcademics(true);
    }

    const setOnlyHousing = () => {
        clearDisplay();
        props.setHousing(true);
    }

    const setOnlySexDrugs = () => {
        clearDisplay();
        props.setSexDrugs(true);
    }

    const setOnlyMisc = () => {
        clearDisplay();
        props.setMisc(true);
    }

    const setOnlyAbout = () => {
        clearDisplay();
        props.setAbout(true);
    }

    return (
        <div>
            <header className={"main_header"}>
                    <button onClick={ () => setOnlyAbout() } className={"main_header_button"}>About</button>
                    <button onClick={ () => setOnlyMisc() } className={"main_header_button"}> Misc</button>
                    <button onClick={ () => setOnlySexDrugs() } className={"main_header_button"}>Sex/Drugs</button>
                    <button onClick={ () => setOnlyHousing() } className={"main_header_button"}>Housing</button>
                    <button onClick={ () => setOnlyAcademics() } className={"main_header_button"}>Academics</button>
                    <button onClick={ () => setOnlyDemographics() } className={"main_header_button"}>Demographics</button>
            </header>
        </div>
    )
}

export default Header;