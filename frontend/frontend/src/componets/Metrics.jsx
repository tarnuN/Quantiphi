function Metrics({ metrics }) {
  return (
    <div className="metrics">

      <div className="card">
        <h3>Total Monthly Burn Rate</h3>
        <h2>
          ${metrics.totalMonthlyBurn}
        </h2>
      </div>

      <div className="card">
        <h3>Upcoming Renewals</h3>
        <h2>
          {metrics.upcomingRenewalCount}
        </h2>
      </div>

    </div>
  );
}

export default Metrics;