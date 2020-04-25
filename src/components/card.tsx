import React from 'react'

import {Box, Button} from './core'

export const Card: React.FC = ({children}) => (
  <Box
    display="flex"
    alignItems="center"
    position="relative"
    backgroundColor="white"
    margin="0.5rem 0"
  >
    {children}
  </Box>
)

export const CardContent: React.FC = ({children}) => (
  <p
    style={{
      flexGrow: 1,
      margin: 0,
      padding: '0.5rem 1.4rem',
      fontSize: '0.9rem',
      wordBreak: 'break-word',
    }}
  >
    {children}
  </p>
)

export const CardLeftButton = ({children, onClick}: Parameters<typeof Button>[0]) => (
  <Box position="absolute" left={0} padding="0.2rem">
    <Button onClick={onClick}>{children}</Button>
  </Box>
)

export const CardRightButton = ({children, onClick}: Parameters<typeof Button>[0]) => (
  <Box position="absolute" right={0} padding="0.2rem">
    <Button onClick={onClick}>{children}</Button>
  </Box>
)
