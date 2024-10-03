import React from 'react';
import HabitItem from './HabitItem';

function HabitList({ habits, toggleHabit, updateHabitName }) {
  return (
    <ul>
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          toggleHabit={toggleHabit}
          updateHabitName={updateHabitName}
        />
      ))}
    </ul>
  );
}

export default HabitList;
