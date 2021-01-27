import React, { useState, useEffect } from 'react'
import {
  H1, H2, PageWrapper, RoomTypesWrapper,
} from './common'
import { RoomType } from './room-type'
import { OccupancyTable } from './occupancy-table'
import { getUsage } from '../utils/get-usage'

export const App = () => {
  const [bids, setBids] = useState([])
  const [freeRooms, setFreeRooms] = useState({
    economy: 0,
    premium: 0,
  })
  const [usage, setUsage] = useState({
    premium: {
      usage: 0,
      revenue: 0,
    },
    economy: {
      usage: 0,
      revenue: 0,
    },
  })

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/lwhiteley/b01cf0964e19704df06fccf44d0c3c4d/raw/580a0aa9675985674dd1a70ffa799a4288c94bb3/guests.json')
      .then((response) => response.json())
      .then((data) => setBids(data))
      .catch((err) => console.log('Failed to get JSON file: ', err))
  }, [])

  const onChangeHandler = (event) => setFreeRooms(
    {
      ...freeRooms,
      [event.target.id]: event.target.value,
    },
  )

  const onClickHandler = () => {
    setUsage(getUsage(freeRooms.premium, freeRooms.economy, bids))
  }

  return (
    <PageWrapper>
      <H1>Room Occupancy</H1>
      <H2>Enter available rooms:</H2>
      <RoomTypesWrapper>
        <RoomType id="premium" roomType="Premium" value={freeRooms.premium} onChange={onChangeHandler} />
        <RoomType id="economy" roomType="Economy" value={freeRooms.economy} onChange={onChangeHandler} />
      </RoomTypesWrapper>
      <button onClick={onClickHandler}>Check Occupancy</button>
      <OccupancyTable
        premiumUsage={usage.premium.usage}
        premiumRevenue={usage.premium.revenue}
        economyUsage={usage.economy.usage}
        economyRevenue={usage.economy.revenue}
      />
    </PageWrapper>
  )
}
