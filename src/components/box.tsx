import React from 'react'

interface Props extends React.CSSProperties {
  children: React.ReactNode
}

export default function Box({children, ...styleProps}: Props) {
  return <div style={{...styleProps}}>{children}</div>
}
