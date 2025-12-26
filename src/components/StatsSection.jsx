function StatsSection({ applications, interviews }) {
    return (
        <div>
            <h2>Stats</h2>
            <p>Applications: {applications}</p>
            <p>Interviews: {interviews}</p>
        </div>
    );
}
export default StatsSection;