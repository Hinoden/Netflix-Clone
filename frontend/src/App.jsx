import {Route, Routes} from 'react-router-dom';
import HomePage from './pages/home/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import Footer from './components/Footer.jsx';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
      <Footer />
      <Toaster />

    </>
  );
}

export default App;
