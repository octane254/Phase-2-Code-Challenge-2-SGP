import React, { useState } from 'react';

const GoalItem = ({ goal, updateGoal, deleteGoal }) => {
  // State to hold the current saved amount for the goal
  const [savedAmount, setSavedAmount] = useState(goal.savedAmount);

  // Handle deposit action
  const handleDeposit = () => {
    const updatedGoal = { ...goal, savedAmount: savedAmount + 100 }; // Example deposit amount of $100
    updateGoal(goal.id, updatedGoal); // Update the goal in the database
    setSavedAmount(updatedGoal.savedAmount); // Update local state
  };

  return (
    <div>
      <h3>{goal.name}</h3>
      <p>Target: ${goal.targetAmount}</p>
      <p>Saved: ${savedAmount}</p>
      <p>Remaining: ${goal.targetAmount - savedAmount}</p>
      <button onClick={handleDeposit}>Deposit $100</button> {/* Button to make a deposit */}
      <button onClick={() => deleteGoal(goal.id)}>Delete</button> {/* Button to delete the goal */}
    </div>
  );
};

export default GoalItem;
