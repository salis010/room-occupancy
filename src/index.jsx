import React from 'react'
import ReactDOM from 'react-dom'
import { Global, css } from '@emotion/react'
import { globalCSS } from './styles/global-css'
import { App } from './components/app'

const mountNode = document.getElementById('mountNode')

ReactDOM.render(
  <>
    <App />
    <Global
      styles={css`
                ${globalCSS}
            `}
    />
  </>,
  mountNode,
)
