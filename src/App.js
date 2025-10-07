import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { useEffect, useRef } from 'react';

function App() {
  const mouseFollowerRef = useRef(null);
  useEffect(()=>{
    function mouseFollower(event){
      let x = event.clientX;
      let y = event.clientY;
      mouseFollowerRef.current.style.left = x+"px";
      mouseFollowerRef.current.style.top = (y-5)+"px";
    }
    document.body.addEventListener('mousemove',mouseFollower);
  },[]);
  return (
    <main className="w-full h-fit relative">
      <Home />
      <div id="mousefollower" ref={mouseFollowerRef} className="hidden lg:block fixed w-2 h-2 aspect-square rounded-full bg-blue-500 select-none pointer-events-none z-20"></div>
    </main>
  );
}

export default App;
