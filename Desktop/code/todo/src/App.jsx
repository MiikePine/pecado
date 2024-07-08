import bgDarkD from './images/bgDarkD.jpg';
import bgLightD from "./images/bgLightD.jpg"
import { useState } from 'react';
import Input from './Components/Input';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [newItemText, setNewItemText] = useState('');
  const [completedItems, setCompletedItems] = useState([]);
  const [filterOption, setFilterOption] = useState('All');
  const [theme, setTheme] = useState('dark');


  const handleInputChange = (event) => {
    setNewItemText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newItemText.trim() !== '') {
      setTodoItems([...todoItems, newItemText]);
      setNewItemText('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  const handleDelete = (index) => {
    setTodoItems(todoItems.filter((_, i) => i !== index));
  };



  const handleToggleComplete = (index) => {
    const updatedCompletedItems = [...completedItems];
  
    if (completedItems.includes(index)) {
      const itemIndex = completedItems.indexOf(index);
      updatedCompletedItems.splice(itemIndex, 1);
    } else {
      updatedCompletedItems.push(index);
    }
  
    setCompletedItems(updatedCompletedItems);
  };

  const handleFilterOption = (option) => {
    setFilterOption(option);
  };


  const handleClearCompleted = () => {
    setTodoItems(todoItems.filter((_, index) => !completedItems.includes(index)));
    setCompletedItems([]);
  };

  const handleThemeToggle = () => {
    console.log('Toggle button clicked');
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }; 

  const filteredTodoItems = filterOption === 'All'
    ? todoItems
    : filterOption === 'Active'
    ? todoItems.filter((_, index) => !completedItems.includes(index))
    : todoItems.filter((_, index) => completedItems.includes(index));

  const backgroundImage = theme === 'dark' ? bgDarkD : bgLightD;

  return (
    <main className={`block w-screen h-auto ${theme === 'dark' ? 'bg-zinc-900' : 'bg-white'}`}>
      <img src={backgroundImage} alt="bg" className="fixed left-0 top-0 z-10 h-auto w-full" />
      
      <div className='mx-auto flex items-center place-content-center h-screen'> 
        <section className="w-1/3  relative z-20"> 
         
          <div className='w-full flex justify-center items-start mb-10'>
            <Header handleThemeToggle={handleThemeToggle} theme={theme} />
          </div>

   
        <div className="items-center">
          <Input
            newItemText={newItemText}
            handleInputChange={handleInputChange}
            handleKeyDown={handleKeyDown}
            theme={theme}
          />

          <Main
            filteredTodoItems={filteredTodoItems}
            theme={theme}
            completedItems={completedItems}
            handleToggleComplete={handleToggleComplete}
            handleDelete={handleDelete}
          />

          <Footer
            filteredTodoItems={filteredTodoItems}
            filterOption={filterOption}
            handleFilterOption={handleFilterOption}
            handleClearCompleted={handleClearCompleted}
            theme={theme}
          />
        </div>
      </section>
      </div>
    </main>
  );
}

export default App;
