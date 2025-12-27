import { useState } from 'react'
import StatsSection from './components/StatsSection'
import JobList from './components/JobList'
import React from 'react'
import './App.css'

function App() {
  const [applications, setApplications] = useState(0);
  const [interviews, setInterviews] = useState(0);
  const [jobs, setJobs] = useState([
    { id: 1, company: 'Meta', role: 'Frontend Developer', status: 'Applied' },
    { id: 2, company: 'Amazon', role: 'Backend Developer', status: 'Interviewing' },
  ]);
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
