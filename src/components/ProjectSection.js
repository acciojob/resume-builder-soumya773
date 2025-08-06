import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProject, deleteProject } from "../store/resumeSlice";
import { useHistory } from "react-router-dom";

export default function ProjectSection() {
  const projects = useSelector((state) => state.resume.projects);
  const [form, setForm] = useState({ projectName: "", techStack: "", description: "" });
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const add = () => {
    if (!form.projectName) return;
    dispatch(addProject(form));
    setForm({ projectName: "", techStack: "", description: "" });
  };

  return (
    <div>
      <h2>Project Section</h2>
      <input name="projectName" placeholder="Project Name" value={form.projectName} onChange={handleChange} />
      <input name="techStack" placeholder="Tech Stack" value={form.techStack} onChange={handleChange} />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange}></textarea>
      <button id="add_project" onClick={add}>Add</button>
      <ul>
        {projects.map((p, idx) => (
          <li key={idx}>
            {p.projectName} - {p.techStack}
            <button id="delete" onClick={() => dispatch(deleteProject(idx))}>Delete</button>
          </li>
        ))}
      </ul>
      <button id="back" onClick={() => history.push("/skills")}>Back</button>
      <button id="next" onClick={() => history.push("/social")}>Next</button>
    </div>
  );
}
