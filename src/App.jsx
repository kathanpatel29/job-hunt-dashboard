import { useState } from 'react'
import StatsSection from './components/StatsSection'
import React from 'react'
import './App.css'

function App() {
  const [applications, setApplications] = useState(0);
  const [interviews, setInterviews] = useState(0);
  return (
    <div className="App">
      <h1>Job Hunt Dashboard</h1>

      <StatsSection applications={applications} interviews={interviews} />
      <button onClick={() => setApplications(applications + 1)}>Add Application</button>
      <button onClick={() => setInterviews(interviews + 1)}>Add Interview</button>
    </div>
  );
}

export default App
