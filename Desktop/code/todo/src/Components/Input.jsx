import React from 'react';


const Input = ({ theme, newItemText, handleInputChange, handleKeyDown }) => {
  return (
    <div className={`bg-very-dark rounded-md h-16 mb-10 w-full flex items-center shadow-md ${
      theme === 'dark' ? 'bg-very-dark' : 'bg-white'
    }`}>
      <div className="border rounded-full w-5 h-5 ml-6" />
      <input
        placeholder='Create a new to do...'
        className={`bg-very-dark rounded-md w-full outline-none pl-10 font-JosefinSans text-white ${
          theme === 'dark' ? 'bg-very-dark text-white' : 'bg-white text-zinc-600'
        }`}
        value={newItemText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Input;
