import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './page/Homepage';
import Firststage from './subpage/Firststage';
import Nextpage from './nextpage/Nextpage';
import Kinpage from './kinpage/kinpage';
import Signup from './Signup page/Signup';
import Login from './Login page/Login';
import { ImageProvider } from './context/ImageContext';


function App() {
  return (
    <ImageProvider>
      <Router>
        <div className="overflow-x-hidden bg-slate-950 medium">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/subpage" element={<Firststage />} />
            <Route path="/nextpage" element={<Nextpage />} />
            <Route path="/kinpage" element={<Kinpage />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/Login' element={<Login />} />
          </Routes>
        </div>
      </Router>
    </ImageProvider>
  );
}

export default App;
