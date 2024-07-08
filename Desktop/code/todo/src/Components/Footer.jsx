import React from 'react';

const Footer = ({
  filteredTodoItems,
  filterOption,
  handleFilterOption,
  handleClearCompleted,
  theme,
}) => {
  return (
    <div
      className={`flex justify-between font-JosefinSans px-6 py-8 h-12 shadow-xl ${
        theme === 'light' ? 'bg-white' : 'bg-very-dark'
      } items-center rounded-b-md`}
    >
      <p className="text-zinc-400 text-sm">
        {filteredTodoItems.length} {filteredTodoItems.length === 1 ? 'item' : 'items'} left
      </p>
      <div className="flex gap-3 text-zinc-400">
        <p
          className={`cursor-pointer text-sm ${
            theme === 'light' ? 'hover:text-zinc-800' : 'hover:text-white'
          } ${filterOption === 'All' ? 'text-blue-400' : ''}`}
          onClick={() => handleFilterOption('All')}
        >
          All
        </p> 
        <p
          className={`cursor-pointer text-sm ${
            theme === 'light' ? 'hover:text-zinc-800' : 'hover:text-white'
          } ${filterOption === 'Active' ? 'text-blue-400' : ''}`}
          onClick={() => handleFilterOption('Active')}
        >
          Active
        </p>
        <p
          className={`cursor-pointer text-sm font-Josefin Sans ${
            theme === 'light' ? 'hover:text-zinc-800' : 'hover:text-white'
          } ${filterOption === 'Completed' ? 'text-blue-400' : ''}`}
          onClick={() => handleFilterOption('Completed')}
        >
          Completed
        </p>
      </div>

      <p
        className={`text-red-400 cursor-pointer text-sm ${
          theme === 'light' ? 'hover:text-red-500' : 'hover:text-white'
        }`}
        onClick={handleClearCompleted}
      >
        Clear Completed
      </p>
    </div>
  );
};

export default Footer;
