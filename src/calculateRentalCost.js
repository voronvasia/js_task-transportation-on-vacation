/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceForDay = 40;
  const discountFor3Days = 20;
  const discountFor7Days = 50;

  let totalCost = days * priceForDay;

  if (days >= 7) {
    totalCost -= discountFor7Days;
  } else if (days >= 3) {
    totalCost -= discountFor3Days;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
