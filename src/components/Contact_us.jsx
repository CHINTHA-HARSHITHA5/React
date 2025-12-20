import React, {useState} from 'react'

const Contact_us = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phone: "",
    company: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Form submitted:", formData);

    // 👉 API call goes here
    // fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) })
  };

  const inputClass =
    "block w-full px-0 py-2.5 text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer";

  const labelClass =
    "absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

  return (
    <div className="flex justify-center py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-6"
      >
        {/* Email */}
        <div className="relative z-0 group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            placeholder=" "
            required
          />
          <label className={labelClass}>Email address</label>
        </div>

        {/* Password */}
        <div className="relative z-0 group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={inputClass}
            placeholder=" "
            required
          />
          <label className={labelClass}>Password</label>
        </div>

        {/* Confirm Password */}
        <div className="relative z-0 group">
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={inputClass}
            placeholder=" "
            required
          />
          <label className={labelClass}>Confirm password</label>
        </div>

        {/* First & Last Name */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative z-0 group">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={inputClass}
              placeholder=" "
              required
            />
            <label className={labelClass}>First name</label>
          </div>

          <div className="relative z-0 group">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={inputClass}
              placeholder=" "
              required
            />
            <label className={labelClass}>Last name</label>
          </div>
        </div>

        {/* Phone & Company */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative z-0 group">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputClass}
              placeholder=" "
              required
            />
            <label className={labelClass}>contact number</label>
          </div>

          <div className="relative z-0 group">
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={inputClass}
              placeholder=" "
              required
            />
            <label className={labelClass}>Company</label>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-base bg-brand px-4 py-2.5 text-sm font-medium text-green-600 shadow-xs hover:bg-brand-strong focus:outline-none focus:ring-4 focus:ring-brand-medium"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact_us;
