import React from 'react';

const Overview = ({ goals }) => {
  const totalGoals = goals.length; // Calculate total number of goals
  const totalSaved = goals.reduce((acc, goal) => acc + goal.savedAmount, 0); // Calculate total amount saved across all goals
  const completedGoals = goals.filter(goal => goal.savedAmount >= goal.targetAmount).length; // Count completed goals

  return (
    <div>
      <h2>Overview</h2>
      <p>Total Goals: {totalGoals}</p> {/* Display total number of goals */}
      <p>Total Saved: ${totalSaved}</p> {/* Display total amount saved */}
      <p>Completed Goals: {completedGoals}</p> {/* Display number of completed goals */}
    </div>
  );
};

export default Overview;
