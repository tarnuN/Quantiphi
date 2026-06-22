const subscriptions = require("../data/subscriptions");

const { normalizeToMonthly } =
  require("../utils/costUtils");

const {
  daysUntilRenewal,
  renewingSoon,
} = require("../utils/dateUtils");

function getMetrics() {

  const activeSubs =
    subscriptions.filter(
      sub => sub.status === "active"
    );

  const totalMonthlyBurn =
    activeSubs.reduce(
      (sum, sub) => sum + sub.monthlyRate,
      0
    );

  const upcomingRenewalCount =
    activeSubs.filter(
      sub => renewingSoon(sub.nextRenewalDate)
    ).length;

  return {
    totalMonthlyBurn,
    upcomingRenewalCount
  };
}

module.exports = {
  subscriptions,
  getMetrics,
  normalizeToMonthly,
  daysUntilRenewal,
  renewingSoon
};