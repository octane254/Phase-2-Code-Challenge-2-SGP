import React from 'react';
import GoalItem from './GoalItem';

const GoalList = ({ goals, updateGoal, deleteGoal }) => {
  return (
    <div>
      {goals.map(goal => (
        <GoalItem key={goal.id} goal={goal} updateGoal={updateGoal} deleteGoal={deleteGoal} /> // Render each goal item
      ))}
    </div>
  );
};

export default GoalList;
