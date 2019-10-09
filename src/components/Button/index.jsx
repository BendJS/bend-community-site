import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import tokens from '../Tokens'

const Button = ({ children }) => (
  <button
    css={{
      backgroundColor: tokens.colors.background.interactive.default,
      color: tokens.colors.text.onInteractive
    }}
  >
    {children}
  </button>
)

export default Button
