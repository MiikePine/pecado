import React from "react";
import { motion, AnimatePresence } from 'framer-motion';

const Main = ({
  filteredTodoItems,
  theme,
  completedItems,
  handleToggleComplete,
  handleDelete,
}) => {



  return (
    <div className="items-center">
      <AnimatePresence>
        {filteredTodoItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className={`h-16 w-full flex items-center border-b-2 ${
              theme === 'light' ? 'border-zinc-300' : 'border-zinc-200'
            } font-JosefinSans shadow-xl py-8 ${theme === 'dark' ? 'bg-very-dark' : 'bg-white'} ${theme === 'dark' ? 'text-red-200' : 'text-zinc-700'}`}
          >
            {/* check mark */}
            <div
              className={`border rounded-full w-5 h-5 cursor-pointer ml-6 font-JosefinSans text-white ${
                completedItems.includes(index) ? 'line-through bg-gradient-to-r from-blue-500 to-purple-500' : ''
              }`}
              onClick={() => handleToggleComplete(index)}
            >
              {completedItems.includes(index) && (
                <svg
                  className="items-center justify-center"
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  fill="none"
                  viewBox="0 0 12 12"
                >
                  <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6l2 2 4-4" />
                </svg>
              )}
            </div>
            {/* check mark */}

            <div className="flex gap-4 w-full items-center justify-between">
              <p
                className={`outline-none pl-10 cursor-pointer flex ${
                  completedItems.includes(index) ? 'line-through' : ''
                } ${
                  completedItems.includes(index) ? '' : ''
                } ${theme === 'light' ? 'bg-white text-very-dark' : 'bg-very-dark text-white'}`}
              >
                {item}
              </p>

              <svg
                onClick={() => handleDelete(index)}
                className="cursor-pointer justify-end mr-6"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
              >
                <path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" />
              </svg>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Main;
