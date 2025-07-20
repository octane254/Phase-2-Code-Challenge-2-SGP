import React, { useState } from 'react';

const GoalForm = ({ addGoal }) => {
  const [name, setName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [category, setCategory] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGoal = {
      id: Date.now().toString(),
      name,
      targetAmount: parseFloat(targetAmount),
      savedAmount: 0,
      category,
      deadline,
      createdAt: new Date().toISOString().split('T')[0],
    };
    addGoal(newGoal);
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
// This component allows users to create new financial goals by entering details such as name, target amount, category, and deadline.