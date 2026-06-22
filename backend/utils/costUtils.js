function normalizeToMonthly(cost, cycle) {
  if (cycle === "yearly") {
    return Number((cost / 12).toFixed(2));
  }

  return Number(cost);
}

module.exports = { normalizeToMonthly };