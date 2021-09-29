import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { LandingSection } from './Components/LandingSection/LandingSection';
import Location from './Components/Location/Location';
import OverView from './Components/OverView/OverView';
import PeopleReview from './Components/PeopleReview/PeopleReview.';
import ServiceComponent from './Components/ServiceComponent/ServiceComponent';

function App() {
  return (
    <>
      <div >
        <Header />
        <LandingSection/>
        <ServiceComponent />
        <OverView />
        <Location />
        <PeopleReview />
        <Footer />
      </div>
    </>
  );
}

export default App;
