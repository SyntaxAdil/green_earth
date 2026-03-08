import React from 'react'

const Button = ({content,extraClass=""}) => {
  return (
    <button className={`btn border-0 bg-[#facc15] text-[#6a9c2e] text-base font-semibold rounded-full ${extraClass}`}>{content}</button>
  )
}

export default Button