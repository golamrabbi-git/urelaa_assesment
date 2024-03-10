import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Loginform from './components/Loginform';
import Parcel from './components/Parcel';
import AddParcel from './components/AddParcel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginform />} />
        <Route path="/parcels" element={<Parcel />} />
        <Route path='/create' element={<AddParcel/>} />
      </Routes>
    </Router>
  );
}

export default App;
