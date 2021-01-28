import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

export const Header = styled.header`
    padding: 1rem;
    margin-bottom: 2rem;
    color: grey;
    background-image: linear-gradient(to right, ${(props) => props.theme.colors.primary} , ${(props) => props.theme.colors.secondary});
    `

export const H1 = styled.h1`
    font-size: 1.8rem;
    font-weight: 100;
    letter-spacing: 1rem;
    margin-left: 6rem;
    color: ${(props) => props.theme.colors.white}
`

export const PageHeader = ({ title }) => (
  <Header>
    <H1>{title.toUpperCase()}</H1>
  </Header>
)

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
}
