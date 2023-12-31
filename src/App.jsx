import { useState } from 'react';
import './App.scss';
import Header from './Components/layout/Header/Header';
import About from './Components/screen/About/About';
import Contact from './Components/screen/Contact/Contact';
import Intro from './Components/screen/Intro/Intro';

function App() {

  const [scrol, setScrol] = useState(false)
  const offSet = 100;
  const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener('scroll', () => {
    if (getTop() > offSet) {
      setScrol(true)
    } else {
      setScrol(false)
    }
  })

  const top = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };

  // 
  // document.addEventListener('contextmenu', (e) => {
  //   e.preventDefault();
  // });

  // document.onkeydown = (e) => {
  //   if (e.keyCode === 123) {
  //     return false;
  //   } else if (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) {
  //     return false
  //   } else if (e.ctrlKey && e.shiftKey && e.keyCode === 'C'.charCodeAt(0)) {
  //     return false
  //   } else if (e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) {
  //     return false
  //   } else if (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) {
  //     return false
  //   }
  // };
  //

  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Contact />

      <div onClick={top} className={scrol ? "scroll-up active" : "scroll-up"}>
        <svg className='scroll-up__svg' viewBox='-2 -2 52 52'>
          <path className='scroll-up__svg__path'
            d='
              M24,0
              a24,24, 0 0,1 0, 48
              a24,24, 0 0,1 0, -48
            '/>
        </svg>
      </div>
    </div>
  );
}

export default App;