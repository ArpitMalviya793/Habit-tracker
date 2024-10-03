import React, { useState, useEffect } from 'react';
import HabitList from './components/HabitList';
import HabitForm from './components/HabitForm';

function App() {
  const [habits, setHabits] = useState([]);

  // Load habits from localStorage when the app starts
  useEffect(() => {
    const savedHabits = JSON.parse(localStorage.getItem('habits'));
    if (savedHabits) {
      setHabits(savedHabits);
    }
  }, []);

  // Update localStorage whenever the habits state changes
  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  const addHabit = (name) => {
    setHabits([...habits, { id: habits.length + 1, name, completed: false, streak: 0 }]);
  };

  const toggleHabit = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              completed: !habit.completed,
              streak: habit.completed ? habit.streak : habit.streak + 1,
            }
          : habit
      )
    );
  };

  const updateHabitName = (id, newName) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, name: newName } : habit
      )
    );
  };

  return (
    <div className="App">
      <h1>Habit Tracker</h1>
      <HabitForm addHabit={addHabit} />
      <HabitList habits={habits} toggleHabit={toggleHabit} updateHabitName={updateHabitName} />
    </div>
  );
}

export default App;
