import React, { useState } from 'react';

const GoalForm = ({ addGoal }) => {
  const [name, setName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [category, setCategory] = useState('');
  const [deadline, setDeadline] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const newGoal = {
      id: Date.now().toString(), // Generate a unique ID for the new goal
      name,
      targetAmount: parseFloat(targetAmount), // Convert target amount to a number
      savedAmount: 0, // Initialize saved amount to 0
      category,
      deadline,
      createdAt: new Date().toISOString().split('T')[0], // Set creation date
    };
    addGoal(newGoal); // Call the addGoal function passed as a prop
    // Reset form fields
    setName('');
    setTargetAmount('');
    setCategory('');
    setDeadline('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Goal Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="number" placeholder="Target Amount" value={targetAmount} onChange={(e) => setTargetAmount(e.target.value)} required />
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
      <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} required />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default GoalForm;
