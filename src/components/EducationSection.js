import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEducation, deleteEducation } from "../store/resumeSlice";
import { useHistory } from "react-router-dom";

export default function EducationSection() {
  const education = useSelector((state) => state.resume.education);
  const [form, setForm] = useState({ courseName: "", completionYear: "", college: "", percentage: "" });
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const add = () => {
    if (!form.courseName) return;
    dispatch(addEducation(form));
    setForm({ courseName: "", completionYear: "", college: "", percentage: "" });
  };

  return (
    <div>
      <h2>Education Section</h2>
      <input name="courseName" placeholder="Course Name" value={form.courseName} onChange={handleChange} />
      <input name="completionYear" placeholder="Completion Year" value={form.completionYear} onChange={handleChange} />
      <input name="college" placeholder="College" value={form.college} onChange={handleChange} />
      <input name="percentage" placeholder="Percentage" value={form.percentage} onChange={handleChange} />
      <button id="add_education" onClick={add}>Add</button>
      <ul>
        {education.map((edu, idx) => (
          <li key={idx}>
            {edu.courseName} - {edu.college}
            <button id="delete" onClick={() => dispatch(deleteEducation(idx))}>Delete</button>
          </li>
        ))}
      </ul>
      <button id="back" onClick={() => history.push("/")}>Back</button>
      <button id="next" onClick={() => history.push("/skills")}>Next</button>
    </div>
  );
}
