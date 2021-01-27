import React from 'react'
import PropTypes from 'prop-types'

export const OccupancyTable = ({
  premiumUsage, premiumRevenue, economyUsage, economyRevenue,
}) => (
  <table>
    <thead>
      <tr>
        <td />
        <th>Premium</th>
        <th>Economy</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Usage</td>
        <td>{premiumUsage}</td>
        <td>{premiumRevenue}</td>
      </tr>
      <tr>
        <td>Revenue</td>
        <td>{economyUsage}</td>
        <td>{economyRevenue}</td>
      </tr>
    </tbody>
  </table>
)

OccupancyTable.propTypes = {
  premiumUsage: PropTypes.number.isRequired,
  premiumRevenue: PropTypes.number.isRequired,
  economyUsage: PropTypes.number.isRequired,
  economyRevenue: PropTypes.number.isRequired,
}
