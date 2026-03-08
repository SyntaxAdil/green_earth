import React from 'react'

const Wrapper = ({children,extraClasses}) => {
  return (
    <section className={`max-w-6xl mx-auto px-4 space-y-2 ${extraClasses || ""}`} >{children}</section>
  )
}

export default Wrapper