import './App.css';
import Header from './Components/Header/Header';
import { LandingSection } from './Components/LandingSection/LandingSection';
import Location from './Components/Location/Location';
import OverView from './Components/OverView/OverView';
import ServiceComponent from './Components/ServiceComponent/ServiceComponent';

function App() {
  return (
    <>
      <div className="section-container">
        <Header />
        <LandingSection/>
        <ServiceComponent />
        <OverView />
        <Location />
      </div>
    </>
  );
}

export default App;
