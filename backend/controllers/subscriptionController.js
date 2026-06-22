const { v4: uuidv4 } = require("uuid");

const {
  subscriptions,
  getMetrics,
  normalizeToMonthly,
  daysUntilRenewal,
  renewingSoon,
} = require("../services/subscriptionService");

exports.getAll = (req,res) => {

  const data = subscriptions.map(sub => ({
    ...sub,
    daysUntilRenewal:
      daysUntilRenewal(sub.nextRenewalDate),

    renewingSoon:
      renewingSoon(sub.nextRenewalDate)
  }));

  res.json({
    subscriptions:data,
    metrics:getMetrics()
  });
};

exports.addSubscription = (req,res) => {

  const {
    name,
    cost,
    billingCycle,
    nextRenewalDate
  } = req.body;

  const sub = {
    id: uuidv4(),
    name,
    cost:Number(cost),
    billingCycle,
    nextRenewalDate,
    monthlyRate:
      normalizeToMonthly(
        Number(cost),
        billingCycle
      ),
    status:"active"
  };

  subscriptions.push(sub);

  res.status(201).json(sub);
};