import React from 'react'

const Button = ({apon,onClick,demo}) => {
  return (
   <button className='bg-neutral-500 py-3 px-5.5 rounded-2xl' onClick={onClick} >{apon}{demo}</button>
  )
}

export default Button
