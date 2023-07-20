import { useEffect, useState } from 'react';

export const useDashboard = () => {
  useEffect(() => {
    // Fetch user progress data from the backend API
    // and update the state variables
    fetchUserProgressData();
  }, []);

  const fetchUserProgressData = () => {
    // Simulated API call to retrieve user progress data
    const userProgressData = {
      username: 'Michael',
      completedTopics: 5,
      totalQuizzes: 10,
      averageScore: 80,
    };

    setUsername(userProgressData.username);
    setCompletedTopics(userProgressData.completedTopics);
    setTotalQuizzes(userProgressData.totalQuizzes);
    setAverageScore(userProgressData.averageScore);
  };

  const [username, setUsername] = useState('');
  const [completedTopics, setCompletedTopics] = useState(0);
  const [totalQuizzes, setTotalQuizzes] = useState(0);
  const [averageScore, setAverageScore] = useState(0);

  const handleStartQuiz = () => {
    console.log('Redirecting to quiz screen...');
  };

  return {
    username,
    completedTopics,
    totalQuizzes,
    averageScore,
    handleStartQuiz,
  };
};