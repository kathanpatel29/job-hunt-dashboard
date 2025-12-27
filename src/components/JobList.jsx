function JobList({ jobs }) {
  return (
    <div>
      <h2>My Applications</h2>

      {jobs.map((job) => (
        <div key={job.id}>
          <p>{job.company}</p>
          <p>{job.role}</p>
          <p>Status: {job.status}</p>
        </div>
      ))}
    </div>
  );
}

export default JobList;
