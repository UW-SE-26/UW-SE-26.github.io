import React, { useState } from "react";
import AboutPage from "./AboutPage";
import AcademicsPage from "./AcademicsPage";
import DemographicsPage from "./DemographicsPage";
import SexDrugsPage from "./SexDrugsPage";
import HousingPage from "./HousingPage";
import MiscPage from "./MiscPage";
import Header from "../components/Header";

function MainPage() {
  const [page, setPage] = useState("about");

  const renderPage = () => {
    switch (page) {
      case "academics":
        return <AcademicsPage />;
      case "demographics":
        return <DemographicsPage />;
      case "sexDrugs":
        return <SexDrugsPage />;
      case "housing":
        return <HousingPage />;
      case "misc":
        return <MiscPage />;
      default:
        return <AboutPage />;
    }
  };

  return (
    <div>
      <Header
        setAbout={() => setPage("about")}
        setAcademics={() => setPage("academics")}
        setDemographics={() => setPage("demographics")}
        setSexDrugs={() => setPage("sexDrugs")}
        setHousing={() => setPage("housing")}
        setMisc={() => setPage("misc")}
        activePage={page}
      />
      {renderPage()}
    </div>
  );
}

export default MainPage;
