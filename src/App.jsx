import Header from './Components/Header_Section/Header.jsx'
import Hero from './Components/Hero_Section/Hero.jsx'
import Companies from './Components/Companies_Section/Companies.jsx'
import Residencies from './Components/Residencies/Residencies.jsx';
import Value from './Components/Value/Value.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Get_Started from './Components/Get_Started/Get_Started.jsx'
import PricingSection from './Components/Pricing/PricingSection.jsx'
function App() {
  return (
    <div class="app">
       <Header/>
      <Hero/>
      <Companies/>
      <Residencies/>
      <Value/> 
      <PricingSection />
      <Contact/>
      <Get_Started/> 
     

    </div>
  );
}

export default App;
