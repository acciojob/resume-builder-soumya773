import React from "react";
import { useSelector } from "react-redux";

export default function ResumeOutput() {
  const resume = useSelector((state) => state.resume);

  return (
    <div>
      <h2>Final Resume</h2>
      <h3>{resume.profile.fname} {resume.profile.lname}</h3>
      <p>{resume.profile.phone} | {resume.profile.address}</p>
      <h4>Education</h4>
      <ul>{resume.education.map((edu, idx) => <li key={idx}>{edu.courseName} - {edu.college}</li>)}</ul>
      <h4>Skills</h4>
      <ul>{resume.skills.map((s, idx) => <li key={idx}>{s}</li>)}</ul>
      <h4>Projects</h4>
      <ul>{resume.projects.map((p, idx) => <li key={idx}>{p.projectName} - {p.techStack}</li>)}</ul>
      <h4>Social Links</h4>
      <ul>{resume.social.map((s, idx) => <li key={idx}>{s}</li>)}</ul>
    </div>
  );
}
