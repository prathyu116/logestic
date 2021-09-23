import './App.css';
import Header from './Components/Header/Header';
import { LandingSection } from './Components/LandingSection/LandingSection';

function App() {
  return (
    <>
      <div className="section-container">
        <Header />
        <LandingSection/>
      </div>
    </>
  );
}

export default App;
