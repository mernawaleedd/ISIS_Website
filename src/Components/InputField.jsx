import React from 'react';
const InputField = ({ label, required, type = 'text', placeholder }) => {
  return (
    <div className="flex flex-col mb-4 w-full">
      <label className="mb-2 text-gray-700 font-medium">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};
export default InputField;