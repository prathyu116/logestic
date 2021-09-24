import './App.css';
import Header from './Components/Header/Header';
import { LandingSection } from './Components/LandingSection/LandingSection';
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
      </div>
    </>
  );
}

export default App;
