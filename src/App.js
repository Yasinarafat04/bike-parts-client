import './App.css';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar />
          <Home />
        <Footer />
    </div>
  );
}

export default App;
