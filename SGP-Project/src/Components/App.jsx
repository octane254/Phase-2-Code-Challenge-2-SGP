import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GoalForm from './components/GoalForm';
import GoalList from './components/GoalList';
import Overview from './components/Overview';

const App = () => {
  // State to hold the list of goals
  const [goals, setGoals] = useState([]);

  // Fetch goals from the API when the component mounts
  useEffect(() => {
    const fetchGoals = async () => {
      const response = await axios.get('http://localhost:3000/goals');
      setGoals(response.data); // Update state with fetched goals
    };
    fetchGoals();
  }, []);

  // Function to add a new goal
  const addGoal = async (goal) => {
    const response = await axios.post('http://localhost:3000/goals', goal);
    setGoals([...goals, response.data]); // Update state with the new goal
  };

  // Function to update an existing goal
  const updateGoal = async (id, updatedGoal) => {
    await axios.put(`http://localhost:3000/goals/${id}`, updatedGoal);
    setGoals(goals.map(goal => (goal.id === id ? updatedGoal : goal))); // Update state with the modified goal
  };

  // Function to delete a goal
  const deleteGoal = async (id) => {
    await axios.delete(`http://localhost:3000/goals/${id}`);
    setGoals(goals.filter(goal => goal.id !== id)); // Remove the deleted goal from state
  };

  return (
    <div>
      <h1>Smart Goal Planner</h1>
      <GoalForm addGoal={addGoal} /> {/* Form to add new goals */}
      <GoalList goals={goals} updateGoal={updateGoal} deleteGoal={deleteGoal} /> {/* List of goals */}
      <Overview goals={goals} /> {/* Overview of savings statistics */}
    </div>
  );
};

export default App;
// This is the main application component that manages the state of financial goals, allowing users to add, update, and delete goals.