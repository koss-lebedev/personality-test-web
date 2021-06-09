import React from 'react'
import { FC } from 'react'
import GlobalStyle from '~/styles/global'

const Layout: FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}

export default Layout
