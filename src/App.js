import Header from "./componends/Header/Header";
import Topcontainer from "./componends/Topcontainer/Topcontainer";
import Contact from './componends/Contact/Contact';
import About from "./componends/About/About";
import Ourproducts from './componends/Ourproducts/Ourproducts';
import Support from './componends/Support/Support';



const App = () => {



  return (

    <div>
      <Header/>
      <Topcontainer/>
    
      <About/>
      <Ourproducts/>
      <Support/>
     
      <Contact/>
      
      
    </div>
  );
};

export default App ;
