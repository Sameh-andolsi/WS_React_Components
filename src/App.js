import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Adress from './components/Adress';
import ProfilPhoto from './components/ProfilPhoto';
import FullName from './components/FullName';
function App() {
  return (
    <div className="App">
      <NavBar />
      <FullName/>
      <ProfilPhoto />
      <Adress />
    </div>
  );
}

export default App;
