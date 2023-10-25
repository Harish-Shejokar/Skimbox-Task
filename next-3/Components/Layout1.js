import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='border-[50px] border-red-300 min-h-[80vh]'>
      {children}
    </div>
  )
}

export default Layout
