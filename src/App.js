import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BarSearch from './components/BarSearch';
import ResultsList from './components/ResultsList'
function App() {
  return (
    <div className="App">
     <BarSearch/>
     <ResultsList/>
    </div>
  );
}

export default App;
