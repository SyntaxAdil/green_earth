import React from 'react'

const Heading = ({content,extraClass}) => {
  return (
    <h1 className={`text-4xl font-semibold text-center text-[#1F2937] mb-4 ${extraClass}`}>{content}</h1>
  )
}

export default Heading