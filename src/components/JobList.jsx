function JobList({ jobs }) {
    return (
        <div>
            <h2>Job Listings</h2>
            <ul>
                {jobs.map((job) => (
                    <li key={job.id}>
                        {job.company} - {job.role} ({job.status})
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default JobList;
