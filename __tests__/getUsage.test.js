import { getUsage } from '../src/utils/get-usage'

describe('getUsage', () => {
  const bids = [23, 45, 155, 374, 22, 99, 100, 101, 115, 209]

  const cases = [
    [3, 3, { premium: { usage: 3, revenue: 738 }, economy: { usage: 3, revenue: 167 } }],
    [7, 5, { premium: { usage: 6, revenue: 1054 }, economy: { usage: 4, revenue: 189 } }],
    [2, 7, { premium: { usage: 2, revenue: 583 }, economy: { usage: 4, revenue: 189 } }],
    [7, 1, { premium: { usage: 7, revenue: 1153 }, economy: { usage: 1, revenue: 45 } }],
    // extra cases to test extremities
    [-100, -100, { premium: { usage: 0, revenue: 0 }, economy: { usage: 0, revenue: 0 } }],
    [0, 0, { premium: { usage: 0, revenue: 0 }, economy: { usage: 0, revenue: 0 } }],
    [100, 100, { premium: { usage: 6, revenue: 1054 }, economy: { usage: 4, revenue: 189 } }],
    [100, 0, { premium: { usage: 10, revenue: 1243 }, economy: { usage: 0, revenue: 0 } }],
    [0, 100, { premium: { usage: 0, revenue: 0 }, economy: { usage: 4, revenue: 189 } }],
  ]

  it.each(cases)('given %p premium rooms and %p economy rooms it returns %o', (premiumRooms, economyRooms, usage) => {
    const result = getUsage(premiumRooms, economyRooms, bids)
    expect(result).toEqual(usage)
  })
})
