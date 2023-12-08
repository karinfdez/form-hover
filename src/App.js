import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import FormComponent from "./components/FormComponent";
import HoverTextComponent from "./components/HoverTextComponent";
import { mockTextData } from "./mockTextData";

function App() {
  const [hoverText, setHoverText] = useState(mockTextData.section1);
  const [currentSection, setCurrentSection] = useState("Section 1");
  const formRef = useRef(null);

  useEffect(() => {
    const formSections = formRef?.current?.querySelectorAll(".form-section");
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.getAttribute("data-section-name"));
          setHoverText(mockTextData[entry.target.id]);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, {
      root: formRef.current,
      rootMargin: "0px",
      threshold: 1,
    });
    formSections?.forEach((section) => {
      observer.observe(section);
    });
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="App">
      <FormComponent ref={formRef} currentSection={currentSection} />
      <HoverTextComponent text={hoverText} />
    </div>
  );
}

export default App;
