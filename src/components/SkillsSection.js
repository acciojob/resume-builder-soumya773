import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSkill, deleteSkill } from "../store/resumeSlice";
import { useHistory } from "react-router-dom";

export default function SkillsSection() {
  const skills = useSelector((state) => state.resume.skills);
  const [skill, setSkill] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const add = () => {
    if (!skill) return;
    dispatch(addSkill(skill));
    setSkill("");
  };

  return (
    <div>
      <h2>Skills Section</h2>
      <input name="skill" placeholder="Skill" value={skill} onChange={(e) => setSkill(e.target.value)} />
      <button id="add_skill" onClick={add}>Add</button>
      <ul>
        {skills.map((s, idx) => (
          <li key={idx}>
            {s} <button id="delete_skill" onClick={() => dispatch(deleteSkill(idx))}>Delete</button>
          </li>
        ))}
      </ul>
      <button id="back" onClick={() => history.push("/education")}>Back</button>
      <button id="next" onClick={() => history.push("/projects")}>Next</button>
    </div>
  );
}
