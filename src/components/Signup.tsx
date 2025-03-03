import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../services/authServices";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    department: "",
    address: "",
    phoneNumber: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData); // Call the API service
      console.log("Registration successful:", response);
      alert("Registration successful!");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="w-[300px] h-[450px] sm:w-[450px] sm:h-[750px] flex flex-col justify-between items-center bg-teal-800 mt-2 rounded-lg border-2 border-white text-white shadow-lg shadow-lime-800/6-">
      <form
        id="signupForm"
        className="h-52 w-full grid grid-cols-2 sm:flex sm:flex-col sm:justify-between sm:items-center mt-2 p-4 sm:space-y-12"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="inputClass"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        {/* Last Name */}
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="inputClass"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="inputClass"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="inputClass"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {/* Gender */}
        <select
          name="gender"
          className="inputClass"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>

        {/* Department */}
        <select
          name="department"
          className="inputClass"
          value={formData.department}
          onChange={handleChange}
          required
        >
          <option value="">Department</option>
          <option value="HR">HR</option>
          <option value="Backend Engineer">Backend Engineer</option>
          <option value="Frontend Engineer">Frontend Engineer</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
        </select>

        {/* Address */}
        <input
          type="text"
          name="address"
          placeholder="Address"
          className="inputClass"
          value={formData.address}
          onChange={handleChange}
          required
        />

        {/* Phone Number */}
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          className="inputClass"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </form>
      <button
        form="signupForm"
        className="h-[38px] w-44 mt-20 sm:mt-80 bg-white text-teal-800 font-bold rounded hover:bg-orange-300 hover:text-white cursor-pointer"
        type="submit"
      >
        Sign Up
      </button>
      <p className="p-4 text-center text-sm">
        Thank you for registering with us
      </p>
      <h3 className="w-full py-5 border-t-orange-400 border-t-[0.4px] text-sm text-center font-bold">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 underline">
          Login
        </Link>
      </h3>
    </div>
  );
};
export default Signup;
