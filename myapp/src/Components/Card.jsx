import React from 'react'

const Card = (props) => {
  return (
    <div className='w-[40rem] m-auto mt-[5rem] p-3 shadow-sm border-2 border-slate-900 rounded-xl'>
      {props.children}
    </div>
  )
}

export default Card
