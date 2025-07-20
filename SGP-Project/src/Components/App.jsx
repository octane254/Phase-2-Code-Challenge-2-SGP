import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GoalForm from './components/GoalForm';
import GoalList from './components/GoalList';
import Overview from './components/Overview';

const App = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const fetchGoals = async () => {
      const response = await axios.get('http://localhost:3000/goals');
      setGoals(response.data);
    };
    fetchGoals();
  }, []);

  const addGoal = async (goal) => {
    const response = await axios.post('http://localhost:3000/goals', goal);
    setGoals([...goals, response.data]);
  };

  const updateGoal = async (id, updatedGoal) => {
    await axios.put(`http://localhost:3000/goals/${id}`, updatedGoal);
    setGoals(goals.map(goal => (goal.id === id ? updatedGoal : goal)));
  };

  const deleteGoal = async (id) => {
    await axios.delete(`http://localhost:3000/goals/${id}`);
    setGoals(goals.filter(goal => goal.id !== id));
  };

  return (
    <div>
      <h1>Smart Goal Planner</h1>
      <GoalForm addGoal={addGoal} />
      <GoalList goals={goals} updateGoal={updateGoal} deleteGoal={deleteGoal} />
      <Overview goals={goals} />
    </div>
  );
};

export default App;
// This is the main application component for the Smart Goal Planner, managing state and API interactions.