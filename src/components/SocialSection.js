import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSocial } from "../store/resumeSlice";
import { useHistory } from "react-router-dom";

export default function SocialSection() {
  const social = useSelector((state) => state.resume.social);
  const [link, setLink] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const add = () => {
    if (!link) return;
    dispatch(addSocial(link));
    setLink("");
  };

  return (
    <div>
      <h2>Social Links</h2>
      <input name="Social" placeholder="Social Media Link" value={link} onChange={(e) => setLink(e.target.value)} />
      <button id="add_social" onClick={add}>Add</button>
      <ul>
        {social.map((s, idx) => <li key={idx}>{s}</li>)}
      </ul>
      <button id="back" onClick={() => history.push("/projects")}>Back</button>
      <button id="next" onClick={() => history.push("/resume")}>Next</button>
    </div>
  );
}
