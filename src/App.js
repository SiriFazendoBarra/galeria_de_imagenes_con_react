import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Galería de Imágenes con React" />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
