import React, { useState } from 'react';

function HabitForm({ addHabit }) {
  const [habitName, setHabitName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName) {
      addHabit(habitName);
      setHabitName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="New Habit"
      />
      <button type="submit">Add Habit</button>
    </form>
  );
}

export default HabitForm;
