import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../store/resumeSlice";
import { useHistory } from "react-router-dom";

export default function ProfileSection() {
  const profile = useSelector((state) => state.resume.profile);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    dispatch(updateProfile({ [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <h2>Profile Section</h2>
      <input name="fname" placeholder="First Name" value={profile.fname} onChange={handleChange} />
      <input name="lname" placeholder="Last Name" value={profile.lname} onChange={handleChange} />
      <input name="phone" placeholder="Phone Number" value={profile.phone} onChange={handleChange} />
      <input name="address" placeholder="Address" value={profile.address} onChange={handleChange} />
      <input name="url" type="file" onChange={handleChange} />
      <button id="next" onClick={() => history.push("/education")}>Next</button>
      <button id="save_continue" onClick={() => history.push("/education")}>Save and Continue</button>
    </div>
  );
}
