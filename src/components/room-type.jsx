import React from 'react'
import styled from '@emotion/styled'
import { Label } from './common'

const RoomTypeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid grey;
`

export const RoomType = ({
  id, roomType, value = 0, onChange,
}) => (
  <RoomTypeWrapper>
    <Label>{roomType}</Label>
    <input type="number" min="0" id={id} value={value} onChange={onChange} />
  </RoomTypeWrapper>
)
