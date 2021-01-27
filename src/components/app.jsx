import React, { useState } from 'react'
import { H1, H2, PageWrapper, RoomTypesWrapper } from './common'
import { RoomType } from './room-type'
import { getUsage } from './utils/get-usage'

export const App = () => {
  const [ freeRooms, setFreeRooms ] = useState({
    economy: 0,
    premium: 0
  })
  const [usage, setUsage] = useState({ 
    premium: { 
        usage: 0,
        revenue: 0 
      }, 
    economy: { 
      usage: 0,
      revenue: 0 
    } 
  })

  const onChangeHandler = event => setFreeRooms(
    {
      ...freeRooms, 
      [event.target.id]: event.target.value
    }
  )

  const onClickHandler = () => setUsage(getUsage(usage.premium))

  return (
    <PageWrapper>
      <H1>Room Occupancy</H1>
      <H2>Enter available rooms:</H2>
      <RoomTypesWrapper>
        <RoomType id="premium" roomType="Premium" value={freeRooms.premium} onChange={onChangeHandler} />
        <RoomType id="economy" roomType="Economy" value={freeRooms.economy} onChange={onChangeHandler} />
      </RoomTypesWrapper>
    </PageWrapper>
  )
}
