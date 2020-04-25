import React from 'react'

interface Props extends React.CSSProperties {
  children: React.ReactNode
}

export const Box = ({children, ...styleProps}: Props) => (
  <div style={{...styleProps}}>{children}</div>
)

interface BtnProps extends React.DOMAttributes<HTMLButtonElement> {
  children: React.ReactChild
}

export const Button = ({children, onClick}: BtnProps) => (
  <button
    onClick={onClick}
    style={{backgroundColor: 'transparent', border: 0, padding: '3px', fontSize: '0.9rem'}}
  >
    {children}
  </button>
)
