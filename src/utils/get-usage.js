export const getUsage = (premiumRooms, economyRooms, bids) => {
  let premiumUsage = 0
  let economyUsage = 0
  let premiumRevenue = 0
  let economyRevenue = 0

  // sort bids in descenting order
  const sortedBids = bids.sort((a, b) => b - a)

  // separate premium from economy bids
  const largestEconomyBidIndex = sortedBids.findIndex((bid) => bid < 100)
  const premiumBids = sortedBids.slice(0, largestEconomyBidIndex)
  let economyBids = sortedBids.slice(largestEconomyBidIndex)

  // calculate premium usage
  for (let i = 0; i < premiumBids.length && premiumUsage < premiumRooms; i += 1) {
    premiumRevenue += premiumBids[i]
    premiumUsage += 1
  }

  // calculate upgrade usage
  const economyOverDemand = economyBids.length - economyRooms
  const premiumRoomsLeft = premiumRooms - premiumUsage

  if (economyOverDemand > 0 && premiumRoomsLeft > 0) {
    const upgradedBids = economyBids.slice(0, premiumRoomsLeft)
    economyBids = economyBids.slice(premiumRoomsLeft)

    for (let i = 0; i < upgradedBids.length; i += 1) {
      premiumRevenue += upgradedBids[i]
      premiumUsage += 1
    }
  }

  // calculate economy usage
  for (let i = 0; i < economyBids.length && economyUsage < economyRooms; i += 1) {
    economyRevenue += economyBids[i]
    economyUsage += 1
  }

  return {
    premium: {
      usage: premiumUsage,
      revenue: premiumRevenue,
    },
    economy: {
      usage: economyUsage,
      revenue: economyRevenue,
    },
  }
}
