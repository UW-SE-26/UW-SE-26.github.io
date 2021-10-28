import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header";
import DemographicsPage from "./pages/DemographicsPage";
import HousingPage from "./pages/HousingPage";
import SexDrugsPage from "./pages/SexDrugsPage";
import AcademicsPage from "./pages/AcademicsPage";
import MiscPage from "./pages/MiscPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={["/class-profile/about", "/class-profile"]}>
            <AboutPage />
          </Route>
          <Route exact path="/class-profile/academics">
            <AcademicsPage />
          </Route>
          <Route exact path="/class-profile/demographics">
            <DemographicsPage />
          </Route>
          <Route exact path="/class-profile/sex-drugs">
            <SexDrugsPage />
          </Route>
          <Route exact path="/class-profile/housing">
            <HousingPage />
          </Route>
          <Route exact path="/class-profile/misc">
            <MiscPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
