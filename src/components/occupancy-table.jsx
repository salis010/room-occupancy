import React from 'react'
import PropTypes from 'prop-types'

export const OccupancyTable = ({
  premiumUsage, premiumRevenue, economyUsage, economyRevenue,
}) => {
  const totalRevenue = premiumRevenue + economyRevenue
  const totalUsage = premiumUsage + premiumUsage

  return (
    <table>
      <thead>
        <tr>
          <td />
          <th>Usage</th>
          <th>Revenue</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Premium</td>
          <td>{premiumUsage}</td>
          <td>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(premiumRevenue)}</td>
        </tr>
        <tr>
          <td>Economy</td>
          <td>{economyUsage}</td>
          <td>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(economyRevenue)}</td>
        </tr>
        <tr>
          <td>Totals</td>
          <td>{totalUsage}</td>
          <td>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(totalRevenue)}</td>
        </tr>
      </tbody>
    </table>
  )
}

OccupancyTable.propTypes = {
  premiumUsage: PropTypes.number.isRequired,
  premiumRevenue: PropTypes.number.isRequired,
  economyUsage: PropTypes.number.isRequired,
  economyRevenue: PropTypes.number.isRequired,
}
