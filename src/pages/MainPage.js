import React, { useState } from "react";
import AboutPage from "./AboutPage";
import AcademicsPage from "./AcademicsPage";
import DemographicsPage from "./DemographicsPage";
import SexDrugsPage from "./SexDrugsPage";
import HousingPage from "./HousingPage";
import MiscPage from "./MiscPage";
import Header from "../components/Header";

function MainPage() {
  const [showAbout, setShowAbout] = useState(true);
  const [showAcademics, setShowAcademics] = useState(false);
  const [showDemographics, setShowDemographics] = useState(false);
  const [showSexDrugs, setShowSexDrugs] = useState(false);
  const [showHousing, setShowHousing] = useState(false);
  const [showMisc, setShowMisc] = useState(false);
  return (
    <div>
      <Header 
        setAbout={setShowAbout}
        setAcademics={setShowAcademics}
        setDemographics={setShowDemographics}
        setSexDrugs={setShowSexDrugs}
        setHousing={setShowHousing}
        setMisc={setShowMisc}
      />

      {/* Causes AboutPage to be displayed if showAbout is true.
      The same is true for all of the pages below that. */}
      {showAbout && 
        <AboutPage />
      }

      {showAcademics &&
        <AcademicsPage />
      }

      {showDemographics &&
        <DemographicsPage />
      }

      {showSexDrugs &&
        <SexDrugsPage />
      }

      {showHousing &&
        <HousingPage />
      }

      {showMisc &&
        <MiscPage />
      }

    </div>
  );
}

export default MainPage;