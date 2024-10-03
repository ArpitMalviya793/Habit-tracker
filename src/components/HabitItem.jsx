import React, { useState } from 'react';

function HabitItem({ habit, toggleHabit, updateHabitName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(habit.name);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    updateHabitName(habit.id, newName);
  };

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      ) : (
        // Strikethrough only the habit name if completed
        <span style={{ textDecoration: habit.completed ? 'line-through' : 'none' }}>
          {habit.name}
        </span>
      )}
      <span style={{ marginLeft: '10px' }}>Streak: {habit.streak}</span>

      {/* Adding space between buttons */}
      <button style={{ marginLeft: '10px' }} onClick={() => toggleHabit(habit.id)}>
        {habit.completed ? 'Undo' : 'Complete'}
      </button>
      
      {isEditing ? (
        <button style={{ marginLeft: '10px' }} onClick={handleSave}>Save</button>
      ) : (
        <button style={{ marginLeft: '10px' }} onClick={handleEdit}>Edit</button>
      )}
    </li>
  );
}

export default HabitItem;
