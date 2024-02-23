import { useState, useEffect } from 'react';

export default function WindowSize() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);// initial vale.. the value will not change unless we refresh for for that only we are creating a listner
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);  // setting listner to the window objected which is the resize object and the listner is assigned to that object

    return () => window.removeEventListener('resize', handleResize);//  sending for garbage collection.. If not it will stay even though we leave hat component and go for another component
  }, []);

  return { windowWidth, windowHeight };
};

