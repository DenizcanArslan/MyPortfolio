
import './App.css';

/*/COMPONENTS*/
import Navbar from './components/Navbar';
import WelcomingSection from './components/WelcomingSection';
import AboutMe from './components/AboutMe';
import TechStack from './components/TechStack';
import Footer from './components/Footer';
import Contact from './components/Contact';


function App() {
  return (
   <>
     <Navbar/>
     <WelcomingSection />
     <AboutMe />
     <TechStack/>
     <Contact/>
    <Footer/> 
   </>
       
 
  );
}

export default App;
