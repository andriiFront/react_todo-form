import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../src/pages/Home';
import { About } from '../src/pages/About';
import { Navbar } from './components/Navbar';
import { Alert } from './components/Alert';
import { AlertState } from './context/Alert/AlertState';
import { FirebaseState } from './context/Firebase/FirebaseState';

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Alert />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
