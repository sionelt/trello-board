import React from 'react'

import {Box, Button} from './core'

export const Column: React.FC = ({children}) => (
  <Box width="25%" minWidth="250px" padding="0 12.5px">
    {children}
  </Box>
)

export const ColumnHeading = ({children, color}: {children: React.ReactChild; color: string}) => (
  <Box backgroundColor={color} fontWeight="bold" color="white" padding="10px">
    {children}
  </Box>
)

export const ColumnButton = ({children, onClick}: Parameters<typeof Button>[0]) => (
  <Box margin="8px 0">
    <Button onClick={onClick}>{children}</Button>
  </Box>
)
