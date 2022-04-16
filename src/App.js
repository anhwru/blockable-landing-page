import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './App.css';
import Home from './view/HomePage/index';
import Coming from './view/Coming';
import CardPage from './view/CardPage';
import Academy from './view/Academy';

function App() {
  const { pathname } = useLocation();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='App'>
      {showButton && (
        <button
          onClick={scrollToTop}
          className='back-to-top'
          style={{ zIndex: 999999, background: '#fff', position: 'fixed', bottom: 10, right: 10 }}>
          &#8679;
        </button>
      )}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/coming' element={<Coming />}></Route>
        <Route path='/yggdrasil' element={<CardPage />}></Route>
        <Route path='/academy' element={<Academy />}></Route>
      </Routes>
    </div>
  );
}

export default App;
