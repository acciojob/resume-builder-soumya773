
// App.js
import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import ProfileSection from "./ProfileSection";
import EducationSection from "./EducationSection";
import SkillsSection from "./SkillsSection";
import ProjectSection from "./ProjectSection";
import SocialSection from "./SocialSection";
import ResumeOutput from "./ResumeOutput";
import "../styles/App.css";

export default function App() {
  const location = useLocation();
  const steps = ["/", "/education", "/skills", "/projects", "/social"];
  const stepNames = ["Profile Section", "Education Section", "Skills Section", "Mini Project", "Social"];

  const currentStep = steps.indexOf(location.pathname);

  return (
    <div className="app-container">
      <header className="app-header">RESUME GENERATOR</header>
      <div className="stepper">
        {stepNames.map((name, idx) => (
          <div key={idx} className={`step ${currentStep === idx ? "active" : ""}`}>
            <div className="step-number">{idx + 1}</div>
            <div className="step-name">{name}</div>
          </div>
        ))}
      </div>

      <div className="form-container">
        <Switch>
          <Route path="/" exact component={ProfileSection} />
          <Route path="/education" component={EducationSection} />
          <Route path="/skills" component={SkillsSection} />
          <Route path="/projects" component={ProjectSection} />
          <Route path="/social" component={SocialSection} />
          <Route path="/resume" component={ResumeOutput} />
        </Switch>
      </div>
    </div>
  );
}

