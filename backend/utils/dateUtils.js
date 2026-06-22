function daysUntilRenewal(date) {
  const today = new Date();

  today.setHours(0,0,0,0);

  const renewal = new Date(date);

  renewal.setHours(0,0,0,0);

  const diff = renewal - today;

  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function renewingSoon(date) {
  const days = daysUntilRenewal(date);

  return days >= 0 && days <= 7;
}

module.exports = {
  daysUntilRenewal,
  renewingSoon
};