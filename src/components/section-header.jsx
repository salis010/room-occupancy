import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

export const H2 = styled.h2`
    font-size: 1.6rem;
    padding-bottom: 0.8rem;
    color: grey;
    border-bottom: 1px solid ${(props) => props.theme.colors.lightGrey};
`

export const SectionHeader = ({ title }) => (
  <H2>{title}</H2>
)

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
}
