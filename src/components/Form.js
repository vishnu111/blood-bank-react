import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Form() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    user_name: "",
    user_gender: "",
    user_phone: "",
    user_email: "",
    user_blood_group: "",
    user_city: "",
    user_state: "",
    user_pin: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    const newUser = { ...userData, [name]: value };
    setUserData(newUser);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      user_name,
      user_gender,
      user_phone,
      user_email,
      user_blood_group,
      user_city,
      user_state,
      user_pin,
    } = userData;
    console.log(user_blood_group);
    await fetch("http://localhost:5000/user/user-form", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        user_name,
        user_gender,
        user_phone,
        user_email,
        user_blood_group,
        user_city,
        user_state,
        user_pin,
      }),
    })
      .then((result) => {
        navigate("/success");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="user-info">
      <form
        method="POST"
        className="user-register-form"
        id="user-register-form"
        onSubmit={handleSubmit}
      >
        <div className="form-group user-name">
          <label htmlFor="user_name">Name : </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            onChange={handleInputs}
            value={userData.user_name}
            placeholder="Please enter your name"
          />
        </div>
        <div className="form-group user-gender">
          <label htmlFor="user_gender">Gender : </label>
          <select
            type="submit"
            name="user_gender"
            id="user_gender"
            onChange={handleInputs}
            value={userData.user_gender}
          >
            <option value="" disabled selected hidden>
              Select your gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group user-phone">
          <label htmlFor="user_phone">Phone : </label>
          <input
            type="number"
            name="user_phone"
            id="user_phone"
            onChange={handleInputs}
            value={userData.user_phone}
            placeholder="Phone here"
          />
        </div>
        <div className="form-group user-email">
          <label htmlFor="user_email">E-mail : </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            onChange={handleInputs}
            value={userData.user_email}
            placeholder="Email here"
          />
        </div>
        <div className="form-group user-blood-group">
          <label htmlFor="user_blood_group">Blood Group : </label>
          <select
            type="submit"
            name="user_blood_group"
            id="user_blood_group"
            onChange={handleInputs}
            value={userData.user_blood_group}
          >
            <option value="" disabled selected hidden>
              Select Your Blood Group
            </option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
        <div className="form-group user-city">
          <label htmlFor="user_city">City : </label>
          <input
            type="text"
            name="user_city"
            id="user_city"
            onChange={handleInputs}
            value={userData.user_city}
            placeholder="City here"
          />
        </div>
        <div className="form-group user-state">
          <label htmlFor="user_state">State : </label>
          <input
            type="text"
            name="user_state"
            id="user_state"
            onChange={handleInputs}
            value={userData.user_state}
            placeholder="State here"
          />
        </div>
        <div className="form-group user-pin">
          <label htmlFor="user_pin">Pin : </label>
          <input
            type="text"
            name="user_pin"
            id="user_pin"
            onChange={handleInputs}
            value={userData.user_pin}
            placeholder="Pin here"
          />
        </div>
        <div className="form-group ">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
export default Form;
