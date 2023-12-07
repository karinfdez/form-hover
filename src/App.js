import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import FormComponent from './components/FormComponent';
import HoverTextComponent from './components/HoverTextComponent';
import { mockTextData } from './mockTextData'

function App() {
  const [hoverText, setHoverText] = useState('Hover over the form');
  const formRef = useRef(null);

  useEffect(() => {
    const formSections = formRef.current.querySelectorAll('.form-section');

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setHoverText(mockTextData[entry.target.id]);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: formRef.current, //This is the ancestor of the target(s) (parent container)
      rootMargin: "0px",
      threshold: 1.0,  //Adjust this value at your convenience(threshold = 1.0 => When 100% of the target is visible within the element specified by the root option, the callback is invoked.)
    });

    formSections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLeave = () => {
    setHoverText('Hover over the form');
  };

  return (
    <div className="App">
      <FormComponent ref={formRef} handleLeave={handleLeave} />
      <HoverTextComponent text={hoverText} />
    </div>
  );
}

export default App;
