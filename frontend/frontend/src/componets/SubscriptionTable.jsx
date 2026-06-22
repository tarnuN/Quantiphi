function SubscriptionTable({
subscriptions,
onToggle,
onDelete,
}) {
return ( <table> <thead> <tr> <th>Service</th> <th>Cost</th> <th>Cycle</th> <th>Monthly Rate</th> <th>Days Left</th> <th>Status</th> <th>Actions</th> </tr> </thead>

```
  <tbody>
    {subscriptions.map((sub) => (
      <tr
        key={sub.id}
        className={
          sub.status === "paused"
            ? "paused-row"
            : ""
        }
      >
        <td>
          {sub.name}

          {sub.renewingSoon && (
            <span className="badge">
              Renewing Soon
            </span>
          )}
        </td>

        <td>${sub.cost}</td>

        <td>{sub.billingCycle}</td>

        <td>${sub.monthlyRate}</td>

        <td>
          {sub.daysUntilRenewal}
        </td>

        <td>{sub.status}</td>

        <td>
          <button
            onClick={() =>
              onToggle(sub.id)
            }
          >
            Toggle
          </button>

          <button
            onClick={() =>
              onDelete(sub.id)
            }
          >
            Delete
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>


);
}

export default SubscriptionTable;
