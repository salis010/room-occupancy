import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Label, NumberInput } from './common'

const RoomTypeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
`

export const RoomType = ({
  id, roomType, value = 0, onChange,
}) => (
  <RoomTypeWrapper>
    <Label>
      {roomType}
      :
    </Label>
    <NumberInput type="number" min="0" id={id} value={value} onChange={onChange} />
  </RoomTypeWrapper>
)

RoomType.propTypes = {
  id: PropTypes.string.isRequired,
  roomType: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}
