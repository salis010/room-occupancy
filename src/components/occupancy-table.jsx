import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const TableWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    padding: 0 1rem;
    border: 1px solid ${(props) => props.theme.colors.lightGrey};
    border-radius: ${(props) => props.theme.dimensions.borderRadius};
`

const Table = styled.table`
    font-size: 1.2rem;
    width: 35rem;
    padding: 3rem 2.4rem;
    border-collapse: collapse;
    color: ${(props) => props.theme.colors.darkGrey};
`

const TH = styled.th`
    font-weight: 600;
    padding: 1rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.lightGrey};
    
`

const TD = styled.td`
    padding: 1rem;
    text-align: center;

    &:nth-of-type(1) {
        text-align: left;
    }
`

const TR = styled.tr`
    &:nth-of-type(3) {
        font-weight: 800;
        border-top: 1px solid ${(props) => props.theme.colors.lightGrey};
    }
`

export const OccupancyTable = ({
  premiumUsage, premiumRevenue, economyUsage, economyRevenue,
}) => {
  const totalRevenue = premiumRevenue + economyRevenue
  const totalUsage = premiumUsage + premiumUsage

  return (
    <TableWrapper>
      <Table>
        <thead>
          <TR>
            <TH />
            <TH>Usage</TH>
            <TH>Revenue</TH>
          </TR>
        </thead>
        <tbody>
          <TR>
            <TD>Premium</TD>
            <TD>{premiumUsage}</TD>
            <TD>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(premiumRevenue)}</TD>
          </TR>
          <TR>
            <TD>Economy</TD>
            <TD>{economyUsage}</TD>
            <TD>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(economyRevenue)}</TD>
          </TR>
          <TR>
            <TD>Totals</TD>
            <TD>{totalUsage}</TD>
            <TD>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(totalRevenue)}</TD>
          </TR>
        </tbody>
      </Table>
    </TableWrapper>
  )
}

OccupancyTable.propTypes = {
  premiumUsage: PropTypes.number.isRequired,
  premiumRevenue: PropTypes.number.isRequired,
  economyUsage: PropTypes.number.isRequired,
  economyRevenue: PropTypes.number.isRequired,
}
