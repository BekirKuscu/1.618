import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import WasteDetail from './Components/WasteDetail';
import WasteQuote from './Components/WasteQuote';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <WasteDetail />
      <WasteQuote />
      <Footer />
    </div>
  );
}

export default App;
