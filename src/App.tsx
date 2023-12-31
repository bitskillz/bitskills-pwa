import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Dashboard/Dashboard';
import Layout from './Layout';
import Login from './pages/Login/Login';
import { AuthContextProvider } from './contexts/AuthContext';
import TopicsPage from './pages/TopicSelection/TopicSelection';
import QuizPage from './pages/QuizPage/QuizPage';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/login' element={<Login />} />
            <Route path='/topics' element={<TopicsPage />} />
            <Route path='/quiz/:topicId' element={<QuizPage />} />
          </Routes>
        </Layout>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
