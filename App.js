import './App.css';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Product title={"Kiki training"} desc={"Basic training & training to be best friends with cats!"} cost={ 1000.00 }/>
      <Product title={"Cat Nip"} desc={"For the cats ;)"} cost={ 3.49 }/>
      <Product title={"Marriage Certificate"} desc={"Proof of marriage!!"} cost={ 9.00 }/>
    </div>
  );
}

export default App;
